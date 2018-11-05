import { connect as reduxConnect } from 'react-redux'
import actions from '../actions'

export default params => target => reduxConnect(params, actions)(target)
