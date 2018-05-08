<template>
  <div class="waka-wrapper">
    <section class="waka-display">
      <figure><embed src="https://www.codewars.com/users/etcetera8/badges/large"></embed></figure>
      <figure><embed src="https://wakatime.com/share/@etctera8/ce90fecd-0432-4554-b9d0-44393739ab9d.svg"></embed></figure>
    </section>

    <section class="waka-description">
      <p class="hi">This is a breakdown of the languages I'm using although I'm always more than willing to dive into some new languages or frameworks and see what I can make happen.</p>
      <p class="hi">I thoroughly enjoy the compartmentalization and reusability that front end frameworks such that React and Vue both offer so you'll find that many of my projects utilize either one of those. I'm also a fan of challenging myself with code exercises over a cup of coffee in the morning. The badge there is my current kata level on Codewars.</p>
      <p class="hi">I make a point of it to test every one of my applications as it makes my, and the lives of my fellow project members, much easier down the road when we go about refactoring.</p>
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

 .hi {
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

  .waka-description {
    width: 39%;
  }
</style>
