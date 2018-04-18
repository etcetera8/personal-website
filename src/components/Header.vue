<template>
  <header class="ui huge header">
    <div class="title-wrapper">
      <h1 id="name">Parker Lindley</h1>
      <h4 class="subtitle role">Front-End Developer</h4>
      <h5 class="subtitle contact"><a href="mailto:parker.t.lindley@gmail.com" target="_blank">parker.t.lindley@gmail.com</a></h5>
    </div>
    <nav>
      <router-link to="/" exact><button class="ui button about">ABOUT</button></router-link>
      <router-link to="/projects"><button class="ui button projects">PROJECTS</button></router-link>
      <router-link to="/waka"><button class="ui button waka">WAKA</button></router-link>
      <router-link to="/resume"><button class="ui button resume">RESUME</button></router-link>
    </nav>

   </header>

</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Chivo');

  .header {
    display: flex;
    font-family: 'Chivo', sans-serif;
    justify-content: space-between;
    align-content: center;
    color: #FBFEF9;
    height: 120px;
    background: linear-gradient(110deg, #383D3B, #1B998B);
  }

  a {
    text-decoration: none;
    color: #FBFEF9;
  }

  h1 {
    margin: 10px 15px;
  }

  .subtitle {
    margin: 4px 15px;
    color: #FBFEF9;
  }

  .contact {
    text-decoration: underline;
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

  .router-link-active button {
    background: #FBFEF9;
    color: #1B998B;
  }

</style>
