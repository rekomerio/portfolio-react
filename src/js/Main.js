import React from 'react';
import ProfilePic from '../images/me.jpeg';

function Main(props) {

    const skills = {
        title: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL',
            'C#',
            'C/C++',
            'Unity 3D',
            'Git',
            'Google Cloud',
            'Firebase',
        ],
        description: [
            '',
            'Grid, Flexbox',
            'React & Vue',
            'Laravel framework',
            '',
            '',
            '',
            '',
            'GitLab & GitHub',
            'Serverless functions',
            'DB, Authentication',
        ]
    }
    return (
        <React.Fragment>
            <header className={`app-header background-tint ${props.scrolled ? 'dark-tint' : 'light-tint'}`}>
                <div>
                    <h1>Reko Meriö</h1>
                    <p>Software Development student</p>
                </div>
            </header>
            <div className="content darkest left">
                <div className="general">
                    <h1 className="brighter-font">About me</h1>
                    <p>My name is <b>Reko Meriö</b> and I'm 21 years old.</p>
                    <p>I'm studying <b>Information and Communications technology</b> at JAMK University of Applied Sciences.</p>
                    <p>I specialize in Software Developement and have 2 years of school behind me.</p>
                </div>
                <div className="general">
                    <img src={ProfilePic} alt="Reko Meriö" />
                </div>
            </div>
            <div className="content dark center">
                <div>
                    <h1 className="darkest-font">Skills and tools</h1>
                    <div className="grid-container">
                        {skills.title.map((title, i) =>
                            <div key={i}>
                                <h2 className="green-font">{title}</h2>
                                <p>{skills.description[i] || title}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="content brighter center"></div>
        </React.Fragment>
    );
}


export default Main;