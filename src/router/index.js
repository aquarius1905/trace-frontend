import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginAndRegisterView from '@/views/LoginAndRegisterView.vue'
import EmailVerifiedView from '@/views/Email/VerifiedView.vue'
import * as path from '@/const/pathName'

const routes = [
  {
    path: '/',
    name: path.HOME,
    component: HomeView
  },
  {
    path: '/login-and-register',
    name: path.LOGIN_AND_REGISTER,
    component: LoginAndRegisterView
  },
  {
    path: '/email/verified',
    name: path.EMAIL_VERIFIED,
    component: EmailVerifiedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
