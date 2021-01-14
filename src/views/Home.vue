<template>
  <div class="home">
    <div class="header">
      <p>Cadastro</p>
    </div>
    <div class="container">
      <form>
        <div class="wrapper">
          <div class="box">
            <input type="text" name="name" v-model="cadastro.nome"/>
            <label for="name">Nome</label>
            </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" name="email" v-model="cadastro.email"/>
            <label for="email">Email</label>
            </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" name="CPF" v-model="cadastro.cpf"/>
            <label for="cpf">CPF</label>
            </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" name="endereco" placeholder="Rua, Número e Bairro" v-model="cadastro.endereco"/>
            <label for="endereco">Endereço</label>
            </div>
            <div class="box">
            <select v-model="cadastro.estado">
              <option disabled selected value="">Selecione um Estado</option>
              <option value="CE">CE</option>
              <option value="MA">MA</option>
              <option value="BA">BA</option>
              <option value="JN">JN</option>
            </select>
            <label for="estados">Estado</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" name="cep" v-model="cadastro.cep"/>
            <label for="cep">CEP</label>
            </div>
            <div class="box">
            <select v-model="cadastro.cidade">
              <option disabled selected value="">Selecione a cidade</option>
              <option value="Fortaleza">Fortaleza</option>
              <option value="São Luís">São Luís</option>
              <option value="Bahia">Bahia</option>
              <option value="Natal">Natal</option>
            </select>
            <label for="cidades">Cidade</label>
          </div>
        </div>
        <div class="line">
          <p>Forma de Pagamento</p> 
        </div>
        <div class="wrapper">
          <div class="box radios">
            <input type="radio" name="payment" id="cartao" value="cartao" v-model="cadastro.tipoDePagamento">
            <span class="checkmark"></span>
            <label for="cartao">Cartão de Crédito</label>
          </div>
          <div class="box radios">
            <input type="radio" name="payment" id="boleto" value="boleto" v-model="cadastro.tipoDePagamento">
            <span class="checkmark"></span>
            <label for="boleto">Boleto Bancário</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" placeholder="Nome impresso no cartão" v-model="cadastro.nomeNoCartao">
            <label for="nome-cartao">Nome no Cartão</label>
          </div>
          <div class="wrapper-box">
            <div class="box">
              <label class="label" for="mes">Data de expiração</label>
              <select v-model="cadastro.mes">
                <option disabled selected value="">Mês</option>
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
              </select>
            </div>
            <div class="box">
              <select v-model="cadastro.ano">
                <option disabled selected value="">Mês</option>
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
              </select>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" v-model="cadastro.numero">
            <label for="numero">Número do Cartão</label>
          </div>
          <div class="box">
            <input type="text" v-model="cadastro.codigo">
            <label for="codigo">Código de Segurança</label>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="text">
          <p>Seu cartão será debitado em R$ 49,00</p>
            <button @click.prevent="cadastrar" class="btn">Realizar Matrícula</button>
          <p class="crip">Informações seguras e criptografadas</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
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
    }
  },
  methods: {
    cadastrar() {
      this.$store.commit('CREATE_REGISTER', this.cadastro)
      this.$store.commit('ADD_REGISTER', true)
      this.$router.push({name: 'lista'})
    }
  }
}
</script>
<style scoped>
.home{
  font-weight: bold;
}
select option{
  color: #445566;
}

.text p, button{
  font-weight: normal;
  color: #445566;
  margin: 10px 0px 10px 0px;
}
.btn{
  background-color: #1188EE;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
}
.crip{
  font-size: 13px;
}
.radios{
  margin-bottom: 20px;
}
.radios input{
  box-shadow: none;
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
.radios label{
  position: relative;
  top: 0;
}
</style>
