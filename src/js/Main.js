import React, { useState } from "react";
import { skills, projects } from "./Content";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Dialog from "./Dialog";
import Collapsable from "./Collapsable";

const useStyles = makeStyles(theme => ({
    roundButton: {
        borderRadius: "50%" // Used for profile picture ripple
    },
    imageRipple: {
        fontFamily: "inherit",
        fontSize: "1em",
        padding: 0,
        margin: 0,
        fontWeight: "inherit",
        textTransform: "none"
    },
    expandable: {
        cursor: "pointer",
        "&:hover $expandIcon": {
            opacity: 1
        }
    },
    expandIcon: {
        opacity: 0,
        transition: "all 0.2s"
    }
}));

function Main(props) {
    const classes = useStyles();
    const [dialog, setDialog] = useState({ open: false, tag: "" });

    function getAge() {
        const bDay = new Date("1997-09-28T12:00:00");
        const today = new Date();
        return Math.floor((today - bDay) / 1000 / 60 / 60 / 24 / 365);
    }

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
                        My name is <b>Reko Meriö</b> and I'm {getAge()} years old.
                    </p>
                    <p>
                        I'm studying <b>Information and Communications technology</b> at JAMK
                        University of Applied Sciences.
                    </p>
                    <p>
                        I specialize in Software Development and I am on the 3rd year of my
                        studies.
                    </p>
                    <br />
                    <p>
                        I'm interested in all programming related work, but I would say my
                        skills are mostly based in web development and embedded software.
                    </p>
                    <p>
                        On my freetime I spend my time working on my projects, driving my Saab,
                        playing video games and from time to time I study data structures and
                        algorithms to gain a true mindset of a programmer.
                    </p>
                    <br />
                    <p>
                        I'm looking for a trainee position as software developer for summer of
                        2020, so feel free to send me a message (contact information on bottom
                        of this page)
                    </p>
                </div>
                <div className="general">
                    <div className="flex-column">
                        <div>
                            <Button className={classes.roundButton}>
                                <img src="/images/me.JPG" alt="Reko Meriö" className="round" />
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
                    <Collapsable
                        title="Skills and tools"
                        titleClass="light-cyan-font"
                        timeout={750}
                    >
                        <div className="grid-container">
                            {skills.map((skill, i) => (
                                <div className="grid-item" key={i}>
                                    <h4
                                        className="light-purple-font clickable"
                                        onClick={() =>
                                            setDialog({ open: true, tag: skill.title })
                                        }
                                    >
                                        {skill.title}
                                    </h4>
                                    <p>{skill.description || skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </Collapsable>
                </div>
            </div>
            <div id="projects" className="content deep-dark center">
                <div>
                    <Collapsable
                        title="Featured projects"
                        titleClass="cyan-font"
                        timeout={750}
                    >
                        <ImageGrid
                            overlayColor="dark"
                            fontColor="light-cyan-font"
                            items={projects.filter(project => project.featured)}
                        />
                    </Collapsable>
                </div>
            </div>
            <div className="disclaimer dark center">
                <p>
                    For any questions or good advice, please feel free to send me a message
                    through{" "}
                    <b>
                        <a
                            className="link"
                            href="https://linkedin.com/in/reko-meri%C3%B6-882146186/"
                        >
                            LinkedIn
                        </a>
                    </b>{" "}
                    or email (K9260@student.jamk.fi).
                </p>
                <p>
                    <b>Note:</b> this page uses Google analytics
                </p>
            </div>
            <Dialog
                isOpen={dialog.open}
                tag={dialog.tag}
                close={() => setDialog({ ...dialog, open: false })}
                setTag={setDialog}
            />
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
                            <img className="grid-image" src={item.image} alt={item.title} />
                            <div className={`overlay ${props.overlayColor || "dark"}`}>
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
