<!-- HTML code -->
<template>
  <!-- Print all the dishes beloning to the Wine category -->
  <div
    class="container max-w-md text-center mb-3"
    v-if="drink.category === 'Wine'"
  >
    <div class="flex flex-wrap justify-between">
      <p class="font-semibold">{{ drink.title }}</p>

      <p class="text-sm">¥{{ drink.price }}</p>
    </div>

    <div class="flex justify-start">
      <p class="text-sm">{{ drink.description }}</p>
    </div>
  </div>
</template>

<!-- JavaScript code -->
<script>
export default {
  name: "WineMenu",
  props: {
    drink: Object,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
