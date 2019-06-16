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
    const NAV_HEIGHT = 70;
    window.addEventListener('scroll', () => this.setState({
      scrolled: (window.pageYOffset > NAV_HEIGHT) //return true or false
    }));
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
