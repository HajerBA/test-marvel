import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/:page',
      name: 'Accueil',
      component: Accueil
    }
  ]
})
