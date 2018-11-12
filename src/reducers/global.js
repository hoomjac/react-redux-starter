/* eslint-disable default-case */
import types from '../common/types'
import produce from 'immer'

export default {
  namespace: 'global',
  reducer: produce(
    (draft, action) => {
      switch (action.type) {
        case types.global.SHOW_GLOBAL_LOADING:
          draft.showLoading = action.payload
      }
    },
    { showLoading: false }
  )
}
