import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    const NAV_HEIGHT = 70;
    window.addEventListener('scroll', () => this.setState({
      scrolled: (window.pageYOffset > NAV_HEIGHT) //return true or false
    }));
  }
  render() {
    return (
      <nav className={this.state.scrolled ? 'nav-min' : 'nav-max'}>
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
}

export default Nav;