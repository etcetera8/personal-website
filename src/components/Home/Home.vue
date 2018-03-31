<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <section class="image">
      </section>
      <section class="about">
        <h2 class="hi">Hi,</h2>
        <p class="hi">I am an energetic front-end developer with a passion for learning and a drive for creating beautiful, functional and accessible apps. I have developed numerous web and mobile apps and have a background in cartography and GIS.</p>
        <p class="hi">Most of my free time is spent maintaining my stable of bikes, training for racing or working on toy projects. Personal favorite way to start a day? Kick my own ass up and down a mountain, followed by a burrito and then spending the rest of the day creating fun projects in a food coma.</p>
        <p class="hi">Feel free to contact me about any of my work, what I'm working on or mountain biking in Colorado or North Carolina. </p>
      </section>
    </div>
    <section class="social">
      <article class="icon linkedin"></article>
      <article class="icon twitter"></article>
      <article class="icon github"></article>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    display: flex;
    margin: 25px;
    background: #383D3B;
    color: #FBFEF9;
    letter-spacing: .1em;
  }

  .image {
    background-image: url('../../assets/dio.jpg');
    background-size: cover;
    width: 400px;
    height: 400px;
    min-width: 33%;
  }

  .about {
  }

  .hi {
    margin: 25px;
  }

  .hi::first-letter {
    color: #84DCC6;
    font-size: 1.1em;
    font-weight: bold;
  }

  .social {
    display: flex;
    justify-content: space-around;
    margin: 25px;
    width: 50%;
  }

  .icon {
    border: 5px solid #383D3B;
    border-radius: 2px;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  .linkedin {
    background: #383D3B;
    background-image: url('../../assets/linkedin3.png');
    background-size: cover;
  }

  .twitter {
    background: #383D3B;
    background-image: url('../../assets/twitter.png');
    background-size: cover;
  }

  .github {
    background: #383D3B;
    background-image: url('../../assets/github2.png');
    background-size: cover;
  }

</style>

