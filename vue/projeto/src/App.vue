<template>
  <div id="app">
    <div>
      <router-link to="/" ><span style="margin-right: 20px;">Home</span></router-link>
      <router-link to="/hospitais" ><span>Hospitais</span></router-link>
    </div>
    <div><router-view /></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
