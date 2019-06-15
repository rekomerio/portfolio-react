import React from 'react';

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;