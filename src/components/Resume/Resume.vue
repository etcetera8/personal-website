<template>
  <div class="resume-wrapper">
    <form method="get" action="../../static/Parker_Lindley_Resume.pdf">
      <button class="download" type="submit">Download</button>
    </form>
    <div class="resume"></div>
  </div>
</template>

<style>

  form {
    align-self: center;
  }

  .download {
    margin-bottom: 25px;
    font-size: 1em;
    height: 40px;
    width: 100px;
    color: #1B998B;
    background: none;
    border: 1px solid #1B998B;
    transition: border 0.2s, color 0.2s;
    cursor: pointer;
  }

  .download:hover {
    color: #383d3b;
    border-color: #383d3b;
  }

  .resume-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    margin: 25px;
    background: #fff;
    border: 1px solid lightgray;
  }

  .resume {
    width: 700px;
    height: 900px;
    background-size: contain;
    border: 1px solid lightgray;
    background-repeat: no-repeat;
    background-image: url('../../assets/project_assets/resume.png');
  }

  @media screen and (max-width: 800px) {
    .resume {
      width: 500px;
      height: 700px;
    }
  }

  @media screen and (max-width: 600px) {
    .resume {
      width: 400px;
      height: 550px;
    }
  }

  @media screen and (max-width: 460px) {
    .resume-wrapper {
      margin: 0;
    }
  }
</style>
