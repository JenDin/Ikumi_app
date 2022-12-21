<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8 mb-4">Gallery</h1>

  <div class="container mx-auto px-4">
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="hidden md:block md:w-1/2 px-4">
          <div
            class="h-full w-full bg-cover hover:opacity-80"
            :style="{ 'background-image': tunaSushi }"
          ></div>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8 hover:opacity-80">
            <img :src="sushiChef" alt="" />
          </div>
          <div class="hover:opacity-80">
            <img :src="shrimpSushi" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="pb-36 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0 hover:opacity-80">
          <img :src="sashimiPlate" alt="" />
        </div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0 hover:opacity-80">
          <img :src="sashimiPlate2" alt="" />
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      tunaSushi: "url('src/assets/single_sushi.jpg')",
      sushiChef: `src/assets/sushi_chef.jpg`,
      shrimpSushi: `src/assets/sushi_shrimp.jpg`,
      sashimiPlate: `src/assets/sashimi_plate2.png`,
      sashimiPlate2: `src/assets/sashimi_plate.png`,
    };
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
