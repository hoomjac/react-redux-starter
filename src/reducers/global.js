import types from '../common/types'

export default {
  namespace: 'global',
  reducer: (state = { showLoading: false, pageEnd: false }, action) => {
    switch (action.type) {
      case types.global.SHOW_GLOBAL_LOADING:
        return {
          ...state,
          showLoading: action.payload
        }
      default:
        return state
    }
  }
}
