import React from 'react';
import { SiLinkedin, GoMarkGithub, HiOutlineMail} from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div>
                <a href='https://www.linkedin.com/in/shekchunlee/'><h3><SiLinkedin/>LinkedIn</h3></a>
            </div>

            <div>
                <a href='https://github.com/leeshekchun'><h3><GoMarkGithub/>Github</h3></a>
            </div>

            <div>
                <a href='leeshekchun@gmail.com'><h3><HiOutlineMail/>Email</h3></a>
            </div>
        </footer>
    )
}

export default Footer;