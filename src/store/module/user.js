import { loginApi,infoApi } from '@/api/user'
import { cookget, cookset } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: null,
  name: '',
//   avatar: '',
//   introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
//   SET_INTRODUCTION: (state, introduction) => {
//     state.introduction = introduction
//   },
  SET_NAME: (state, name) => {
    state.name = name
  },
//   SET_AVATAR: (state, avatar) => {
//     state.avatar = avatar
//   },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
const getters = {
  getRoles: (state) => {
    return state.roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      loginApi().then(response => {
        commit('SET_TOKEN','token')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      infoApi(state.token).then(response => {
        const {name,roles} = response.data
        commit('SET_NAME',name)
        commit('SET_ROLES',roles)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // getMenu({commit, state}) {

  // }
  
//   // user logout
//   logout({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       logout(state.token).then(() => {
//         commit('SET_TOKEN', '')
//         commit('SET_ROLES', [])
//         removeToken()
//         resetRouter()
//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

  // remove token
//   resetToken({ commit }) {
//     return new Promise(resolve => {
//       commit('SET_TOKEN', '')
//       commit('SET_ROLES', [])
//       removeToken()
//       resolve()
//     })
//   },

  // dynamically modify permissions
//   changeRoles({ commit, dispatch }, role) {
//     return new Promise(async resolve => {
//       const token = role + '-token'

//       commit('SET_TOKEN', token)
//       setToken(token)

//       const { roles } = await dispatch('getInfo')

//       resetRouter()

//       // generate accessible routes map based on roles
//       const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

//       // dynamically add accessible routes
//       router.addRoutes(accessRoutes)

//       // reset visited views and cached views
//       dispatch('tagsView/delAllViews', null, { root: true })

//       resolve()
//     })
//   }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
