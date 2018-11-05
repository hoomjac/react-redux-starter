import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')

const reducers = {}
for (let i = 0; i < keys.length; i += 1) {
  const reducer = context(keys[i]).default
  reducers[reducer.namespace] = reducer.reducer
}

export default combineReducers({
  ...reducers,
  form: formReducer
})
