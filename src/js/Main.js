import React from 'react';

function Main() {
    let skills = {
        title: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'C#',
            'C/C++'
        ],
        description: [
            'Markup language',
            'Grid, Flexbox',
            'React & Vue',
            'Laravel framework',
            'C#',
            'C++'
        ]
    }
    return (
        <React.Fragment>
            <header className="app-header background-tint">
                <div>
                    <h1>Reko Meriö</h1>
                    <p>Software Development student</p>
                </div>
            </header>
            <div className="content darkest">
                <div>
                    <h1 className="brighter-font">About me</h1>
                    <p>My name is <b>Reko Meriö</b> and I'm 21 years old.</p>
                    <p>I'm studying <b>Information and Communications technology</b> at JAMK University of Applied Sciences.</p>
                    <p>I specialize in Software Developement and have 2 years of school behind me.</p>
                </div>
            </div>
            <div className="content dark">
                <div>
                    <h1 className="darkest-font">Skills</h1>
                    <div className="grid-container">
                        {skills.title.map((title, i) =>
                            <div>
                                <h2 className="brighter-font">{title}</h2>
                                <p>{skills.description[i] || title}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;