export default {
	data: () => ({
		loading: false
	}),
	methods: {
		toggleLoading() {
			this.loading = !this.loading
		},
		validationResult(response) {
			Object.keys(response).forEach(field => {
				this.$refs[field].applyResult({
					errors: [response[field]], // array of string errors
					valid: false, // boolean state
					failedRules: {} // should be empty since this is a manual error.
				})
			})
		}
	}
}
