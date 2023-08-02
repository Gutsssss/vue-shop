import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ShopCart from '../views/ShopCart.vue'
import ProductCardInfo from '../views/ProductCardInfo.vue'
import LikedViewVue from '@/views/LikedView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props:true
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    props:true
  },
  {
    path: '/cart',  
    component: ShopCart
  },
  {
    path:'/liked',
    component: LikedViewVue
  },
  {
    path: '/shop/:id',
    name:'productInfo',
    component:ProductCardInfo,
    props:true
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
