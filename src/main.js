import Vue from 'vue'
import App from './App.vue'
import router from './router'

// * Libraries
  // * Vuelidate
    import Vuelidate from 'vuelidate'
    Vue.use(Vuelidate)
  // * Vuelidate END
  // * Font Awesome
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'
    import { fab } from '@fortawesome/free-brands-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(fas, far, fab)

    Vue.component('font-awesome-icon', FontAwesomeIcon)
  // * Font Awesome END
// * Libraries END

Vue.filter('formatDate', (dateInput) => {
  let date = new Date(dateInput);
  
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return `${months[month]} ${day}, ${year}`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
