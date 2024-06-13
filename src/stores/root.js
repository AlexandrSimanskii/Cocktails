import { defineStore } from "pinia";
import axios from "axios";
import {
  INGREDIENTS_URL,
  COCKTAILS_BY_INGREDIENT_URL,

} from "@/constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredient: null,
    ingredients: [],
    cocktails: [],
   
  }),
  actions: {
    async getIngredients() {
      try {
        const data = await axios.get(INGREDIENTS_URL);
        this.ingredients = data.data?.drinks;
      } catch (error) {
        console.log(error);
      }
    },
    async getCoctails(ingredient) {
      try {
        const data = await axios.get(
          `${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`
        );
        this.cocktails = data.data?.drinks;
      } catch (error) {
        console.log(error);
      }
    },
    setIngredient(val) {
      this.ingredient = val;
    },
   
  },
});
