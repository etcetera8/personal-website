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
      <a href="www.linkedin.com/in/parker-lindley"><article class="icon linkedin"></article></a>
      <a href="https://twitter.com/pshark8"><article class="icon twitter"></article></a>
      <a href="https://github.com/etcetera8"><article class="icon github"></article></a>
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
    letter-spacing: .1em;
  }

  .image {
    background-image: url('../../assets/dio.jpg');
    background-size: cover;
    width: 450px;
    min-width: 33%;
  }

  .about {
  }

  .hi {
    color: #FBFEF9;
    font-size: 1.3em;
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

  @keyframes bounce {
    25% {width: 90px; height: 90px;}
    50% {width: 100px; height: 100px;}
  }

  .icon {
    background: #383D3B;
    border: 5px solid #383D3B;
    background-size: cover;
    border-radius: 2px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    animation-play-state: paused;
    transition: background-color .2s, border-color .2s;
  }

  .icon:hover {
    animation-play-state: running;
    -webkit-animation: bounce .3s;
    animation: bounce .3s;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    background-color: #1B998B;
    border-color:#1B998B;
  }

  .linkedin {
    background-image: url('../../assets/linkedin3.png');
  }

  .twitter {
    background-image: url('../../assets/twitter.png');
  }

  .github {
    background-image: url('../../assets/github2.png');
  }

</style>

