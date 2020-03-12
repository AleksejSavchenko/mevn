import client from '@utils/axios'

export const SET_AUTH = 'SET_AUTH'
export const POST_REGISTER = 'POST_REGISTER'

export default {
  [POST_REGISTER]: ({ commit }, data) =>
    client.post('auth/register', data).then(response => {
      const { user, token } = response.data
      localStorage.setItem('auth', JSON.stringify(response.data))
      commit(SET_AUTH, { user, token })
    })
}
