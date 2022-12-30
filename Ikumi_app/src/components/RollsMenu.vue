<!-- HTML code -->
<template>
  <!-- Print all the dishes beloning to the Rolls category -->
  <div
    class="container max-w-md text-center mb-2"
    v-if="dish.category === 'Rolls'"
  >
    <div class="flex flex-wrap justify-between">
      <p class="font-semibold">{{ dish.title }}</p>

      <p class="text-sm">¥{{ dish.price }}</p>
    </div>

    <div class="flex justify-start">
      <p class="text-sm">{{ dish.description }}</p>
    </div>
  </div>
</template>

<!-- JavaScript code -->
<script>
export default {
  props: {
    dish: Object,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
