import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/view/home/home')
const users = () => import('@/view/users/users')

const demands = () => import('@/view/demands/demands')
const addDemand = () => import('@/component/edit-demand/edit-demand')

const products = () => import('@/view/products/products')
const addProduct = () => import('@/component/edit-product/edit-product')

const brands = () => import('@/view/brands/brands')
const categorys = () => import('@/view/categorys/categorys')

const chart = () => import('@/view/chart/chart')
const chartLine = () => import('@/component/chart-line/chart-line')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/demands',
      name: 'demands',
      component: demands
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: addProduct
    },
    {
      path: '/addDemand',
      name: 'addDemand',
      component: addDemand
    },
    {
      path: '/brands',
      name: 'brands',
      component: brands
    },
    {
      path: '/categorys',
      name: 'categorys',
      component: categorys
    },
    {
      path: '/chart',
      component: chart,
      children: [
        {
          path: 'line',
          component: chartLine
        }
      ]
    }
  ]
})
