import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cadastrado: false,
    cadastro: {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      estado: "",
      cep: "",
      cidade: "",
      tipoDePagamento: "",
      nomeNoCartao: "",
      mes:"",
      ano: "",
      numero: "", 
      codigo: ""
    }
  },
  mutations: {
    ADD_REGISTER(state, payload){
      state.cadastrado = payload
    },
    CREATE_REGISTER(state, payload){
      state.cadastro = payload
      console.log(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
