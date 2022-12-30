<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8 mb-10">Drinks</h1>

  <div class="flex justify-center">
    <button
      class="mb-8 border-2 border-black p-2 hover:bg-black hover:text-white"
    >
      <RouterLink to="/menu">Sushi menu</RouterLink>
    </button>
  </div>

  <div class="lg:flex md:w-10/12 lg:w-1/2 m-auto max-w-6xl">
    <article class="p-4 mt-10">
      <h2 class="mb-6 text-2xl text-center uppercase font-bold">Wine</h2>
      <div class="flex justify-center items-center max-w-xl m-auto flex-wrap">
        <WineMenu v-for="drink in drinks" :drink="drink" :key="drink.id" />
      </div>
    </article>

    <div
      class="max-w-[90%] m-auto lg:m-0 lg:max-w-full border-2 h-auto relative top-0 border-black"
    ></div>

    <article class="p-4 mt-10">
      <h2 class="mb-6 text-2xl text-center uppercase font-bold">Saké</h2>
      <div class="flex justify-center items-center max-w-xl m-auto flex-wrap">
        <SakeMenu v-for="drink in drinks" :drink="drink" :key="drink.id" />
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
import SakeMenu from "../components/SakeMenu.vue";
import WineMenu from "../components/WineMenu.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Button,
    SakeMenu,
    WineMenu,
    Footer,
  },
  data() {
    return {
      drinks: [],
    };
  },
  methods: {
    async getDrinks() {
      try {
        const resp = await fetch("http://localhost:3000/api/drinks");

        const data = await resp.json();

        this.drinks = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDrinks();
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
