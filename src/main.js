import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/style.scss'
import Meta from 'vue-meta'

Vue.use(CoolLightBox);
Vue.config.productionTip = false
Vue.use(Meta)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
