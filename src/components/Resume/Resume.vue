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
    align-self: flex-start;
  }

  .download {
    margin-bottom: 25px;
    font-size: 1em;
    height: 40px;
    width: 100px;
    color: #FBFEF9;
    background: none;
    border: 1px solid #84DCC6;
    transition: background 0.2s, color 0.2s;
    cursor: pointer;
  }

  .download:hover {
    background: #FBFEF9;
    color: #1B998B;
  }
  .resume-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    margin: 25px;
    background: #383D3B;
  }

  .resume {
    width: 700px;
    height: 900px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../../assets/project_assets/resume.png');
  }
</style>