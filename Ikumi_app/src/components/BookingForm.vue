<!-- HTML code -->
<template>
  <div class="mx-auto w-full sm:w-10/12 lg:w-[500px] lg:max-w-[500px]">
    <!-- Confirmation message -->
    <div class="mb-6" v-if="successMsg">
      <p class="text-center font-semibold text-green-700">
        Thank you for your reservation at Ikumi!
      </p>
      <p class="text-center text-green-700">
        A confirmation email will be sent to you.
      </p>
    </div>
    <h2 class="text-4xl font-bold text-center -mt-5 mb-3">Book here</h2>
    <form class="border-2 border-black p-6" @submit.prevent="addBooking()">
      <div class="mb-3">
        <label for="name" class="mb-1 block text-base font-medium">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          v-model="firstName"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        />

        <span v-if="firstNameErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter a first name
        </span>
      </div>

      <div class="mb-3">
        <label for="name" class="mb-1 block text-base font-medium">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          v-model="lastName"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        />
        <span v-if="lastNameErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter a last name
        </span>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="mb-1 block text-base font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          v-model="email"
          class="w-full border border-black bg-white py-1 px-2 text-base"
        />
        <p v-if="emailErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter an email
        </p>
      </div>

      <!-- Guest amount -->
      <div class="mb-3">
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
        <p v-if="guestAmountErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter the guest amount
        </p>
      </div>

      <!-- Date -->
      <div class="mb-3">
        <label for="email" class="mb-1 block text-base font-medium">
          Date
        </label>

        <Datepicker
          class="border border-black bg-white"
          v-model="date"
          :min-date="new Date()"
          :enable-time-picker="false"
        />
        <p v-if="dateErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter a date
        </p>
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
        <p v-if="timeErrorMsg" class="text-sm text-customRed mt-0.5">
          * Please enter a time
        </p>
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
      firstNameErrorMsg: false,
      lastNameErrorMsg: false,
      emailErrorMsg: false,
      guestAmountErrorMsg: false,
      dateErrorMsg: false,
      timeErrorMsg: false,
      isSent: false,
      successMsg: false,
    };
  },
  computed: {
    firstNameErrorMsg() {
      if (this.firstName === "" && this.isSent) {
        return true;
      }
      return false;
    },
    lastNameErrorMsg() {
      if (this.lastName === "" && this.isSent) {
        return true;
      }
      return false;
    },
    emailErrorMsg() {
      if (this.email === "" && this.isSent) {
        return true;
      }
      return false;
    },
    guestAmountErrorMsg() {
      if (this.guestAmount === "" && this.isSent) {
        return true;
      }
      return false;
    },
    dateErrorMsg() {
      if (this.date === "" && this.isSent) {
        return true;
      }
      return false;
    },
    timeErrorMsg() {
      if (this.time === "" && this.isSent) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async addBooking() {
      this.isSent = true;

      const bookingBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        guestAmount: this.guestAmount,
        date: this.date,
        time: this.time,
      };

      try {
        if (
          this.firstName !== "" &&
          this.lastName !== "" &&
          this.email !== "" &&
          this.guestAmount !== "" &&
          this.date !== "" &&
          this.time !== ""
        ) {
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
          this.isSent = false;
          this.successMsg = true;

          setTimeout(() => {
            this.successMsg = false;
          }, 10000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>
