import React, { useState } from "react";
import ProfilePic from "../images/me.jpeg";
import { skills, hobbies } from "./Personal";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "./Dialog";

const useStyles = makeStyles(theme => ({
  roundButton: {
    borderRadius: "50%" //Used for profile picture ripple
  }
}));

function Main(props) {
  const [open, setOpen] = useState(false);
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
            I'm studying <b>Information and Communications technology</b> at JAMK
            University of Applied Sciences.
          </p>
          <p>
            I specialize in Software Developement and have 2 years of school behind me.
          </p>
        </div>
        <div className="general">
          <div className="flex-column">
            <div>
              <Button className={classes.roundButton}>
                <img src={ProfilePic} alt="Reko Meriö" />
              </Button>
            </div>
            <span className="quote">"I put this quote here to look cool" - Reko M</span>
          </div>
        </div>
      </div>
      <div id="tools" className="content dark center">
        <div>
          <h1 className="light-cyan-font">Skills and tools</h1>
          <div className="grid-container">
            {skills.map((skill, i) => (
              <div key={i}>
                <h2 className="light-purple-font">{skill.title}</h2>
                <p>{skill.description || skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="projects" className="content deep-dark center">
        <div>
          <h1 onClick={() => setOpen(true)} className="cyan-font">
            Hobbies
          </h1>
          <Dialog close={() => setOpen(false)} open={open} />
          <ImageGrid items={hobbies} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;

function ImageGrid(props) {
  return (
    <div className="image-grid">
      {props.items.map((item, i) => (
        <div className="grid-item" key={i}>
          <a href={item.link || "#"}>
            <img className="grid-image" src={item.image} alt={item.alt || item.title} />
            <div className="dark overlay">
              <div className="overlay-text">
                <h1 className="light-purple-font">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
