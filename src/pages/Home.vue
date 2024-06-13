<script setup>
import AppLayout from "@/components/AppLayout.vue";

import CocktailsThumb from "../components/CocktailsThumb.vue";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useRootStore();
store.getIngredients();
const { ingredients, cocktails, ingredient } = storeToRefs(store);

function getCocktails() {
  store.getCoctails(store.ingredient);
}
function removeIngredient() {
  store.setIngredient(null);
}
</script>

<template>
  <div>
    <AppLayout
      imgUrl="/cocktail_1.jpg"
      :backFunc="removeIngredient"
      :is-back-button-visible="!!ingredient"
      ><div class="wrapper">
        <div v-if="!ingredient || !cocktails" class="info">
          <div class="title">Выбери свой напиток</div>
          <div class="line"></div>
          <div class="select-wrapper">
            <el-select
              v-model="store.ingredient"
              placeholder="Выберите главный ингредиент"
              size="large"
              filterable
              allow-create
              @change="getCocktails"
              class="select"
            >
              <el-option
                class="option"
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.label"
                :value="item.strIngredient1"
            /></el-select>
          </div>
          <div class="text">
            Попробуйте наши вкусные рецепты коктейлей на любой случай. Найдите
            вкусные рецепты коктейлей по ингредиентам с помощью нашего
            генератора коктейлей.
          </div>
          <img
            class="img"
            src="/1665865889_66-podacha-blud-com-p-shot-kokteil-krasivie-foto-71 2.png"
            alt="coctails"
          />
        </div>

        <div v-else class="info">
          <div class="title">Напиток с "{{ ingredient }}"</div>
          <div class="line"></div>
          <div class="cocktails">
            <CocktailsThumb
              v-for="cocktail in cocktails"
              :key="cocktail.idDrinks"
              :cocktail="cocktail"
            />
          </div>
        </div></div
    ></AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main";

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  padding: 80px 0;
  text-align: center;
}
.option {
  padding-left: 10px;
}
.select-wrapper {
  padding-top: 50px;
}
.select {
  width: 220px;
}
.text {
  max-width: 516px;
  margin: 0 auto;
  padding-top: 50px;
  line-height: 36px;
  letter-spacing: 0.1rem;
  color: $textMuted;
}
.img {
  margin-top: 60px;
}
.cocktails {
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
}
@media (max-width: 500px) {
  .cocktails {
    justify-content: space-around;
  }
}
@media (max-width: 430px) {
  .text {
    font-size: 14px;
  }
}
</style>
