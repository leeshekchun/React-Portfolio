import React from 'react';
import coverImage from '../../assets/me01.png';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
            My name is Chris Lee. I am currently working as an Automotive tech in Tesla.
            I love to solve problems, teach one another, and learn new things.
            Some of my hobbies are pickleball, chinese chess, and making food.
        </p>
      </div>
    </section>
  );
}

export default About;
