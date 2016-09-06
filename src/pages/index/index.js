import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../../vuex/store'
import VueRouter  from 'vue-router'
import { configRouter } from './route-config'
import { sync } from 'vuex-router-sync'

Vue.use( VueRouter )
Vue.use( VueResource )

Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

const router = new VueRouter( {
  saveScrollPosition : true
} )

configRouter( router )

router.start( Vue.extend({store}), '#app' )
