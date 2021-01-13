import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    CREATE_REGISTER(state, payload){
      state.cadastro = payload
    }
  },
  actions: {
    criarCadastro(context, payload){
      context.commit('CREATE_REGISTER', payload)
      console.log(payload)
    }
  },
  modules: {
  }
})
