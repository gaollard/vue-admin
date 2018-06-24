import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/view/home/home')
const users = () => import('@/view/users/users')
const demands = () => import('@/view/demands/demands')

const products = () => import('@/view/products/products')
const addProduct = () => import('@/view/productEdit/productEdit')

const brands = () => import('@/view/brands/brands')
const categorys = () => import('@/view/categorys/categorys')

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
      path: '/brands',
      name: 'brands',
      component: brands
    },
    {
      path: '/categorys',
      name: 'categorys',
      component: categorys
    }
  ]
})
