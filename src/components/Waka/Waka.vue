<template>
  <div class="waka-wrapper">
    <section class="waka-description">
      <div class="figures">
        <figure class="floater"><embed src="https://wakatime.com/share/@etctera8/ce90fecd-0432-4554-b9d0-44393739ab9d.svg"></embed></figure>
        <figure><embed src="https://www.codewars.com/users/etcetera8/badges/small"></embed></figure>
      </div>
      <p class="text">This is a breakdown of the languages I'm using most recently and my current level from Codewars. I'm always more than willing to dive into some new languages or frameworks and see what I can make happen. Most recently I've been really interested in trying to create complex backends and integrate them with my front end work. A personal goal of mine is to make some forward momentum learning Ruby.</p>
      <p class="text">I thoroughly enjoy the compartmentalization and reusability that frameworks such that React and Vue both offer so you'll find that many of my projects utilize either one of those. It was the convenience and scalability that brought me into these frameworks and the community that makes me stay. I will always try and give back to people trying to learn these as I have been taught so much by those willing to give their time.</p>
      <p class="text">I also make a point of it to test every one of my applications as it makes my, and the lives of my fellow project members, much easier down the road when we go about refactoring. Typically I use Jest and Enzyme for React and Mocha Chai for my backend work. I have also used Jasmine but typically with Exercisms and Codewar exercises.</p>
    </section>
  </div>
</template>

<script>

export default {

  created () {
    this.getJson()
  },

  data () {
    return {
      langs: []
    }
  },

  methods: {
    getJson () {
      $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@2c90c59e-1b11-4af6-850f-8ba65cdc1447/2898024a-aac7-4588-9473-2488ffd6ed2d.json',
        dataType: 'jsonp',
        success: function (response) {
          this.langs = [...response.data]
        }
      })
    }
  }
}
</script>

<style>

 .text {
    color: #383D3B;
    font-size: 1.3em;
    font-weight: 500;
    margin: 25px;
  }

  .waka-wrapper {
    display: flex;
    border: 1px solid lightgray;
    background-color:#fff;
    margin: 25px;
    line-height: 2em;
    justify-content: space-around;
  }

  .waka-display { 
    min-width: 550px;
    width: 49%;
    min-height: 600px;
  }

  .figures {
    float: left;
    margin-right: 50px;
  }

  .floater {
    float: left;
    max-width: 450px;
    min-width: 300px;
    width: 100%;
  }

  @media screen and (max-width: 465px){
    .waka-wrapper {
      width: 100%;
      margin: 0;
    }

    p .hi {
      text-align: center;
      margin: 50px;
    }
  }

</style>
