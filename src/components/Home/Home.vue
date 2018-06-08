<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <section class="image" alt="Picture of Parker">
      </section>
      <section class="about">
        <p class="text">I am an energetic front-end developer with a passion for learning and a drive for creating beautiful, functional and accessible apps. I've developed numerous web and mobile apps, have a background in cartography and GIS, and am a fan of all things cycling. My favorite part about software development is seeing how passionate individuals working <em><strong>together</strong></em> create applications that are greater than any individual. It's so cool.</p>
        <p class="text">Most of my free time is spent maintaining my stable of bikes, training for racing or working on toy projects. Personal favorite way to start the day? Kick my own ass up and down a mountain, smashing a burrito, then spending the rest of the day squashing bugs or developing a new feature.</p>
        <p class="text">Feel free to contact me about any of my work, what I'm working on right now, questions about code or development (Looking for a mentor??)or even mountain biking in Colorado or North Carolina.</p>
      </section>
    </div>
    <section class="social">
      <a href="https://www.linkedin.com/in/parker-lindley"><article class="icon linkedin"></article></a>
      <a href="https://twitter.com/pshark8"><article class="icon twitter"></article></a>
      <a href="https://github.com/etcetera8"><article class="icon github"></article></a>
      <a href="https://medium.com/@parkerthomas_2392"><article class="icon medium"></article></a>
    </section>
  </div>
</template>

<style>

  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2em;
  }

  .wrapper {
    display: flex;
    margin: 25px;
    border: 1px solid lightgray;
    background: #fff;
    letter-spacing: .1em;
  }

  .image {
    background-image: url('../../assets/dio.jpg');
    background-size: cover;
    width: 450px;
    min-width: 33%;
  }

  .text {
    color: #383D3B;
    font-size: 1.3em;
    font-weight: 500;
    margin: 25px;
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

  .medium {
    background-image: url('../../assets/medium.png');
  }

  .email {
    background-image: url('../../assets/mail.png');
  }

  @media screen and (max-width: 880px){
    .wrapper {
      flex-direction: column;
    }

    .image {
      height: 400px;
      width: 100%;
    }

    .social {
      width: 90%;
    }
  }

</style>
