import {
  HELLO
} from '../mutation-types'

const state = {
  word: ''
}

// mutations
const mutations = {
  [HELLO] (state,data) {
    state.word = 'hello world'
    console.log(state.word)
  }
}

export default {
  state,
  mutations
}
