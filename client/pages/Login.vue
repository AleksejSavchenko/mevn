<template>
  <div class="container my-16 mx-auto">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-lg text-yellow-500">Login</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(onSubmit)"
          class="w-full bg-white shadow-lg mt-5 rounded-sm p-12"
        >
          <ValidationProvider
            name="email"
            :rules="{ required: true, email: true }"
            v-slot="{ errors }"
            ref="email"
          >
            <TextInput
              :error="errors[0]"
              :value="model.email"
              name="email"
              placeholder="Enter Your email"
              v-model="model.email"
            />
          </ValidationProvider>
          <ValidationProvider
            name="password"
            :rules="{ required: true, minmax: [6, 20] }"
            v-slot="{ errors }"
            ref="password"
          >
            <TextInput
              :error="errors[0]"
              :value="model.password"
              name="password"
              placeholder="Enter Your password"
              type="password"
              v-model="model.password"
            />
          </ValidationProvider>
          <Button
            :disabled="loading"
            :loading="loading"
            label="Sing In"
          ></Button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { POST_LOGIN } from '@store/auth/actions'

export default {
  name: 'Login',
  data: () => ({
    loading: false,
    model: {
      email: '',
      password: ''
    }
  }),
  methods: {
    onSubmit() {
      this.toggleLoading()
      this.$store
        .dispatch(POST_LOGIN, this.model)
        .then(() => {
          this.toggleLoading()
          this.$router.push('/')
        })
        .catch(error => {
          this.toggleLoading()

          Object.keys(error.response.data).forEach(field => {
            this.$refs[field].applyResult({
              errors: [error.response.data[field]], // array of string errors
              valid: false, // boolean state
              failedRules: {} // should be empty since this is a manual error.
            })
          })
        })
    },
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>
