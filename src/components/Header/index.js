import React from "react";
import developer from '../../assets/full-stack.jpeg'

function Header() {
  return (
    <header>
      <div>
        <h2>Hi, I'm Chris Lee!</h2>
        <h3>I'm a Full Stack Web Developer</h3>
        <img src={developer} className="my-2" style={{ width: "30%" }} alt="cover" />
      </div>
    </header>
  );
}

export default Header;
