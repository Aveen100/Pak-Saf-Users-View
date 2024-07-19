<template>
  <div style="position:relative;" class=" sp-container" >

  <div class="sh-container">
<!--      
          <v-row no-gutters style="" class="d-flex d-sm-none d-none d-sm-flex d-md-none">
              <v-spacer></v-spacer>
               <div  style="height:100px;width:250px;border-radius:35px;justify-content:center;align-items:center;display:flex"  class="white pa-4 ">
                <p>Now, let's proceed to select the location for your garbage pickup order.</p>
                <v-btn>Pin Location</v-btn>
           </div>
           <v-spacer></v-spacer>
          </v-row> -->
          <v-btn class="d-flex d-sm-none d-none d-sm-flex d-md-none" x-small style="height:100px;width:100px;border-radius:50%" color="green" dark ><v-icon size="15">mdi-pin</v-icon>
            Book Rider 
        </v-btn>
     
       <v-container class="hide-xs" >
       
          
            <searchSpecialHomeVue />
      
   </v-container>
  </div>
     <div style="margin-top:10%">
         <!-- container for the upcoming specials -->
         <p class="font-2 weight-600 text-center">Our Services</p>   
         <br>

         <!-- <v-row no-gutters align="center" justify="center">
             <v-col cols="12" xl="4" lg="4" />
            <v-col cols="12" xl="4" lg="4">
                <div class="pa-2 tab">
                    <specialTabVue @updateValue="updateTab($event)" :tab="tab" :tabs="tabs" />
                </div>
            </v-col>
             <v-col cols="12" xl="4" lg="4" />
         </v-row> -->
         <br>

        <v-container>
             <v-row v-if="tab==1" no-gutters>
             <v-col   cols="12" v-for="i in specials.team" :key="i[i+1]" xl="4" lg="4">
                 <specialCardVue :info="i"  />
             </v-col>
         </v-row>
         <v-row v-else-if="tab==2" no-gutters>
             <v-col   cols="12" v-for="i in specials.couple" :key="i[i+1]" xl="4" lg="4">
                 <specialCardVue :info="i"  />
             </v-col>
         </v-row>
         <v-row v-else no-gutters>
             <v-col   cols="12" v-for="i in specials.family" :key="i[i+1]" xl="4" lg="4">
                 <specialCardVue :info="i"  />
             </v-col>
         </v-row>
         
        </v-container>
     </div>
  </div>
</template>

<script>
import searchSpecialHomeVue from './search.special.home.vue'
import specialCardVue from './utilities/special.card.vue'
// import specialTabVue from './utilities/special.tab.vue'


export default {
    data(){
        return {

            specials:{
                team:[
                    {img:require('../../assets/images/Bottles.jpeg'),title:"Plastic Bottles",price:350,},
                    {img:require('../../assets/images/Paper.jpg'),title:"Paper Waste",price:400,},
                    {img:require('../../assets/images/metal.jpg'),title:"Metals",price:700,},
                ],
                couple:[
                    {img:require('../../assets/images/Bottles.jpeg'),title:"Plastic Bottles",price:350,},
                    {img:require('../../assets/images/Paper.jpg'),title:"Paper Waste",price:400,},
                    {img:require('../../assets/images/metal.jpg'),title:"Metals",price:700,},
                ],
                family:[
                    {img:require('../../assets/images/Bottles.jpeg'),title:"Bottles Bottles",price:350,},
                    {img:require('../../assets/images/Paper.jpg'),title:"Paper Waste",price:400,},
                    {img:require('../../assets/images/metal.jpg'),title:"Metals",price:700,},
                ]
            
            }
            ,
            tab:1,
            tabs:{
                team:1,
                couple:2,
                family:3
            },
            sw:1

        }
    },
    methods:{
        updateTab(value){
            this.tab=value;
        }
    },
    components:{
        // specialTabVue,
        specialCardVue,
        searchSpecialHomeVue
    }

}
</script>

<style>
.sp-container{
    
    padding:1%;
}
.tab{
    margin: 0 10%;
    background:#FFFFFF;
    height: 8vh;
    border-radius: 13px;
}
.sh-container{
    position:absolute;
    top:-15%;
    width:100%;
}
@media screen and (max-width:600px) {
    .sh-container{
    position:absolute;
    top:-3em;
    width: 90% !important;
    
} 
.hide-xs{
    display: none !important;
}  
}


</style>