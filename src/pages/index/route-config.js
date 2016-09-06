export function configRouter( router ) {
  router.map( {
    '/': {
      name: 'index',
      component: require('../../components/index/index.vue')
    }
  })
  router.redirect({
    '*': '/'
  })
}
