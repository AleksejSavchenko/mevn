import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import store from './store'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import * as Components from '@components'
import Main from './pages/Main.vue'

// Init all components
Object.keys(Components).forEach(component => {
  Vue.component(component, Components[component])
})

// Add a rules.
// Override the default message.
extend('email', {
  ...email,
  message: 'Email field must be a valid email'
})
extend('required', {
  ...required,
  message: fieldName => `This ${fieldName} field is required`
})
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`
  }
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.use(Router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
