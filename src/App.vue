<template>
  <div id="app">
    <Header/>
      <transition mode="out-in">
        <router-view/>  
      </transition>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {Header, Footer}
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
* {
  padding:0;
  margin:0;
  list-style:none;
  border:0;
  font-family: 'Nunito';
  font-size: 18px;
}

a{
  color: #EFF4F9;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
}

.header {
  font-size: 40px;
  background-color: #EFF4F9;
  color: #445566;
}
.header p{
  max-width: 50%;
  padding: 30px 0px 30px 0px;
  margin: auto;
  font-size: 50px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container form, .listagem{
  width: 50%;
  margin: 50px;
}
.line::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: rgb(233, 233, 233);
    margin: 20px auto;
    text-align: center;
}
.wrapper{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  gap: 30px;
}
.wrapper-box{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 5px;
  gap: 5px;
}
.wrapper .box{
  width: 100%;
  position: relative;
  padding: 20px 0px 20px 0px;
}
.wrapper .box input, select{
  width: 100%;
  background-color: #EFF4F9;
  height: 50px;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  color: #445566;
}
.wrapper .box label {
  position: absolute;
  top: -7px;
  left: 0;
  color: #445566;
}
input::placeholder, select{
  color: rgb(179, 193, 204);
}
.line {
  padding: 20px 0px 20px 0px;
  color: #1188EE;
}
.v-enter, 
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0)
}
.v-leave-to {
  transform: translate3d(0, 20px, 0)
}

.v-enter-active,
.v-leave-active {
  transition:  all 0.3s
}
@media(max-width: 767px){
  form, .listagem{
  width: 100% !important;
  margin: 20px !important;
}
.header p{
  margin-left: 20px !important;
}
}
</style>

