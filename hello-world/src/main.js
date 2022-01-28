import Vue from 'vue'
import App from './App.vue'
import Home from "./Home.vue"
import About from "./about.vue"

Vue.component("About",About)
Vue.component("Home",Home);

new Vue({
  el : "#app",
  render: h => h(App),
})
