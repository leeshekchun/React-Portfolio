import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox} from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div>
                <a href='https://www.linkedin.com/in/shekchunlee/'><h3><BsLinkedin/>LinkedIn</h3></a>
            </div>

            <div>
                <a href='https://github.com/leeshekchun'><h3><BsGithub/>Github</h3></a>
            </div>

            <div>
                <a href='leeshekchun@gmail.com'><h3><BsMailbox/>Email</h3></a>
            </div>
        </footer>
    )
}

export default Footer;