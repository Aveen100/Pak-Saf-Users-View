<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <v-app-bar
      :color="color"
      id="nav-bar"
      class="nav-bar"
      fixed
      style="padding: 0 5%"
      dark
      flat
    >
      <div class="d-flex align-center">
        <p class="font-2 mb-n1" :style="`color:${colo}`">Pak Saf</p>
      </div>

      <v-spacer></v-spacer>
      <div class="d-none d-sm-flex" v-if="!IsUserLoggedIn">
        <div class="d-flex align-center">
          <!-- <v-btn
            style="text-transform: none"
            :key="comp"
            large
            class="font-7 white green--text"
            >Login</v-btn
          > -->
        </div>
      </div>
      <div class="d-none d-sm-flex" v-else>
        <div class="d-flex align-center">
          <!-- <v-btn
            :key="comp"
            style="text-transform: none"
            large
            class="font-7 white green--text"
            @click="Logout"
            >Logout</v-btn
          > -->
        </div>
      </div>

      <v-app-bar-nav-icon class="d-flex d-sm-none" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import "./css/fonts.css";
import router from "@/router"; // Adjust the path based on your project structure
export default {
  name: "App",

  data: () => ({
    //
    color: "transparent",
    colo: "white",
    IsUserLoggedIn: false,
    comp: 0,
  }),
  mounted() {
    let User = localStorage.getItem("User");
    if (!User) {
      this.IsUserLoggedIn = false;
    } else {
      this.IsUserLoggedIn = true;
    }
  },
  methods: {
    Logout() {
      localStorage.removeItem("User");
      router.push("/");
      this.comp++;
    },
  },
};
</script>
<style>
.footer {
  padding: 4%;
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 10%;
  }
}
</style>
