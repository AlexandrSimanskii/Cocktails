<script setup>
import { computed } from "vue";
import { Back } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTER_PATHS } from "@/constants";

const props = defineProps({
  imgUrl: {
    type: String,
    requered: true,
  },
  backFunc: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
});
const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goForCocktailRandom() {
  router.push(ROUTER_PATHS.COCKTAIL_RANDOM);
  if (routeName.value === ROUTER_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}

function goBack() {
  props.backFunc ? props.backFunc() : router.go(-1);
}
</script>

<template>
  <div class="root">
    <div class="img" :style="`background-image:url(${imgUrl})`"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="goBack"
        />
        <el-button @click="goForCocktailRandom" class="btn"
          >Получить случайный коктейль</el-button
        >
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.root {
  display: flex;
  background-color: $background;
  min-height: 100vh;
}
.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.main {
  position: relative;
  padding: 32px 40px;
  width: 50%;
}
.btns {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
.btn {
  padding: 10px;

  font-size: 16px;
  font-family: "Raleway", "Arial", sans-serif;
  background-color: $accent;
  border-color: $accent;
  color: $text;
  &:hover,
  &:active {
    background-color: darken($accent, 10%);
    background-color: darken($accent, 10%);
  }
}
.back {
  background-color: transparent;
  border-color: $text;
  &:hover {
    border-color: $accent;
  }
}
@media (max-width: 760px) {
  .main {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .img {
    width: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba($color: #000000, $alpha: 0.4);
    }
  }
  .btn {
    font-size: 12px;
  }
  .btns {
    max-width: 330px;
    justify-content: center;
  }
}
</style>
