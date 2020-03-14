import { SET_AUTH, UNSET_AUTH } from '@store/auth/actions'

export default {
	computed: {
		isAuth() {
			return !!this.$store.state.auth.user
		},
		user() {
			return this.$store.state.auth.user
		}
	},
	methods: {
		setAuth(payload) {
			const { user, token } = payload
			localStorage.setItem('auth', JSON.stringify(payload))
			this.$store.commit(SET_AUTH, { user, token })
			this.$router.push('/')
		},
		unsetAuth() {
			localStorage.removeItem('auth')
			this.$store.commit(UNSET_AUTH)
			this.$router.push('/')
		}
	}
}
