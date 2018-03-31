<template>
   <header class="ui huge header">
     <h1 id="name">Parker Lindley</h1>

    <nav>
      <router-link to="/"><button class="ui button about">ABOUT</button></router-link>
      <router-link to="/projects"><button class="ui button projects">PROJECTS</button></router-link>
      <router-link to="/resume"><button class="ui button resume">RESUME</button></router-link>
    </nav>

   </header>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>



<style scoped>

  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    color: #FBFEF9;
    height: 70px;
    background: #1B998B;

  }

  h1 {
    margin-left: 15px;
  }

  nav {
    align-self: flex-end;
    margin-right: 15px;
  }

  .button {
    margin-left: 25px;
    font-size: 1em;
    height: 40px;
    width: 100px;
    color: #FBFEF9;
    background: none;
    border: 1px solid #84DCC6;
    border-bottom: none;
    transition: background 0.2s, color 0.2s;
  }

  .button:hover {
    background: #FBFEF9;
    color: #1B998B;
  }


</style>
