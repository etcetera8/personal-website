<template>
  <div class="projects-wrapper">
    
    <button class='carousel-button' @click="previous"> More projects </button>
    <transition-group class="carousel" name="slide" tag="div">
      <section v-if="show" class="project-display" v-for="project in projects" v-bind:key="project.id">
        <article  class="project-card" :key="project.id">
          <div class="project-image" v-bind:style="{ 'background-image': 'url(' + project.image + ')' }"></div>
          <h2 class="project-details">{{project.title}}</h2>
          <p class="project-details">{{project.description}}</p>
          <a class="project-details link" href=project.production>Live Page</a>
        </article>
      </section>
    </transition-group>
    
  </div>
</template>

<script>
import koglock from './assets/koglock.png'
import palettepick from './assets/palette-pick2.png'

export default {
  data() {
    return {
      message: "hi",
      show: true,
      projects: [
        {
          id: 1,
          title: "Kog Locker",
          description: "Kog Locker is a cycling oriented social and personal motivation application. It's built using React, Router, Redux and uses an express backend to handle the user authentication and api calls to the Strava api. The app features 'gamification' with hand rolled badges, targeting of your number one segment and visualize it with the Google maps api, relevant and most interesting statistics, and lazy loading of images you've taken through various activities.",
          production: "https://kog-lockr.herokuapp.com/",
          image: koglock
        },
        {
          id: 2,
          title: "Palette Picker",
          description: "A color generator",
          production: "#",
          image: palettepick
        },
        {
          id: 3,
          title: "Another project",
          description: "woza",
          production: "#",
          image: palettepick
        },
      ]
    }
  },

  methods: {

    previous () {
      const last = this.projects.pop()
      this.projects = [last].concat(this.projects)   
      this.show = !this.show
      setTimeout( () => this.show = !this.show, 400)
    }
  }
  
}
</script>

<style scoped>

  .carousel-button {
    height: 40px;
    width: 100px;
    color: #FBFEF9;
    padding: 20px;
    background: none;
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }

  .projects-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#383D3B;
    margin: 25px;
    overflow: hidden;
    height: 670px;
  }

  .project-display {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 25px;
  }

  .project-card {
    border: 1px solid #FBFEF9;
    height: 520px;
    width: 50%;
    background-color:#FBFEF9;
    margin: 50px;
  }

  .project-details {
    margin: 15px 10px;
  }

  a.project-details {
    color: inherit;
    text-decoration: none;
    text-decoration-style: none;
    border: 1px solid #1B998B;
    padding: 5px;
  }

  .project-card:last-of-type {
    opacity: 1;
  }

  .project-image {
    width: 100%;
    height: 220px;
    background-size: cover;
  }

</style>


