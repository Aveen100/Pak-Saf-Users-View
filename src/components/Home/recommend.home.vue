<template>
  <div class="recommend-container">
      <p class="font-2 weight-600 text-center">We offer efficient waste management services</p>
      <br>

       <v-row no-gutters align="center" justify="center">
             <v-col cols="12" xl="4" lg="4" />
            <v-col cols="12" xl="4" lg="4">
                <div class="pa-2 tab2">
                    <!-- <recommendTabVue @updateValue="updateTab($event)" :tab="tab" :tabs="tabs" /> -->
                </div>
            </v-col>
             <v-col cols="12" xl="4" lg="4" />
         </v-row>

         <br>
        <v-row >
            <v-col v-for="i in recommends" :key="i" cols="12" xl="3" lg="3">
                 <recommendCardVue :img="i" />
            </v-col>
        </v-row>
      
  </div>
</template>

<script>
import recommendCardVue from './utilities/recommend.card.vue'
// import recommendTabVue from './utilities/recommend.tab.vue'


export default {
    components:{
        // recommendTabVue,
        recommendCardVue
    },
    data(){
        return {
             tab:1,
            tabs:{
                team:1,
                couple:2,
                family:3
            },
            recommends:[
                {img:require('../../assets/images/Wood.jpg'),rating:3.4,Name: "Waste Woods"},
                {img:require('../../assets/images/GlassBottles.jpg'),rating:4.5,Name: "Waste Glass Bottles"},
                {img:require('../../assets/images/CardBoard.jpg'),rating:4.2,Name: "Waste Cardboards"},
                {img:require('../../assets/images/Textile.jpg'),rating:4.2,Name:"Waste Textile"},
            ]
        }
    }
}
</script>

<style>
.recommend-container{
    padding:0%;
}
.tab2{
    margin: 0 8%;
    
    height: 8vh;
    border-radius: 13px;
}
@media screen and (max-width:600px) {
    .recommend-container{
    padding:12%;
}
}
</style>