
export const state = () => ({
  token: true
})

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('mock-token'), 2000)
      })
      dispatch('setToken', token)
    } catch (err) {
      commit('setError', err, {root: true})
      throw err
    }
  },
  async createUser({commit}, formData) {
    try {
      console.log('Create User', formData)
    } catch (err) {
      throw err
    }
  },
  setToken({commit}, token) {
    commit('setToken', token)
  },
  logout({commit}) {
    commit('clearToken')
  }
}
