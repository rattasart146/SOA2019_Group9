<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {Navigation},
}
</script>

<style>

#app {
  margin-top: 80px;
  font-family: Anakotmai-set;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 5rem;
}
</style>
