import React from 'react';
import { ReactComponent } from '*.svg';

class Nav extends React.Component() {
    constructor() {
      this.state = {
        scrolled: false,
      }    
    }
    test () {
        this.setState({scrolled: !this.state.scrolled});
    }
    render() {
    return (
        <nav className={this.state.scrolled ? 'nav-min' : 'nav-max'} onClick={() => test()}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
      );
    }
  }
  
  export default NavBar;