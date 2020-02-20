import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Project from "./Project";
import { HashRouter as Router, Route } from "react-router-dom";

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
        const scrolled = window.pageYOffset > NAV_HEIGHT;
        if (this.state.scrolled !== scrolled) {
            this.setState({ scrolled: scrolled });
        }
    }

    render() {
        return (
            <Router>
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
