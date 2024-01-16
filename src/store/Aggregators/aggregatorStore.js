import { loginHandler, loggedUser } from "@/API/requests"

const aggregatorStore = {
  namespaced: true,
  state: ()=> ({
    data: {},
    errorMessage: '',
  }),

  mutations: {
    SET_DATA: (state, data) => {
      state.data = data
    },
    SET_ERROR_MESSAGE: (state, message) => {
      state.errorMessage = message
    },
  },

  actions: {
    async fetchAggregators({ commit }) {
      try {
        const response = await loginHandler(payload)

        commit("SET_DATA", response.username)

      } catch (error) {
        console.error("An error occurred during login:", error)

        commit("SET_ERROR_MESSAGE", error.message || "An error occurred during login")
  
        throw error
      }
    },
  },

  getters: {},
}
  
export default aggregatorStore
  