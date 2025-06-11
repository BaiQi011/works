import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoginStore } from '@/stores/counter.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/mine/:name',
      name: 'mine',
      component: () => import('../views/MineView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})
// 229970507-封鉴纹
// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = useLoginStore().isLogin
  console.log(isLogin)
  // 允许未登录访问登录页
  if (to.path === '/login') {
    next()
    return
  }
  // 未登录
  if (!isLogin) {
    alert('请先登录')
    next('/login')
  } else {
    next()
  }
})

export default router
