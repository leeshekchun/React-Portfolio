import React, { useEffect } from 'react';

function Nav(props) {
const {
    currentCategory,
    setCurrentCategory
} = props;

<nav>
<ul className="flex-row">

<li className="mx-2">
    <a href="#home" onClick={() => setCurrentCategory('#home')}>
      Home
    </a>
  </li>

  <li className="mx-2">
    <a href="#about" onClick={() => setCurrentCategory('#about')}>
      About me
    </a>
  </li>

  <li className="mx-2">
    <a href="#experience" onClick={() => setCurrentCategory('#experience')}>
      My Experience
    </a>
  </li>

  <li className="mx-2">
    <a href="#projects" onClick={() => setCurrentCategory('#projects')}>
      Projects
    </a>
  </li>

  <li className="mx-2">
    <a href="#contact" onClick={() => setCurrentCategory('#contact')}>
      Contact Me
    </a>
  </li>

</ul>
</nav>

}

export default Nav;