import * as types from './mutation-types'

export const hello = ({ dispatch, state }) => {
  dispatch(types.HELLO)
}
