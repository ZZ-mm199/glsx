import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Footer from '../components/Footer.vue'
import Header  from '../components/Header.vue'
import Login from '../components/Login.vue'
import Details from '../views/Details.vue'
import Shoppingcard from '../views/Shoppingcard.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    // 根据lid跳转到详情页 lid可以改名字  首页的地址:to="`/details/${p1.href.split('=')[1]}`"
    path:"/details/:id",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载                                    自定义名称  异步 先加载首页
    component: () => import(/* webpackChunkName: "details" */ '../views/Details'),
    // 路由要传参根据id到详情页  所以这里要设置props:true
    props:true
  },
  {
    path: '/shoppingcard',
    name: Shoppingcard ,
    component:Shoppingcard
  },
  {
    path: '/details',
    name: Details ,
    component:Details
  },
  {
    path: '/login',
    name: Login ,
    component:Login 
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/register',
    name: 'Register',
    component: Register 
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
