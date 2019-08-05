import React, { useEffect } from "react";
import { projects } from "./Content";
import Button from "@material-ui/core/Button";

export default function Project() {
    const project = projects.filter(
        // Pick out the project with corresponding url
        element => element.url === window.location.pathname
    )[0];

    const redirect = project && project.redirect; // If project exists, returns redirect, else false

    useEffect(() => {
        if (redirect) window.location.assign(redirect); // Redirect to another page, if redirect has been defined
    });
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 100); // Scroll to top after 100ms
    }, []);

    if (project && !redirect) {
        return (
            <div className="project">
                <div className="content deep-dark left">
                    <div className="general">
                        <h2 className="purple-font">{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div className="general">
                        <div className="frame dark">
                            <Button>
                                <img
                                    src={project.image.src}
                                    alt={project.image.alt || project.description}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="dark content">
                    <div className="general">
                        {project.longDesc.map((desc, i) =>
                            desc ? <p key={i}>{desc}</p> : <br key={i} />
                        )}
                    </div>
                    <div className="links general frame light-dark">
                        <h3 className="cyan-font">Links</h3>
                        <ul>
                            {project.links.map(link => (
                                <li key={link.url}>
                                    <a className="link" href={link.url}>
                                        {link.desc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div id="about" className="content deep-dark left">
                <div className="general">
                    <h1 className="purple-font">Nothing here</h1>
                </div>
            </div>
        );
    }
}
