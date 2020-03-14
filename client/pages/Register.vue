<template>
	<div class="container my-16 mx-auto">
		<div class="max-w-xs mx-auto">
			<h2 class="text-center text-lg text-yellow-500">
				Register
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
						name="name"
						:rules="{
							required: true
						}"
						v-slot="{
							errors
						}"
						ref="name"
					>
						<TextInput
							:error="errors[0]"
							:value="model.name"
							name="name"
							placeholder="Enter Your name"
							v-model="model.name"
						/>
					</ValidationProvider>
					<ValidationProvider
						name="email"
						:rules="{
							required: true,
							email: true
						}"
						v-slot="{
							errors
						}"
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
						:rules="{
							required: true,
							minmax: [6, 20]
						}"
						v-slot="{
							errors
						}"
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
						label="Sing Up"
					></Button>
				</form>
			</ValidationObserver>
		</div>
	</div>
</template>

<script>
	import formMixin from '@mixins/form'
	import { POST_REGISTER } from '@store/auth/actions'

	export default {
		name: 'Register',
		mixins: [formMixin],
		data: () => ({
			model: {
				name: '',
				email: '',
				password: ''
			}
		}),
		methods: {
			onSubmit() {
				this.toggleLoading()
				this.$store
					.dispatch(POST_REGISTER, this.model)
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
