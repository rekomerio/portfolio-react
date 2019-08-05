import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <nav className={props.scrolled ? "nav-min" : "nav-max"}>
            <ul>
                <li>
                    <Link className="link" to="/#top">
                        Home
                    </Link>
                </li>
                <li>
                    <a className="link" href="/#projects">
                        Projects
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/K9260" className="badge">
                        <DiGithubBadge size="2.5em" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/reko-meriö-882146186/"
                        className="badge"
                    >
                        <TiSocialLinkedin size="2.5em" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/user/R3gouify/"
                        className="badge"
                    >
                        <TiSocialYoutube size="2.5em" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
