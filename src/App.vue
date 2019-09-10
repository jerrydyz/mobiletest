<template>
  <div id="app">
    <router-view name='comheader'></router-view>
    <router-view/>
    <router-view name='comfooter'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
*{margin: 0;padding: 0;}
a{text-decoration: none;color: #000;}
</style>
