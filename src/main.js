import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import VueTimeline from "@growthbunker/vuetimeline";

var vueSmoothScroll = require('vue-smoothscroll');
Vue.use(vueSmoothScroll);

Vue.use(VueTimeline);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
