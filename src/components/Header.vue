<template>
  <div>
    <resize-observer class="thing" @notify="handleResize" />
    <header class="header">
      <div class="title-wrapper">
        <h1 id="name">Parker Lindley</h1>
        <h4 class="subtitle role">Front-End Developer</h4>
        <h5 class="subtitle contact"><a href="mailto:parker.t.lindley@gmail.com" target="_blank">parker.t.lindley@gmail.com</a></h5>
      </div>
      <nav v-show="display">
        <router-link to="/" exact><button @click="toggleShow" class="ui button about">ABOUT</button></router-link>
        <router-link to="/projects"><button @click="toggleShow" class="ui button projects">PROJECTS</button></router-link>
        <router-link to="/waka"><button @click="toggleShow" class="ui button waka">WAKA</button></router-link>
        <router-link to="/resume"><button @click="toggleShow" class="ui button resume">RESUME</button></router-link>
      </nav>
      <button @click="toggleShow"  class="mobile-nav">MENU</button>

    </header>
  </div>
</template>
<script>

export default {
  data () {
    return {
      display: true
    }
  },

  methods: {
    toggleShow() {
      if (window.innerWidth < 450) {
        this.display = !this.display;
      }
    },

    handleResize() {
      if (window.innerWidth > 450) {
        this.display = true;
      } else {
        this.display = false;
      }
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

  .header {
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    color: #FBFEF9;
    height: 180px;
    background: linear-gradient(110deg, #383D3B, #1B998B);
  }

  .title-wrapper {
    float: left;
  }

  a {
    text-decoration: none;
    color: #FBFEF9;
  }

  h1 {
    margin: 25px 15px;
    margin-bottom: 35px;
    font-size: 3.2em;
  }

  .mobile-nav {
    display: none;
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

  @media screen and (max-width: 880px) {
    .button {
      margin: 0;
    }

    nav {
      margin: 0 auto;
    }

    h1 {
      margin: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }

  @media screen and (max-width: 450px){ 
    .header {
      position: relative;
    }
    
    nav {      
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
      align-self: auto;
      width: 100%;
      background: black;
      bottom: -160px;
      z-index: 1001;
    }

    .button {
      border: none;
      width: 100%;
    }

    .router-link-active button {
      border-bottom: 1px solid black;
    }

    .mobile-nav {
      display: block;
      margin: 5px auto;
      align-self: flex-end;
      background: none;
      height: 40px;
      font-size: 1em;
      color: #fff;
      border: 1px solid #fff;
      width: 100px;
    } 
  }

    @media screen and (max-width: 330px){ 

      .header {
        width: 100%;
      }

      h1 {
        font-size: 2.5em;
      }
    
    }

</style>
