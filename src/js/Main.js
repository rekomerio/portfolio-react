import React from 'react';
import ProfilePic from '../images/me.jpeg';
import { skills, projects } from './Personal';

function Main(props) {

    return (
        <React.Fragment>
            <header className={`app-header background-tint ${props.scrolled ? 'dark-tint' : 'light-tint'}`}>
                <div>
                    <h1>Reko Meriö</h1>
                    <p>Software Development student</p>
                </div>
            </header>
            <div id="about" className="content darkest left">
                <div className="general">
                    <h1 className="brighter-font">About me</h1>
                    <p>My name is <b>Reko Meriö</b> and I'm 21 years old.</p>
                    <p>I'm studying <b>Information and Communications technology</b> at JAMK University of Applied Sciences.</p>
                    <p>I specialize in Software Developement and have 2 years of school behind me.</p>
                </div>
                <div className="general">
                    <div className="flex-column">

                        <img src={ProfilePic} alt="Reko Meriö" />
                        <span className="quote">"I put this quote here because it looks cool" - Reko M</span>
                    </div>
                </div>
            </div>
            <div id="tools" className="content dark center">
                <div>
                    <h1 className="darkest-font">My toolpack</h1>
                    <div className="grid-container">
                        {skills.map((skill, i) =>
                            <div key={i}>
                                <h2 className="green-font">{skill.title}</h2>
                                <p>{skill.description || skill.title}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div id="projects" className="content brighter center">
                <div>
                    <h1>Projects</h1>
                    <ImageGrid items={projects} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;

function ImageGrid(props) {
    return (
        <div className="image-grid">
            {props.items.map((item, i) =>
                <div className="grid-item" key={i}>
                    <a href={item.link || '#'}>
                        <img className="grid-image" src={item.image} alt={item.alt || item.title} />
                        <div className="overlay">
                            <div className="overlay-text">
                                <h1 className="green-font">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
}