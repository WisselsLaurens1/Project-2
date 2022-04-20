import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Subscriptions.vue')
    }
  },
  {
    path: '/portal',
    name: 'portal',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BankPortal.vue')
    }
  },
  {
    path: '/bank-account/account/:id',
    name: 'bank-account',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BankAccount.vue')
    }
  },

  { path: '/loginwithtoken', name: 'loginwithtoken', component: Login },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
