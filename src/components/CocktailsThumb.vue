<script setup>
const props = defineProps({
  cocktail: { type: Object, requered: true },
});
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div
        class="pic"
        :style="`background-image:url(${cocktail.strDrinkThumb})`"
      ></div
    ></RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main";
.root {
  width: calc((100% - 76px) / 3);
  /* padding-right: 38px; */
  /* padding-bottom: 20px; */
  /* :nth-child(3n + 3) {
    padding-right: 0;
  } */
  .pic {
    height: 120px;
    width: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .name {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 16px;
    letter-spacing: 0.1em;
  }
}
</style>
