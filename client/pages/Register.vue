<template>
  <div class="container my-16 mx-auto">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-lg text-yellow-500">Register</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)"
              class="w-full bg-white shadow-lg mt-5 rounded-sm p-12">
        <ValidationProvider :rules="{ required: true }" v-slot="{ errors }">
          <TextInput
              :error="errors[0]"
              :value="model.name"
              name="name"
              placeholder="Enter Your name"
              v-model="model.name"
          />
        </ValidationProvider>
        <ValidationProvider :rules="{ required: true, email: true }" v-slot="{ errors }">
          <TextInput
              :error="errors[0]"
              :value="model.email"
              name="email"
              placeholder="Enter Your email"
              v-model="model.email"
          />
        </ValidationProvider>
        <ValidationProvider :rules="{ required: true, length: 6 }" v-slot="{ errors }">
          <TextInput
              :error="errors[0]"
              :value="model.password"
              name="password"
              placeholder="Enter Your password"
              type="password"
              v-model="model.password"
          />
        </ValidationProvider>
        <button class="w-full mt-3 py-4 bg-blue-600 text-white text-sm rounded-sm focus:outline-none hover:bg-blue-500"
                type="submit">Sign Up</button>
      </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
  import TextInput from '@components/TextInput.vue'
  import { POST_REGISTER } from '@store/auth/actions'

  export default {
    name: 'Register',
    components: {
      TextInput
    },
    data: () => ({
      model: {
        name: '',
        email: '',
        password: ''
      }
    }),
    methods: {
      onSubmit() {
        this.$store.dispatch(POST_REGISTER, this.model)
      }
    }
  }
</script>
