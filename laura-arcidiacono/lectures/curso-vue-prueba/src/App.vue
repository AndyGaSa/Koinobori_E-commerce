<template>
<div id="app">
   <img alt="Vue logo" src="./assets/logo.png">
   <Titulo texto="Mi banco dinámico 2.0" />
   <Cuenta />
  </div>
 
</template>

<script>
import Titulo from './components/Titulo.vue';
import Cuenta from './components/Cuenta.vue';
export default {
  name: 'App',
  components: {
    Titulo,
    Cuenta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
