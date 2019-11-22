const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
  {title: 'Post 2', date: new Date(), views: 12, comments: [1, 2], _id: 'id2'}
]
export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {
  async fetchAdmin({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },

  async remove({}, id) {

  },

  async fetchAdminById({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((p) => p._id === id))
      }, 1000)
    })
  },

  async update({}, {id, text}) {

  },

  async create({commit}, {title, text, image}) {

    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    } catch(err) {
      commit('setError', err, {root: true})
      throw err
    }
  }
}
