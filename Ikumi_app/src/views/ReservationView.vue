<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8 mb-10">
    Reservations
  </h1>

  <div class="w-[90%] container m-auto max-w-2xl mb-4">
    <p>
      Here at Ikumi we offer Edomae sushi like you have never experienced
      before. From high quality ingredients to the technique used by our chefs
      who have mastered the art of sushi. We always highlight ingredients of the
      season and you can watch our chefs create edible art in an intimate
      setting. This is where traditional methods meet innovation.
    </p>
  </div>

  <section class="container m-auto md:flex max-w-[1100px] mb-36">
    <!-- Image on larger screens -->
    <div class="hidden md:block md:w-1/2 p-8">
      <div>
        <img
          src="src/assets/sushi_piece.jpg"
          alt="Sushi chef holding a piece of sushi with chop sticks"
        />
      </div>
    </div>

    <div
      class="hidden md:block max-w-[90%] m-auto md:m-0 lg:max-w-full border-2 h-auto relative top-0 border-black"
    ></div>
    <!-- Booking form -->
    <div class="md:w-1/2 flex items-center justify-center p-12">
      <BookingForm />
    </div>
  </section>

  <Footer />
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import BookingForm from "../components/BookingForm.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    BookingForm,
    Footer,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
