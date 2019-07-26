import Vue from 'vue'
import App from '../components/App.vue'

window.addEventListener('load', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount('#app')
})