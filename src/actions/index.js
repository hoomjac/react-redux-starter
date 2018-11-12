import types from '../common/types'
let isLoading = false
let loadingTimer = -1
let actionCount = 0
const ignoreTime = 150

const proxyAction = func => {
  return (...args) => async dispatch => {
    actionCount++
    if (!isLoading) {
      loadingTimer = setTimeout(() => {
        dispatch({
          type: types.global.SHOW_GLOBAL_LOADING,
          payload: true
        })
        loadingTimer = -1
      }, ignoreTime)
      isLoading = true
    }

    await dispatch(func(...args))
    actionCount--
    if (loadingTimer !== -1 && actionCount === 0) {
      clearTimeout(loadingTimer)
      loadingTimer = -1
      isLoading = false
    }
    if (isLoading && actionCount === 0) {
      dispatch({
        type: types.global.SHOW_GLOBAL_LOADING,
        payload: false
      })
      isLoading = false
    }
  }
}
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const actions = {}
for (let i = 0; i < keys.length; i += 1) {
  const actionActions = context(keys[i]).default
  for (const [key, value] of Object.entries(actionActions)) {
    if (!!actions[key]) {
      throw new Error(
        `Action must be unique: action "${key}" in ${
        keys[i].split('/')[1]
        } is duplicated`
      )
    }
    actions[key] = proxyAction(value)
  }
}
export default actions
