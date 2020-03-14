<template>
	<button
		class="w-full mt-3 py-4 text-white text-sm rounded-sm focus:outline-none hover:bg-blue-500"
		:class="{
			'bg-blue-600': !loading,
			'bg-blue-400': loading
		}"
		type="submit"
		:disable="disable"
		:loading="loading"
		@click="$emit('click')"
	>
		<Loader v-if="loading"></Loader>
		<span v-else>{{ label }}</span>
	</button>
</template>

<script>
	export default {
		props: {
			disable: {
				type: Boolean,
				required: false,
				default: false
			},
			loading: {
				type: Boolean,
				required: false,
				default: false
			},
			label: {
				type: String,
				required: true,
				default: ''
			}
		},
		name: 'Button'
	}
</script>
