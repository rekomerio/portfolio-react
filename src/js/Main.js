import React from "react";
import { skills, projects } from "./Content";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    roundButton: {
        borderRadius: "50%" //Used for profile picture ripple
    },
    imageRipple: {
        fontFamily: "inherit",
        fontSize: "1em",
        padding: 0,
        margin: 0,
        fontWeight: "inherit",
        textTransform: "none"
    }
}));

function Main(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <header
                className={`app-header background-tint ${
                    props.scrolled ? "dark-tint" : "light-tint"
                }`}
            >
                <div>
                    <h2>Reko Meriö</h2>
                    <p>Software Development student</p>
                </div>
            </header>
            <div id="about" className="content deep-dark left">
                <div className="general">
                    <h1 className="purple-font">About me</h1>
                    <p>
                        My name is <b>Reko Meriö</b> and I'm 21 years old.
                    </p>
                    <p>
                        I'm studying <b>Information and Communications technology</b>{" "}
                        at JAMK University of Applied Sciences.
                    </p>
                    <p>
                        I specialize in Software Developement and have 2 years of
                        school behind me.
                    </p>
                </div>
                <div className="general">
                    <div className="flex-column">
                        <div>
                            <Button className={classes.roundButton}>
                                <img
                                    src="/images/me.jpeg"
                                    alt="Reko Meriö"
                                    className="round"
                                />
                            </Button>
                        </div>
                        <span className="quote">
                            "I put this quote here to look cool" - Reko M
                        </span>
                    </div>
                </div>
            </div>
            <div id="tools" className="content dark center">
                <div>
                    <h2 className="light-cyan-font">Skills and tools</h2>
                    <div className="grid-container">
                        {skills.map((skill, i) => (
                            <div className="grid-item" key={i}>
                                <h4 className="light-purple-font">{skill.title}</h4>
                                <p>{skill.description || skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="projects" className="content deep-dark center">
                <div>
                    <h2 className="cyan-font">Projects</h2>
                    <ImageGrid
                        overlayColor="dark"
                        fontColor="light-cyan-font"
                        items={projects}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;

function ImageGrid(props) {
    const classes = useStyles();
    return (
        <div className="image-grid">
            {props.items.map((item, i) => (
                <div className="grid-image-container" key={i}>
                    <Link to={item.url || "#projects"}>
                        <Button className={classes.imageRipple}>
                            <img
                                className="grid-image"
                                src={item.image.src}
                                alt={item.image.alt || item.title}
                            />
                            <div
                                className={`overlay ${props.overlayColor || "dark"}`}
                            >
                                <div className="overlay-text">
                                    <h2 className={props.fontColor}>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
