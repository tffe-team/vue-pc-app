import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home.vue');
const Login = () => import(/* webpackChunkName: "login" */ '@/components/Login.vue');
const Base = () => import(/* webpackChunkName: "base" */ '@/components/Base.vue');
const List = () => import(/* webpackChunkName: "list" */ '@/components/List.vue');


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      component: Base,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/main',
      component: Base,
      children: [
      {
        path: 'model',
        name: 'model',
        component: List
      }
    ]
    }
  ]
})