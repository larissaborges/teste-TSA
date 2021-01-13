<template>
  <div class="lista" id="lista">
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
        <div>
        <div class="wrapper-grid">
          <div>Nome</div>
          <div>Email</div>
          <div>CPF</div>
          <div>Criado em: ?</div>
          <div>{{cadastro.nome}}</div>
          <div>{{cadastro.email}}</div>
          <div>{{cadastro.cpf}}</div>
          <div>larissafurtad</div>
        </div>

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
#lista{
  font-weight: bold;
}
.wrapper-grid{
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 800px;
  border-bottom: 2px solid rgb(199, 199, 199);
  border-left: 2px solid rgb(199, 199, 199);
  min-width: 100%
}
.wrapper-grid > div{
  border-top: 2px solid rgb(199, 199, 199);
  border-right: 2px solid rgb(199, 199, 199);
  font-size: 15px;
  padding: 10px;
}
</style>
