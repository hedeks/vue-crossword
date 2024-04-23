import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CrosswordCreatePage from "@/views/CrosswordCreatePage.vue";
import CrosswordGame from "@/views/CrosswordGame.vue";
import LoginAndRegistration from "@/views/LoginAndRegistration.vue";
import Profile from "@/views/Profile.vue";
import CrosswordsList from "@/views/CrosswordsList.vue";
import { crosswordStore } from "@/stores/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/create",
      name: "CrosswordCreatePage",
      component: CrosswordCreatePage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/crosswordslist/:id",
      name: "CrosswordGame",
      component: CrosswordGame,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "LoginAndRegistration",
      component: LoginAndRegistration,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/crosswordslist",
      name: "CrosswordsList",
      component: CrosswordsList,
    },
  ],
});

export default router;
router.beforeEach((to, from, next) => {
  const store = crosswordStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.isUserAuthorized) {
      next({ name: "LoginAndRegistration" });
    } else {
      next();
    }
  } else {
    next();
  }
});
