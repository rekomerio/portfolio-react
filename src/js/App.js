import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Project from "./Project";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", () => this.changeScrollState());
    }
    changeScrollState() {
        const NAV_HEIGHT = 70;
        const scrolled = window.pageYOffset > NAV_HEIGHT; //True or false
        if (this.state.scrolled !== scrolled) {
            this.setState({ scrolled: scrolled }); // Update state and render the page
        }
    }
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="app">
                    <Nav scrolled={this.state.scrolled} />
                    <div className="divider" />
                    <Route
                        render={() => <Main scrolled={this.state.scrolled} />}
                        exact
                        path="/"
                    />
                    <Route path="/project/:name" component={Project} />
                </div>
            </Router>
        );
    }
}

export default App;
