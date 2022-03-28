import Vue from 'vue'
import App from './App.vue'
import router from './router'

// * Libraries
  // * Vuelidate
    import Vuelidate from 'vuelidate'
    Vue.use(Vuelidate)
  // * Vuelidate END
// * Libraries END

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
