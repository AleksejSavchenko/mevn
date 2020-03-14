<template>
	<div class="container my-16 mx-auto">
		<div class="max-w-xs mx-auto">
			<h2 class="text-center text-lg text-yellow-500">
				Login
			</h2>
			<ValidationObserver
				v-slot="{
					handleSubmit
				}"
			>
				<form
					@submit.prevent="handleSubmit(onSubmit)"
					class="w-full bg-white shadow-lg mt-5 rounded-sm p-12"
				>
					<ValidationProvider
						:rules="{
							required: true,
							email: true
						}"
						name="email"
						ref="email"
						v-slot="{
							errors
						}"
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
						:rules="{
							required: true,
							minmax: [6, 20]
						}"
						name="password"
						ref="password"
						v-slot="{
							errors
						}"
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
	import formMixin from '@mixins/form'
	import { POST_LOGIN } from '@store/auth/actions'

	export default {
		name: 'Login',
		mixins: [formMixin],
		data: () => ({
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
					.then(response => {
						this.setAuth(response.data)
					})
					.catch(error => {
						this.validationResult(error.response.data)
					})
					.finally(() => this.toggleLoading())
			}
		}
	}
</script>
