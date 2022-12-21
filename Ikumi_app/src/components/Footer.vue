<!-- HTML code -->
<template>
  <footer
    class="bg-[#131515be] text-white p-4 fixed bottom-0 w-full flex justify-between items-center"
  >
    <div>
      <h3 class="">Ikumi</h3>
      <p class="">267-1154, Shibasaki</p>
      <p class="">Tokyo, Japan</p>
    </div>
    <div class="text-2xl">
      <a :href="facebookLink" target="_blank"
        ><i class="fa-brands fa-square-facebook px-4 hover:text-[1.8rem]"></i
      ></a>
      <a :href="instagramLink" target="_blank"
        ><i class="fa-brands fa-instagram hover:text-[1.8rem]"></i
      ></a>
    </div>
  </footer>
</template>

<!-- JavaScript code -->
<script>
export default {
  name: "Footer",
  data() {
    return {
      facebookLink: "https://www.facebook.com/",
      instagramLink: "https://www.instagram.com/",
    };
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
