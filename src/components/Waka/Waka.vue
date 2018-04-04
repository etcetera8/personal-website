<template>
  <div class="waka-wrapper">
    <section class="waka-display">
      <figure><embed src="https://wakatime.com/share/@2c90c59e-1b11-4af6-850f-8ba65cdc1447/defbbcf9-7cf7-4366-afa1-11539692078f.svg"></embed></figure>
    </section>
    <section class="waka-description">
      <p class="hi">This is a breakdown of the languagues I'm using the most at this moment although I'm always more than willing to dive into some new languages or frameworks and see what I can make happen.</p>
    </section>
  </div>
</template>

<script>

export default {

  created() {
    this.getJson()
  },

  data() {
    return {
      langs: []
    }

  },

  methods: {
    getJson() {
      $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@2c90c59e-1b11-4af6-850f-8ba65cdc1447/2898024a-aac7-4588-9473-2488ffd6ed2d.json',
        dataType: 'jsonp',
        success: function(response) {
          this.langs = [...response.data]
        },
      });
    }
  }
  
}
</script>

<style>
  .waka-wrapper {
    display: flex;
    background-color:#383D3B;
    margin: 25px;
    line-height: 2em;

  }

  .waka-display {
    min-width: 550px;
    width: 66%;
    min-height: 600px;
  }


  .waka-description {
    width: 33%;
  }
</style>

