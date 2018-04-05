<template>
  <div class="projects-wrapper">
    <button class='carousel-button' @click="previous">NEXT</button>
    <transition-group class="carousel" name="slide" tag="div">
      <section v-if="show" class="project-display" v-for="project in projects" v-bind:key="project.id">
        <article  class="project-card" :key="project.id">
          <div class="project-image" v-bind:style="{ 'background-image': 'url(' + project.image + ')' }"></div>
          <h2 class="project-details">{{project.title}}</h2>
          <p class="project-details paragraph">{{project.description}}</p>
          <div class="btn-wrapper">
            <a class="project-details link" :href="project.production">Live Page</a>
            <a class="project-details link" :href="project.github">GitHub</a>
          </div>
        </article>
      </section>
    </transition-group>
    
  </div>
</template>

<script>
import koglock from './assets/koglock.png'
import palettepick from './assets/palette-pick2.png'
import headcount from './assets/headcount.png'
import swapi from './assets/swapibox.png'
import weatherly from './assets/weatherly.png'
import trail from './assets/trail.png'
import movie from './assets/movie.png'
import drapac from './assets/drapac.png'
import joust from './assets/joust.png'
import co_api from './assets/co_api.png'
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
          github: "https://github.com/etcetera8/kog-locker",
          image: koglock
        },
        {
          id: 2,
          title: "Palette Picker",
          description: "A postgresql/Node/Express backend with jQuery front-end mimicking the functionality of Coolers or other palette generators. The user is able to create new projects and store unlimited palettes within those projects. ",
          production: "https://parkerspalettepicker.herokuapp.com/",
          github: "https://github.com/etcetera8/pallete-picker",
          image: palettepick
        },
        {
          id: 3,
          title: "HEADCOUNT",
          description: "This react app takes in kindergarten attendance rates for all Colorado school districts. The user is able to live search for any district they wish to find with the results narrowing down as they type. As soon as two districts are selected a comparison card appears that shows the users the ratio of attendance rates between the two. The user can also toggle selection by clicking again on any card or clearing out the entire comparison container. The project is unit and integration tested with Jest and Enzyme.",
          production: "http://headcount2.surge.sh/",
          github: "https://github.com/etcetera8/headcount2.0",
          image: headcount
        },
        {
          id: 4,
          title: "SWAPI-BOX",
          description: "I created this project using the Star Wars API, React, asynchronus JS, and a full testing suite with Jest and Enzyme. When the user first visits the site they are immediately greeted with scrolling text from one of the Star Wars movies. As the user clicks on one of the three categories, people, planets, or vehicles, another fetch call is made and they are shown 10 of that category. Users have the ability to favorite cards. When they visits the favorites tab they are able to see all of their favorited cards where they can defavorite them if wanted. I also used local storage to store the initial fetch calls so on returning fetch calls would not need to be used again.",
          production: "http://swapi-box.surge.sh/",
          github: "https://github.com/etcetera8/swapi-box",
          image: swapi
        },
        {
          id: 5,
          title: "Joust",
          description: "I set out to recreate my favorite arcade game of all time. This project is pure Vanilla JS with extensive use of OOP. All physics and collision detection were written from scratch. The game is two playe so grab a friend and getter ready to Joust! jk",
          production: "http://joust-clone.surge.sh/",
          github: "https://github.com/etcetera8/game-time",
          image: joust
        },
        {
          id: 6,
          title: "Trail Finder",
          description: "One of the first websites I ever created using Vanilla JS and the MTB Project api. I had just moved to Colorado and was overwhelmed with choices in trails to ride near my house. I essentially created a tool that I could filter trails down based on difficulty and distance from my current position. Its how I found my go to 'after work' ride at White Rance Park. One day I would like to revisit this project with Vue or React.",
          production: "https://etcetera8.github.io/brapBrapProject/",
          github: "https://github.com/etcetera8/brapBrapProject",
          image: trail
        },
        {
          id: 7,
          title: "Movie Tracker",
          description: "A React, Router, Redux, Node/Express, Postrgresql project. The user has the ability to either sign-up or sign in to their account. Once signed in the app allows the user to find information on recent movie releases, ratings, and save them as favorites. The data is persisted throught the postgresql backend.",
          production: "https://github.com/etcetera8/movie-tracker",
          github: "https://github.com/etcetera8/movie-tracker",
          image: movie
        },
        {
          id: 8,
          title: "Cycling Team - Static Comp",
          description: "This was a static comp challenge where I was given a static comp to recreate with my own theme. The project is fully responsive and I ended up having a really good time creating the spec.",
          production: "https://etcetera8.github.io/pl-comp-challenge-2/",
          github: "https://github.com/etcetera8/pl-comp-challenge-2",
          image: drapac
        },
        {
          id: 5,
          title: "Weatherly",
          description: "A React weather app utiling asynchronous JavaScript and tested with Jest and Enzyme. This was a pair project where we set out with the goal to create a weather app that stood out from what most people are familiar with. We created a very simplistic UI with loading indication for improved UX. The user is able to search cities with a prefix trie npm package that I developed. The app utilizes local storage so the user is only prompted once for their location and do not have to visit the welcome screen again." ,
          production: "http://weatherly.surge.sh/",
          github: "https://github.com/etcetera8/weatherly",
          image: weatherly
        },
        {
          id: 10,
          title: "Colorado Superfund API",
          description: "This is a Postgresql backend built using Node, Express and Knex. The endpoints for patching, deleting and editing data are secured with JSON webtokens. The data was all gathered with Nightmare by web-scraping the EPA's website.  If you really want to test the functionality of those please let me know and I can give you the keyword for access. Otherwise the docs have all the info for accessing the public endpoints. This project was built in four days.",
          production: "https://byob-pichelle.herokuapp.com/",
          github: "https://github.com/etcetera8/CO-superfund-api",
          image: co_api
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
    margin: 25px;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    border: 1px solid #84DCC6;
    cursor: pointer;
    height: 40px;
    width: 100px;
    font-size: 1em;
    color: #FBFEF9;
    padding: 15px 0;
    padding-bottom: 30px;
    background: none;
    transition: border-color .2s, color .2s, background .3s;
  }

  .carousel-button:hover {
    border-color: #1B998B;
    background: #FBFEF9;
    color: #1B998B;
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
    min-height: 711px;
    max-height: 790px;
  }

  .project-display {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 25px;
  }

  .project-card {
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid #FBFEF9;
    min-height: 520px;
    width: 50%;
    background-color:#FBFEF9;
    margin: 50px;
  }

  .btn-wrapper {
    bottom: 0;
    margin-bottom: 25px;
  }

  .project-details {
    margin: 15px 10px;
  }

  .paragraph {
    flex-grow: 1;
  }

  a.project-details {
    color: inherit;
    text-decoration: none;
    text-decoration-style: none;
    border: 1px solid #1B998B;
    color:#1B998B;
    padding: 5px;
    transition: background .3s, color .3s;
  }

  a.project-details:hover {
    background: #1B998B;
    color: #FBFEF9;
  }


  .project-card:last-of-type {
    opacity: 1;
  }

  .project-image {
    width: 100%;
    height: 220px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 850px)  {
    .projects-wrapper {
      height: 700px;
    }

    .project-card {
      width: 80%;
    }
  }

  @media screen and (max-width: 490px)  {
    .projects-wrapper {
      height: 780px;
    }

    .project-card {
      margin: 50px 0;
      width: 95%;
    }

    .project-details {
      margin: 15px auto;
    }
  }
  
  @media screen and (max-width: 400px)  {
    .projects-wrapper {
      height: 780px;
    }
  }

</style>


