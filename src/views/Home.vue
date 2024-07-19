<template>
  <div>
    <heroHomeVue />

    <div class="bg-1">
      <specialsHomeVue />
      <v-container>
        <contactHomeVue />
        <recommendHomeVue />
        <testimonialHomeVue />
        <discountHomeVue />
      </v-container>
    </div>
    <v-footer class="bg-1" v-if="IsUserLoggedIn">
      <v-container>
        <div class="d-sm-none d-md-flex">
          <v-row no-gutters style="" class="footer d-none d-sm-flex">
            <p class="font-7">© 2024 Pak Saf - All right reserved.</p>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <v-row
          no-gutters
          style="width: 100%"
          class="footer d-flex d-sm-none d-none d-sm-flex d-md-none"
        >
          <v-spacer></v-spacer>
          <div>
            <p class="font-7 text-center">
              © 2024 Pak Saf - All right reserved.
            </p>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import contactHomeVue from "../components/Home/contact.home.vue";
import discountHomeVue from "../components/Home/discount.home.vue";
import heroHomeVue from "../components/Home/hero.home.vue";
import recommendHomeVue from "../components/Home/recommend.home.vue";
import specialsHomeVue from "../components/Home/specials.home.vue";
import testimonialHomeVue from "../components/Home/testimonial.home.vue";

export default {
  name: "Home",

  components: {
    heroHomeVue,
    specialsHomeVue,
    contactHomeVue,
    recommendHomeVue,
    testimonialHomeVue,
    discountHomeVue,
  },

  data: () => ({
    //
    IsUserLoggedIn: false,
  }),
  mounted() {
    let User = localStorage.getItem("User");
    if (!User) {
      this.IsUserLoggedIn = false;
    } else {
      this.IsUserLoggedIn = true;
    }
  },
};
</script>
<style></style>
