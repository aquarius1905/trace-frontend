import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginAndRegisterView from '@/views/LoginAndRegisterView.vue'
import EmailVerifiedView from '@/views/Email/VerifiedView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login-and-register',
    name: 'LoginAndRegisterView',
    component: LoginAndRegisterView
  },
  {
    path: '/email/verified',
    name: 'EmailVerifiedView',
    component: EmailVerifiedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
