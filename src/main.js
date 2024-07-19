import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from "vue-browser-geolocation";
import 'leaflet/dist/leaflet.css';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueGeolocation);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
