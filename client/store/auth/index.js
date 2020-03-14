import mutations from './mutations'
import actions from './actions'
import getters from './getters'

let initialState

try {
	initialState = JSON.parse(localStorage.getItem('auth'))
} catch (e) {
	initialState = {
		user: null,
		token: null
	}
}

export default {
	state: initialState,
	mutations,
	actions,
	getters
}
