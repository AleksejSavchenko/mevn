<template>
	<div>
		<div class="h-2 w-full bg-yellow-600"></div>
		<div class="h-12 w-full flex items-center justify-between px-6">
			<router-link class="no-underline text-yellow-600" to="/">
				Mevn
			</router-link>
			<div v-if="!isAuth" class="links-container">
				<router-link class="no-underline text-gray-700" to="/auth/login">
					Sign in
				</router-link>
				<router-link
					class="no-underline text-gray-700 border-2 px-3 py-2 hover:text-gray-800 hover:border-gray-800 ml-1 rounded-full border-gray-600"
					to="/auth/register"
				>
					Join Now
				</router-link>
			</div>
			<div
				class="cursor-pointer text-gray-700 hover:text-gray-900"
				v-else
				@click="unsetAuth"
			>
				Logout
			</div>
		</div>

		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>
