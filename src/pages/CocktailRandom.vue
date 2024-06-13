<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { computed,  ref, } from "vue";
import axios from "axios";
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from "../constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

let cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }

  return ingredients;
});




async function getCocktail() {
  try {
    const data = await axios.get(`${COCKTAIL_RANDOM}`);
    cocktail.value = data.data?.drinks[0];
  } catch (error) {
    console.log(error);
  }
}
const modules = [Navigation, Pagination];
getCocktail()
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              class="swiper"
              :modules="modules"
              :slides-per-view="3"
              :space-between="50"
              navigation
              loop
            >
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img
                  :src="`${INGREDIENT_PIC}${ingredient}-Small.png`"
                  :alt="ingredient"
                />
                <p class="name">{{ ingredient }}</p> </swiper-slide
              >ngvbmnhgbm
            </swiper>
          </div>
          <ul class="list"></ul>
          <p class="instruction">{{ cocktail.strInstructions }}</p>
        </div>
      </div></AppLayout
    >
  </div>
</template>

<style lang="scss" scoped>
.slider {
  padding: 50px 0;
}
.swiper {
  width: 586px;
  height: 150px;

  --swiper-navigation-size: 24px;
  --swiper-navigation-top-offset: 40%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: $text;
}
.name {
  padding-top: 20px;
}
</style>
