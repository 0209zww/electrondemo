import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../view/home/index.vue'
import { getLocal } from '../utils/auth'
Vue.use(VueRouter)
import Layout from '@/layout'


const routes = [

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta:{item:false},
    children: [{
      path: '/home',
      name: 'home',
      component:HomeView,
      
    }]
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "about" */ '../view/LoginVue.vue')
  },
  {
    path: '/register',
    name: 'register',

    component: () => import(/* webpackChunkName: "about" */ '../view/register.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/view/404'),
  },
  { path: '*', redirect: '/404', hidden: true, meta: { item: false }, },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name == 'register') next()
  else if (to.name !== 'login' && !getLocal('token')) next({ path: '/login' })

  else if (to.name == 'login' && getLocal('token')) next({ path: '/' })

  else next()
})
export default router
