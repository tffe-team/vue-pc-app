import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (r:any) => require.ensure([], () => r(require(/* webpackChunkName: "Home" */ '@/components/Home'),  'Home'))
const Login = (r:any) => require.ensure([], () => r(require(/* webpackChunkName: "Login" */ '@/components/Login'),  'Login'))
const Base = (r:any) => require.ensure([], () => r(require(/* webpackChunkName: "Base" */ '@/components/Base'),  'Base'))
const Model = (r:any) => require.ensure([], () => r(require(/* webpackChunkName: "List" */ '@/components/List'),  'List'))

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
        component: Model
      }
    ]
    }
  ]
})