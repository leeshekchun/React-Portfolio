import React from "react";
import runBuddy from "../../assets/hero-bg.jpg";
import horiseon from "../../assets/digital-marketing-meeting.jpg";
import kevinBacon from "../../assets/kevinbacon-herobg.jpg";
import petsagram from "../../assets/petsagram.png";
import jennaLouise from "../../assets/art-of-jenna-louise.png";
import Project from "../Project";

function Projects() {
  return (
    <section id="my-project">
      <h1 class="section-title">My Projects</h1>

      <Project
        class={"run-buddy"}
        link={"https://leeshekchun.github.io/run-buddy/index.html"}
        img={runBuddy}
        text={"run-buddy-text"}
        title={"RUN BUDDY"}
      ></Project>

      <Project
        class={"horiseon"}
        link={"https://leeshekchun.github.io/Horiseon-refactor/"}
        img={horiseon}
        text={"horiseon-text"}
        title={"HORISEON"}
      ></Project>

      <Project
        class={"KevinBacon"}
        link={"https://dawnwogerman.github.io/6degreesofkevinbacon/"}
        img={kevinBacon}
        text={"kevinBacon-text"}
        title={"SIX DEGREE OF KEVIN BACON"}
      ></Project>

      <Project
        class={"petsagram"}
        link={"https://petsagram-project2.herokuapp.com/"}
        img={petsagram}
        text={"petsagram-text"}
        title={"PETSAGRAM"}
      ></Project>

      <Project
        class={"artofJenna"}
        link={"https://artofjenna.herokuapp.com/"}
        img={jennaLouise}
        text={"artOfJenna-text"}
        title={"ART OF JENNA LOUISE"}
      ></Project>
    </section>
  );
}

export default Projects;
