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
      cidade: ""
    },
    pagamento: {
      tipo: "",
      nome: "",
      mes: "",
      ano: "",
      numero: "",
      codigo: ""
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
