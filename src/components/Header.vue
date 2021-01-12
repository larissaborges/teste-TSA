<template>
  <header>
    <nav>
      <router-link to="/lista">Lista</router-link> |
      <router-link to="/">Cadastro</router-link>
    </nav>        
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

header {
  height: 60px;
  background-color: #17222D;
  font-family: 'Nunito';
}
nav{
  align-content: center;
  text-align: end;

}
</style>