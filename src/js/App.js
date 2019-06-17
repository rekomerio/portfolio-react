import React from 'react';
import Nav from './Nav';
import Main from './Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.changeScrollState());
  }
  changeScrollState() {
    const NAV_HEIGHT = 70;
    let scrolled = (window.pageYOffset > NAV_HEIGHT); //True or false
    if (this.state.scrolled !== scrolled) {
      this.setState({ scrolled: scrolled }); // Update state and render the page
    }
  }
  render() {
    return (
      <div className="app">
        <Nav scrolled={this.state.scrolled} />
        <Main scrolled={this.state.scrolled} />
      </div>
    );
  }
}

export default App;
