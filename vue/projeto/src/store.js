import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const BASE_URL = "http://104.248.235.252:3019/api/"

Vue.use(Vuex)

export const store = new Vuex.Store({
  // state
  state: {
      hospitais: []
  },
  getters: {
    getHospitais(state) {
      return state.hospitais
    }
  },
  actions: {
    loadHospitais(context) {
      axios.get(BASE_URL+"hospitais").then((payload) => {
        context.commit('setHospitais', payload.data)
      })
    }
  },
  mutations: {
    setHospitais(state, payload) {
        state.hospitais = payload
    }
  }
}); 