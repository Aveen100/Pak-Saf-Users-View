<template>
  <div>
    <v-btn
      style="text-transform: none;z-index:5"
      large
      class="font-7 white green--text CustomBtn"
      @click="Logout"
      >Logout</v-btn
    >
    <v-row align="center" justify="center" class="hero" no-gutters>
      <v-col cols="12" xl="2" lg="2" />
      <v-col cols="12" xl="8" lg="8">
        <v-container>
          <p class="font-2 font-title white--text">
            Redefining waste, reimagining the future..
          </p>
          <p class="font-4 font-desc white--text">
            Implementing sustainable waste practices for a cleaner environment.
          </p>
        </v-container>
      </v-col>
      <v-col cols="12" xl="2" lg="2" />
    </v-row>
  </div>
</template>

<script>
import router from "@/router"; // Adjust the path based on your project structure

export default {
  name: "Hero",
  data: () => ({
    IsUserLoggedIn: false,
  }),

  components: {},
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
      console.log("sssssssssss")
      localStorage.removeItem("User");
      router.push("/");
    },
  },
};
</script>
<style>
.hero {
  height: 140vh;
  background: url("../../assets/images/heroTwo.jpg");
  background-size: cover;
}
.font-title {
  font-weight: 600;
  text-align: center;
}
.font-desc {
  font-weight: 500;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .hero {
    height: 120vh;
    background: url("../../assets/images/heroTwo.jpg");
    background-size: cover;
    padding: 5%;
  }
  .font-title {
    text-align: left;
    line-height: 1.2;
  }

  .font-desc {
    font-weight: 500;
    text-align: left;
  }
}
.CustomBtn {
  top: 11px;
  position: absolute;
  right: 94px;
}
</style>
