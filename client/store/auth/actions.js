import client from '@utils/axios'

export const SET_AUTH = 'SET_AUTH'
export const UNSET_AUTH = 'UNSET_AUTH'
export const POST_REGISTER = 'POST_REGISTER'
export const POST_LOGIN = 'POST_LOGIN'

export default {
	[POST_LOGIN]: (ctx, data) => client.post('auth/login', data),
	[POST_REGISTER]: (ctx, data) => client.post('auth/register', data)
}
