<template>
  <header>
    <nav class="nav">
      <router-link to="/lista">Lista</router-link> ○
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  background-color: #17222D;
  font-family: 'Nunito';
}
.nav{
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: end;
  color: #EFF4F9 !important;
  font-weight: bold;
}
</style>