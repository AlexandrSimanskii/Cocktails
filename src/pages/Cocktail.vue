<script setup>
import AppLayout from "@/components/AppLayout.vue";

import { useRoute, } from "vue-router";
import { computed, ref,  } from "vue";
import axios from "axios";

import { COCKTAIL_BY_ID } from "../constants";
let cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];
    ingredients.push(ingredient);
  }

  return ingredients;
});

const getCocktail = async (id) => {
  try {
    const data = await axios.get(`${COCKTAIL_BY_ID}${id}`);
    console.log(data.data?.drinks[0]);
    cocktail.value = data.data?.drinks[0];
  } catch (error) {
    console.log(error);
  }
};

const route = useRoute();

const cocktailId = computed(() => route.params.id);

getCocktail(cocktailId.value);
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <ul class="list">
            <li class="list-item" v-for="(item, key) in ingredients" :key="key">
              {{ item.name }}
              <template v-if="item.measure">
                |
                {{ item.measure }}
              </template>
            </li>
          </ul>
          <p class="instruction">{{ cocktail.strInstructions }}</p>
        </div>
      </div></AppLayout
    >
  </div>
</template>

<style lang=""></style>
