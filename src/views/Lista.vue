<template>
  <div class="lista">
    <div class="header">
    <p>Lista</p>
    </div>
    <div class="container">
      <div class="listagem">
        <div class="line">
          <p>Lista de Clientes</p> 
        </div>
        <div class="wrapper">
          <div class="box">
            <input type="text">
            <label for="">{{cadastro.nome}}</label>
          </div>
        </div>
        <div class="dados">
          <div>Nome: {{cadastro.nome}}</div>
          <div>Email: {{cadastro.email}}</div>
          <div>CPF: {{cadastro.cpf}}</div>
          <div>Criado em: ?</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    cadastro(){
     return this.$store.state.cadastro
    }
  }
}
</script>
<style scoped>
.lista{
  font-weight: bold;
}
</style>
