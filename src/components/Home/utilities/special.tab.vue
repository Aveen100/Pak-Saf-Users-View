<template>
  <div>
    <v-row align="center" justify="center" no-gutters>
      <span class="tab-width">
        <v-btn
          v-if="tab == 1"
          @click="tab = 1;passTab(1)"
          color="blue"
          style="height:100%"
          elevation="0"
          class="mr-1 btn font-7"
          dark
          >Team</v-btn
        >
        <v-btn
          v-else
          color="black"
          @click="tab = 1;passTab(1)"
          elevation="0"
          plain
          class="mr-1 btn font-7"
          dark
          >Team</v-btn
        >
      </span>
      <span class="tab-width">
        <v-btn
          v-if="tab == 2"
          @click="tab = 2;passTab(2)"
          color="blue"
          elevation="0"
          class="mr-1 btn font-7"
          dark
          >Couple</v-btn
        >
        <v-btn
          v-else
          color="black"
          @click="tab = 2;passTab(2)"
          elevation="0"
          plain
          class="mr-1 btn font-7"
          dark
          >Couple</v-btn
        >
      </span>
      <span class="tab-width">
        <v-btn
          v-if="tab == 3"
          @click="tab = 3;passTab(3)"
          color="blue"
          elevation="0"
          class="mr-1 btn font-7"
          dark
          >Family</v-btn
        >
        <v-btn
          v-else
          color="black"
          elevation="0"
          @click="tab = 3;passTab(3)"
          text
          class="mr-1 btn font-7"
          dark
          >Family</v-btn
        >
      </span>
    </v-row>
  </div>
</template>

<script>
export default {
    props:['tab','tabs'],
  data() {
    return {
     
    };
  },
  methods:{
      passTab(value){
          this.$emit("updateValue",value)
      }
  }
};
</script>

<style>
.btn {
  text-transform: none !important;
  width: 100%;
  height: 6vh !important;
}
.tab-width {
  width: 33% !important;
}
</style>