<!-- HTML code -->
<template>
  <div class="hero-image" :style="{ backgroundImage }">
    <Header />
    <h2 class="p-3 pl-5 absolute bottom-10 text-white">IKUMI</h2>
    <p class="p-3 pl-5 absolute bottom-5 text-white">267-1154, Shibasaki</p>
    <p class="p-3 pl-5 absolute bottom-0 text-white">Tokyo, Japan</p>
  </div>
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      backgroundImage: "url('src/assets/sushi_bg.jpg')",
    };
  },
};
</script>

<!-- CSS styles -->
<style scoped>
.hero-image {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
}

@media screen and (min-width: 300px) and (max-width: 768px) {
  .hero-image {
    /* width: 100%;
	  height: 100vh; */
    background-position: center;
    /* background-size: cover; */
  }
}
</style>
