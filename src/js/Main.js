import React, { useState } from "react";
import ProfilePic from "../images/me.jpeg";
import { skills, projects } from "./Personal";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
                    <h1>Reko Meriö</h1>
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
                                <img src={ProfilePic} alt="Reko Meriö" />
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
                    <h1 className="light-cyan-font">Skills and tools</h1>
                    <div className="grid-container">
                        {skills.map((skill, i) => (
                            <div className="grid-item" key={i}>
                                <h2 className="light-purple-font">{skill.title}</h2>
                                <p>{skill.description || skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="projects" className="content deep-dark center">
                <div>
                    <h1 className="cyan-font">Projects</h1>
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
                    <a href={item.url || "#projects"}>
                        <Button className={classes.imageRipple}>
                            <img
                                className="grid-image"
                                src={item.image}
                                alt={item.alt || item.title}
                            />

                            <div
                                className={`overlay ${props.overlayColor || "dark"}`}
                            >
                                <div className="overlay-text">
                                    <h1 className={props.fontColor}>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Button>
                    </a>
                </div>
            ))}
        </div>
    );
}
