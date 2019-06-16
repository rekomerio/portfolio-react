import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

function Nav(props) {

  return (
    <nav className={props.scrolled ? 'nav-min' : 'nav-max'}>
      <ul>
        <li><a className="link" href="#">Home</a></li>
        <li><a className="link" href="#">Projects</a></li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/K9260" className="badge">
            <DiGithubBadge size="2.5em" />
          </a>
        </li>
        <li>
          <a href="#" className="badge">
            <TiSocialLinkedin size="2.5em" />
          </a>
        </li>
        <li>
          <a href="#" className="badge">
            <TiSocialYoutube size="2.5em" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;