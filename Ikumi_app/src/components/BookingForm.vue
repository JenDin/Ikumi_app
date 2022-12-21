<!-- HTML code -->
<template>
  <div class="mx-auto w-full sm:w-10/12 lg:w-[500px] lg:max-w-[500px]">
    <!-- Confirmation message -->
    <div class="mb-6" v-if="successMsg">
      <p class="text-center font-semibold text-green-700">
        Thank you for your reservation at Ikumi!
      </p>
      <p class="text-center text-green-700">
        {{ date }} for {{ guestAmount }} guest(s) at {{ time }}
      </p>
    </div>
    <h2 class="text-4xl font-bold text-center -mt-4 mb-6">Book here</h2>
    <form class="border-2 border-black p-6" @submit.prevent="addBooking()">
      <!-- First name/Last name container -->
      <div class="lg:flex flex-wrap justify-between">
        <div class="pr-2 mb-5 lg:w-1/2">
          <label for="name" class="mb-1 block text-base font-medium">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            v-model="firstName"
            class="w-full border border-black bg-white py-1 px-2 text-base"
          />
        </div>
        <div class="mb-5 lg:w-1/2">
          <label for="name" class="mb-1 block text-base font-medium">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            v-model="lastName"
            class="w-full border border-black bg-white py-1 px-2 text-base"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="mb-5">
        <label for="email" class="mb-1 block text-base font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          v-model="email"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        />
      </div>

      <!-- Guest amount -->
      <div class="mb-5">
        <label for="subject" class="mb-1 block text-base font-medium">
          Guest amount
        </label>
        <select
          name="guestAmount"
          v-model="guestAmount"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
          <option value="6">6 guests</option>
          <option value="7">7 guests</option>
          <option value="8">8 guests</option>
        </select>
      </div>

      <!-- Date -->
      <div class="mb-5">
        <label for="email" class="mb-1 block text-base font-medium">
          Date
        </label>

        <input
          type="date"
          name="date"
          id="reservation-date"
          v-model="date"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        />
      </div>

      <!-- Time -->
      <div class="mb-5">
        <label for="subject" class="mb-1 block text-base font-medium">
          Time
        </label>
        <select
          name="time"
          v-model="time"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        >
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
          <option value="21:00">21:00</option>
        </select>
      </div>

      <Button btnText="Book" />
    </form>
  </div>
</template>

<!-- JavaScript code -->
<script>
import Button from "../components/Button.vue";

export default {
  name: "BookingForm",
  components: {
    Button,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      guestAmount: "",
      date: "",
      time: "",
      successMsg: false,
    };
  },
  methods: {
    async addBooking() {
      const bookingBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        guestAmount: this.guestAmount,
        date: this.date,
        time: this.time,
      };

      try {
        const resp = await fetch("http://localhost:3000/api/bookings", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(bookingBody),
        });

        const data = await resp.json();

        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.guestAmount = "";
        this.date = "";
        this.time = "";
        this.successMsg = true;

        setTimeout(() => {
          this.successMsg = false;
        }, 10000);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
