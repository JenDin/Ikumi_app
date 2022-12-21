<!-- HTML code -->
<template>
  <button
    class="p-2 uppercase font-semibold border-black border-2 bg-black text-white w-full hover:border-2 hover:border-orange-400 hover:bg-orange-400 hover:text-black"
  >
    {{ btnText }}
  </button>
</template>

<!-- JavaScript code -->
<script>
import { RouterLink } from "vue-router";

export default {
  name: "Button",
  props: {
    btnText: String,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
