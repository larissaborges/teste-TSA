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
            <input type="text" name="endereco" placeholder="Rua, Número e Bairro"/>
            <label for="endereco">Endereço</label>
            </div>
            <div class="box">
            <select>
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
            <input type="text" name="cep"/>
            <label for="cep">CEP</label>
            </div>
            <div class="box">
            <select>
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
            <input type="radio" name="payment" id="cartao" value="cartao" >
            <span class="checkmark"></span>
            <label for="cartao">Cartão de Crédito</label>
          </div>
          <div class="box radios">
            <input type="radio" name="payment" id="boleto" value="boleto" >
            <span class="checkmark"></span>
            <label for="boleto">Boleto Bancário</label>
          </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text" placeholder="Nome impresso no cartão">
            <label for="nome-cartao">Nome no Cartão</label>
          </div>
          <div class="wrapper-box">
            <div class="box">
              <label class="label" for="mes">Data de expiração</label>
              <select>
                <option disabled selected value="">Mês</option>
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
              </select>
            </div>
            <div class="box">
              <select>
                <option disabled selected value="">Mês</option>
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
              </select>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text">
            <label for="numero">Número do Cartão</label>
          </div>
          <div class="box">
            <input type="text">
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
      cadastro: {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      estado: "",
      cep: "",
      cidade: ""
    }
    }
  },
  methods: {
    cadastrar() {
      this.$store.dispatch('criarCadastro', this.cadastro)
      console.log(this.cadastro)
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

</style>
