<template>
  <div class="projects-wrapper">
    <button class='carousel-button' @click="previous">NEXT</button>
    <div class="indicator">
      <span 
        class="dot" 
        v-for="(number, index) in projectMatches" 
        :key="index"
        :data="number"
        v-bind:class="getClass(index)"
      ></span>
    </div>
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
import {projects} from '../../../projects'

export default {
  data() {
    return {
      show: true,
      projects: projects,
      projectMatches: this.numProjects(projects),
      current: projects[0]
    }
  },

  methods: {
    previous () {
      const last = this.projects.pop();
      this.current = last
      this.projects = [last].concat(this.projects);
      this.show = !this.show;
      setTimeout( () => this.show = !this.show, 400);
    },

    getClass(id) {
      return id === this.current.id ? 'active' : '';
    },

    numProjects(projects) {
      return projects.map((project, index) => {
        return index - 1;
      })
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

  .indicator {
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 125px;
  }

  .dot {
    border: 7px solid rgba(255, 255, 255, .4);
    border-radius: 50%;
  }

  .indicator-dot {
    color: white;
    display: inline-block;
  }

  .active {
    border: 7px solid rgba(255, 255, 255, 1);
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


