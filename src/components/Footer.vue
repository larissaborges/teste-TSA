<template>
  <footer>
      <div v-if="$store.state.cadastrado">{{cadastro.nome}} - 2021</div>
      <div v-else>2021</div>
  </footer>
</template>

<script>
export default {
computed: {
    cadastro(){
        return this.$store.state.cadastro
    },
    cadastrado(){
        return this.$store.state.cadastrado
    }
}
}
</script>

<style scoped>
footer{
    display: flex;
    align-items: center;
    height: 150px;
    background-color: #1188EE;
    color: white;
    font-weight: bold;
    position: relative;
    top: 75px;
}
div{
    margin: 40px;
}
</style>