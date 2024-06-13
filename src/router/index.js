import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Cocktail from "../pages/Cocktail.vue";
import CocktailRandom from "../pages/CocktailRandom.vue";
import { ROUTER_PATHS } from "@/constants";

const { HOME, COCKTAIL, COCKTAIL_RANDOM } = ROUTER_PATHS

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME,
      name: HOME,
      component: Home,
    },
    {
      path: COCKTAIL,
      name: COCKTAIL,
      component: Cocktail,
    },
    {
      path: COCKTAIL_RANDOM,
      name: COCKTAIL_RANDOM,
      component: CocktailRandom,
    },
  ],
});

export default router;
