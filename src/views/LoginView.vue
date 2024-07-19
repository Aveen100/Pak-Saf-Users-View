<template>
  <div class="parent">
    <div class="main" :style="mainStyle">
      <h1 class="mb-5">Login to WasteHub</h1>
      <v-row justify="center" align="center" style="height: 70px">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            placeholder="Enter Email"
            v-model="Email"
            label="Email"
            width="100"
            solo
            rounded
          ></v-text-field>
        </v-col>
      </v-row>

      <br />
      <v-row justify="center" align="center" style="height: 70px">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            placeholder="Enter Password"
            v-model="Password"
            label="Password"
            solo
            type="password"
            rounded
          ></v-text-field>
        </v-col>
      </v-row>

      <br />
      <v-btn id="done" class="button" @click="LoginPage(Email, Password)">
        Login
      </v-btn>
      <br />
      <img src="../assets/google.svg" alt="Login using Google" />
      <img src="../assets/facebook.svg" alt="Login using Facebook" />
      <br />
      Don't have an account? <router-link to="/signup">Sign up</router-link>
    </div>
    <v-snackbar v-model="ShowSnackbar">
      {{ SnackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          top
          small
          flat
          v-bind="attrs"
          @click="ShowSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router"; // Adjust the path based on your project structure
export default {
  name: "LoginPage",
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String,
  },
  data() {
    return {
      Email: "",
      Password: "",
      SnackbarText: "",
      ShowSnackbar: false,
    };
  },
  methods: {
    async LoginPage(email, password) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          {
            email,
            password,
          }
        );
        if (response.status == 200) {
          localStorage.setItem("User", JSON.stringify(response.data.user));
          router.push("/Home"); // Assuminssg you have a router instance available
          this.ShowSnackbar = true;
          this.SnackbarText = "Login Successfull";
        }
      } catch (e) {
        this.ShowSnackbar = true;
        this.SnackbarText = "Incorrect UserName Or Password";
        console.log(e);
      }
    },
  },
};
</script>

<style>
/* Import Poppins font: */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.main {
  background: rgba(230, 213, 213, 0.4);
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  text-align: center;
  padding: 5px;
  border-radius: 3rem;
  box-shadow: 0px 0px 8px -5px #000000;
  padding-top: 3%;
  padding-bottom: 5%;
  font-family: "Poppins", sans-serif;
}

h1 {
  cursor: default;
  user-select: none;
}

input {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}

input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}

#done {
  background: lightgreen;
}

.button {
  cursor: pointer;
  user-select: none;
}

img {
  height: 2.2rem;
  margin: 10px;
  user-select: none;
}

img:hover {
  box-shadow: 0px 0px 8px -5px #000000;
  cursor: pointer;
  border-radius: 200rem;
}
.parent {
  background: url("../assets/Login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
