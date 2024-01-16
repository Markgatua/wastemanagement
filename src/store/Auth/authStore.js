import { loginHandler, loggedUser } from "@/API/requests"

const authStore = {
  namespaced: true,
  state: ()=> ({
    authToken: null,
    data: {},
    profileData: {},
    errorMessage: '',
  }),

  mutations: {
    SET_TOKEN: (state, token) => {
      state.authToken = token
    },
    SET_DATA: (state, data) => {
      state.data = data
    },
    SET_PROFILE_DATA(state, profileData) {
      state.profileData = profileData
    },
    SET_ERROR_MESSAGE: (state, message) => {
      state.errorMessage = message
    },
  },

  actions: {
    async loginUser({ commit }, payload) {
      try {
        const response = await loginHandler(payload)

        // window.location.href = response.redirect
        // commit("SET_TOKEN", response.authToken)
        // commit("SET_DATA", response.username)
      } catch (error) {
        console.error("An error occurred during login:", error)

        commit("SET_ERROR_MESSAGE", error.message || "An error occurred during login")
  
        throw error
      }
    },
    async getUserProfile({ commit }, AuthToken) {
      try {
        const profileData = await loggedUser(AuthToken)

        commit("SET_PROFILE_DATA", profileData)
      } catch (error) {
        console.error("Error fetching logged in user data:", error)
      
        return error
      }
    }, 
    async logOut() {
    }, 
  },

  getters: {},
}
  
export default authStore
  