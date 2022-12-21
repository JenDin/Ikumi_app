<!-- HTML code -->
<template>
  <div class="container max-w-md text-center mb-2">
    <h3>
      <span class="font-semibold">{{ drink.title }}</span> |
      <span class="text-right">¥{{ drink.price }}</span>
    </h3>
    <p class="text-sm">{{ drink.description }}</p>
  </div>
</template>

<!-- JavaScript code -->
<script>
export default {
  props: {
    drink: Object,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
