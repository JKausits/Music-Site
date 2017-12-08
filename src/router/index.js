import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home'
import Shows from '@/Components/Shows'
import Contact from '@/Components/Contact'
import Venues from '@/Components/Venues'
import AddShow from '@/Components/AddShow'
import Login from '@/Components/Login'
import Messages from '@/Components/Messages'
import {firebase} from '@/FirebaseConnection';
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/shows',
      name: 'Shows',
      component: Shows
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/venues',
      name: 'Venues',
      component: Venues,
      meta: {
        requireAuth: true
      }
    },{
      path: '/show/new',
      name: 'addShow',
      component: AddShow,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAnonymous: true
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AddShow,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/messages',
      name: 'Messsages',
      component: Messages,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requireAuth);
  let requiresAnonymous = to.matched.some(record => record.meta.requireAnonymous)
  if(requiresAuth && !currentUser) next('login')
    else if(requiresAnonymous && currentUser) next('/admin')
  else next();
})

export default router;
