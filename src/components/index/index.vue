<template lang="html">
  <h1>{{word}}</h1>
</template>

<script>
import { hello } from '../../vuex/actions'

export default {
  vuex: {
    getters:{
      word: ({index}) => index.word
    },
    actions: {
      hello
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    this.hello()
    console.log(this.word+'22')
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
