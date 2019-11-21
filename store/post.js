import { setTimeout } from "timers"

export const state = () => ({
  posts: null
})

export const getters = {
  isAuthenticated: posts => Boolean(state.posts)
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
  async fetchAdmin({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: Math.random()},
          {title: 'Post 2', date: new Date(), views: 12, comments: [1, 2], _id: Math.random()}
        ], 1000)
      })
    })
  }
}
