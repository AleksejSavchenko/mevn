import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, length } from 'vee-validate/dist/rules';
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from './pages/Main.vue'

// Add a rules.
// Override the default message.
extend('email', {
  ...email,
  message: 'Email field must be a valid email'
});
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('length', {
  ...length,
  message: (fieldName) => `This ${fieldName} field is required`
});


// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(Router)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
