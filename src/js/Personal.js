import hexa from "../images/hexa.jpg";
import saab from "../images/saab.jpg";
import wr from "../images/wr.png";
import githubrepos from "../images/github-repos.png";
import unitygame from "../images/unity-game.jpg";
import vumeter from "../images/vu-meter.jpg";

export const skills = [
    { title: "HTML5", description: "" },
    { title: "CSS3", description: "Grid, Flexbox" },
    { title: "JavaScript", description: "React, Vue" },
    { title: "PHP", description: "Laravel framework" },
    { title: "MySQL", description: "" },
    { title: "C#", description: "WPF" },
    { title: "C/C++", description: "Embedded software" },
    { title: "Unity 3D", description: "Game development" },
    { title: "Git", description: "GitLab & GitHub" },
    { title: "Google Cloud", description: "Serverless functions, hosting" },
    { title: "Firebase", description: "Database, cloud messaging, authentication" },
    { title: "Docker", description: "Basics" }
];

export const hobbies = [
    {
        title: "Hexacopter",
        description: "Multirotor for aerial photography",
        image: hexa,
        alt: "Hexacopter"
    },
    {
        title: "Saab 9-5",
        description: "2.3t - MY2000",
        image: saab,
        alt: "Saab 9-5"
    }
];

export const projects = [
    {
        title: "Software project",
        description:
            "School course where we went through a complete lifecycle of a software project",
        image: wr,
        url: "https://gitlab.labranet.jamk.fi/team-g-2019",
        alt: ""
    },
    {
        title: "Unity 3D Game",
        description: "Game I made as final project for game programming course",
        image: unitygame,
        url:
            "https://gitlab.labranet.jamk.fi/rekon-kurssiharkat/ttos0700/blob/pages/Unity3D/Escape/README.md",
        alt: ""
    },
    {
        title: "Github repos",
        description: "Simple app for searching through GitHub repositories",
        image: githubrepos,
        url: "https://github.com/K9260/github-repos-search",
        alt: ""
    },
    {
        title: "VU-meter",
        description: "Audio responsive LED lights I have built and programmed",
        image: vumeter,
        url: "https://student.labranet.jamk.fi/~K9260/projects/vu_meter",
        alt: ""
    }
];
