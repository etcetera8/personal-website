<template>
  <div class="projects-wrapper">
    <section class="project-display" v-for="project in projects" v-bind:key="project.id">
      <article class="project-card">
        <div class="project-image" v-bind:style="{ 'background-image': 'url(' + project.image + ')' }"></div>
        <h2>{{project.title}}</h2>
        <p>{{project.description}}</p>
        <a href=project.production>Production</a>
      </article>
    </section>
    

  </div>
</template>

<script>
import koglock from './assets/koglock.png'
//import koglock from './assets/koglock.png'

export default {
  data() {
    return {
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
          image: "./assets/koglock.png"
        },
      ]
    }
  }
  
}
</script>

<style scoped>

  .projects-wrapper {
    background-color:#383D3B;
    margin: 25px;
    overflow-y: scroll;
  }

  .project-display {
    display: flex;
    justify-content: center;

  }

  .project-card {
    height: 500px;
    width: 50%;
    background-color:#FBFEF9;
    margin: 50px;
  }

  .project-image {
    width: 100%;
    height: 200px;
    background-size: cover;
  }




</style>


