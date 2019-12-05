import React, { useEffect } from "react";
import { projects } from "./Content";
import Button from "@material-ui/core/Button";
import Redirect from "./Redirect";
import NotFound from "./NotFound";

export default function Project() {
  const project = projects.filter(
    // Pick out the project with corresponding url
    element => element.url === window.location.hash.slice(1)
  )[0];

  const redirect = project && project.redirect; // Check if the project exists

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100); // Scroll to top
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
            <div className="frame shadow dark">
              <Button>
                <img src={project.image} alt={project.title} />
              </Button>
            </div>
          </div>
        </div>
        <div className="dark content">
          <div className="general">
            {project.longDesc.map((text, i) =>
              text ? <p key={i}>{text}</p> : <br key={i} />
            )}
          </div>
          <div className="links general shadow light-dark">
            <h3 className="cyan-font">Links</h3>
            <hr />
            <ul>
              {project.links.map(link => (
                <li key={link.url}>
                  <a className="link" href={link.url}>
                    {link.desc}
                  </a>
                </li>
              ))}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    );
  } else if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return <NotFound />;
  }
}
