<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8 mb-10">Menu</h1>

  <div class="flex justify-center">
    <button
      class="mb-8 border-2 border-black p-2 hover:bg-black hover:text-white"
    >
      <RouterLink to="/drinkmenu">Drink menu</RouterLink>
    </button>
  </div>

  <div class="md:flex md:w-10/12 lg:w-1/2 m-auto max-w-6xl">
    <article class="p-4 mt-10">
      <h2 class="mb-6 text-2xl text-center uppercase font-bold">
        Sashimi/Nigiri
      </h2>
      <div class="flex justify-center items-center max-w-xl m-auto flex-wrap">
        <SashimiMenu v-for="dish in dishes" :dish="dish" :key="dish.id" />
      </div>
    </article>

    <div
      class="max-w-[90%] m-auto md:m-0 lg:max-w-full border-2 h-auto relative top-0 border-black"
    ></div>

    <article class="p-4 mt-10">
      <h2 class="mb-6 text-2xl text-center uppercase font-bold">Sushi rolls</h2>
      <div class="flex justify-center items-center max-w-xl m-auto flex-wrap">
        <RollsMenu v-for="dish in dishes" :dish="dish" :key="dish.id" />
      </div>
    </article>
  </div>

  <Footer />
  <!-- </div> -->
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import SashimiMenu from "../components/SashimiMenu.vue";
import RollsMenu from "../components/RollsMenu.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Button,
    SashimiMenu,
    RollsMenu,
    Footer,
  },
  data() {
    return {
      dishes: [],
    };
  },
  methods: {
    async getDishes() {
      try {
        const resp = await fetch("http://localhost:3000/api/dishes");

        const data = await resp.json();

        this.dishes = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDishes();
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
