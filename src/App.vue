<template>
  <div id="app">
    <Header />
    <transition
      name="bounce"
      enter-active-class="slideInLeft"
      leave-active-class="slideOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
/* #1B998B green*/
textarea, 
input, 
button { 
  outline: none; 
}

html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  margin-top: 0;
  padding: 0;
}
</style>
