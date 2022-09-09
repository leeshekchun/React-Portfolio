import React from "react";
import runBuddy from "../../assets/hero-bg.jpg";
import horiseon from "../../assets/digital-marketing-meeting.jpg";
import kevinBacon from "../../assets/kevinbacon-herobg.jpg";
import petsagram from "../../assets/petsagram.png";
import jennaLouise from "../../assets/art-of-jenna-louise.png";

function Projects() {
  return (
    <section id="my-project">
      <h1 class="section-title">My Projects</h1>

      <div class="run-buddy">
        <a href="https://leeshekchun.github.io/run-buddy/index.html">
          <img
            src={runBuddy}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class="run-buddy-text">
            <h3>RUN BUDDY</h3>
          </div>
        </a>
      </div>

      <div class="horiseon">
        <a href="https://leeshekchun.github.io/Horiseon-refactor/">
          <img
            src={horiseon}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class="horiseon-text">
            <h3>HORISEON</h3>
          </div>
        </a>
      </div>

      <div class="KevinBacon">
        <a href="https://dawnwogerman.github.io/6degreesofkevinbacon/">
          <img
            src={kevinBacon}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class="kevinBacon-text">
            <h3>SIX DEGREE OF KEVIN BACON</h3>
          </div>
        </a>
      </div>

      <div class="petsagram">
        <a href="https://petsagram-project2.herokuapp.com/">
          <img
            src={petsagram}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class="petsagram-text">
            <h3>PETSAGRAM</h3>
          </div>
        </a>
      </div>

      <div class="artofJenna">
        <a href="https://artofjenna.herokuapp.com/">
          <img
            src={jennaLouise}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class="artOfJenna-text">
            <h3>ART OF JENNA LOUISE</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
