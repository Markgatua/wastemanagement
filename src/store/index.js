import { createStore } from "vuex"
import VuexPersist from 'vuex-persist'
import authStore from "@/store/Auth/authStore"

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, //window.sessionStorage
})

export default createStore({
  modules: {
    auth: authStore,
  },
  plugins: [vuexLocalStorage.plugin],
})
