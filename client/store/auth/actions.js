import client from '@utils/axios'

export const SET_AUTH = 'SET_AUTH'
export const POST_REGISTER = 'POST_REGISTER'
export const POST_LOGIN = 'POST_LOGIN'

export default {
  [POST_LOGIN]: ({ commit }, data) =>
    client.post('auth/login', data).then(response => {
      const { user, token } = response.data
      localStorage.setItem('auth', JSON.stringify(response.data))
      commit(SET_AUTH, { user, token })
    }),

  [POST_REGISTER]: ({ commit }, data) =>
    client.post('auth/register', data).then(response => {
      const { user, token } = response.data
      localStorage.setItem('auth', JSON.stringify(response.data))
      commit(SET_AUTH, { user, token })
    })
}
