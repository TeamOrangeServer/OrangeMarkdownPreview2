import Vue from 'vue'
import App from './App.vue'
//import Home from './views/Home.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
//@ts-ignore
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  //@ts-ignore
  vuetify,
  render: h => h(App)
  //render: h => h(Home)
}).$mount('#app')
