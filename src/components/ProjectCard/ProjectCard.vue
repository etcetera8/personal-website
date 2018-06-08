<template>
  <article  class="project-card" :key="project.id">
    <div class="project-image" v-bind:style="{ 'background-image': 'url(' + project.image + ')' }"></div>
    <h2 class="project-details">{{project.title}}</h2>
    <div class="tech-stack"><span class="target">Tech Stack:</span> {{project.techStack}}</div>
    <p class="project-details paragraph">{{project.description}}</p>
    <div class="btn-wrapper">
      <a :class="[project.live ? link : disabled]" :href="project.production">Live Page</a>
      <a :class="[project.gh ? link : disabled]" :href="project.github">GitHub</a>
    </div>
  </article>
</template>

<script>
export default {
  props: ['project'],
  data () {
    return {
      link: 'project-details',
      disabled: 'disabled'
    }
  }
}
</script>

<style scoped>

  .project-card {
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid lightgray;
    min-height: 520px;
    width: 65%;
    background-color:rgb(248, 248, 248);
    margin: 50px;
  }

  .tech-stack {
    margin: 0 0 0 25px;
    font-size: .8em;
  }

  .target {
    font-weight: 500;
  }

  .paragraph {
    line-height: 1.5em;
  }

  .btn-wrapper {
    bottom: 0;
    margin-bottom: 25px;
  }

  .project-details,
  .disabled {
    margin: 15px 25px;
  }

  .paragraph {
    flex-grow: 1;
  }

  a.project-details,
  .disabled {
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

  a.disabled {
    cursor: default;
    color: gray;
    border: 1px solid gray;
    background: lightgrey;
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
    .project-card {
      width: 80%;
    }
  }

  @media screen and (max-width: 490px)  {
    .project-card {
      margin: 50px 0;
      width: 95%;
      margin-bottom: 25px;
      height: 600px;
    }

    .project-details {
      margin: 15px auto;
    }
  }

  @media screen and (max-width: 400px)  {
  }

</style>
