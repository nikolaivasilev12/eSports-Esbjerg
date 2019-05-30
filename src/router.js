import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Join from './views/Join.vue'
import Contact from './views/Contact.vue'
import Team_cs from './views/team_cs.vue'
import Parents from './views/parents.vue'
import Team_fortnite from './views/team_fortnite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/team_cs',
      name: 'team_cs',
      component: Team_cs
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/parents',
      name: 'parents',
      component: Parents
    },
    {
      path: '/team_fortnite',
      name: 'team_fortnite',
      component: Team_fortnite
    },
  
  ]
})
