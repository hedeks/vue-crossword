import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import CrosswordCreatePage from "@/views/CrosswordCreatePage.vue"
import CrosswordGame from "@/views/CrosswordGame.vue"
import LoginAndRegistration from "@/views/LoginAndRegistration.vue"
import Profile from "@/views/Profile.vue"
import CrosswordsList from '@/views/CrosswordsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/create',
      name: 'CrosswordCreatePage',
      component: CrosswordCreatePage
    },
    {
      path: '/play',
      name: 'CrosswordGame',
      component: CrosswordGame
    },
    {
      path: '/login',
      name: 'LoginAndRegistration',
      component: LoginAndRegistration
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/crosswordslist',
      name: 'CrosswordsList',
      component: CrosswordsList
    },
  ]
});

export default router