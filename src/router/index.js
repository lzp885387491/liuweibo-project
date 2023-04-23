import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/LayoutView.vue'),
    children: [
      {
        path: '/product',
        name: 'productView',
        component: () => import('../views/product/productView.vue'),
      },
      {
        path: '/price',
        name: 'priceView',
        component: () => import('../views/price/priceView.vue'),
      },
      {
        path: '/customer',
        name: 'customerView',
        component: () => import('../views/customer/customerView.vue'),
      },
      {
        path: '/activity',
        name: 'activityView',
        component: () => import('../views/activity/activityView.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
