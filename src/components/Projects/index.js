import React from "react";

function Projects() {
  return (
    <section id="my-project">
      <h1 class="section-title">My Project</h1>

      <div class="run-buddy">
        <a href="https://leeshekchun.github.io/run-buddy/index.html">
          <img
            src="./assets/images/hero-bg.jpg"
            alt="run-buddy-project-cover"
          />

          <div class="run-buddy-text">
            <h3>RUN-BUDDY</h3>
          </div>
        </a>
      </div>

      <div class="horiseon">
        <a href="https://leeshekchun.github.io/Horiseon-refactor/">
          <img
            src="./assets/images/digital-marketing-meeting.jpg"
            alt="digital-marketing-meeting"
          />

          <div class="horiseon-text">
            <h3>HORISEON</h3>
          </div>
        </a>
      </div>

      <div class="KevinBacon">
        <a href="https://dawnwogerman.github.io/6degreesofkevinbacon/">
          <img src="./assets/images/kevinbacon-herobg.jpg" alt="Kevin Bacon" />

          <div class="kevinBacon-text">
            <h3>Six Degree of Kevin Bacon</h3>
          </div>
        </a>
      </div>

      <div class="petsagram">
        <a href="https://petsagram-project2.herokuapp.com/">
          <img src="./assets/images/petsagram.png" alt="petsagram-project2" />

          <div class="petsagram-text">
            <h3>Petsagram</h3>
          </div>
        </a>
      </div>

      <div class="artofJenna">
        <a href="https://artofjenna.herokuapp.com/">
          <img
            src="./assets/images/art-of-jenna-louise.png"
            alt="artOfJenna-project3"
          />

          <div class="artOfJenna-text">
            <h3>Art-of-Jenna-Louise</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
