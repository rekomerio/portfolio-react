export const skills = [
    { title: "HTML5", description: "" },
    { title: "CSS3", description: "Grid, Flexbox" },
    { title: "JavaScript", description: "React, Vue" },
    { title: "PHP", description: "Laravel framework" },
    { title: "MySQL", description: "" },
    { title: "C#", description: "WPF" },
    { title: "C/C++", description: "" },
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
        image: { src: "/images/hexa.jpg", alt: "Hexacopter" }
    },
    {
        title: "Saab 9-5",
        description: "2.3t - MY2000",
        image: { src: "/images/saab.jpg", alt: "Saab 9-5" }
    }
];

export const projects = [
    {
        title: "WIMMA Lab",
        description:
            "Summer course from May to July, where our team built PWA app for virtual queueing",
        longDesc: [
            "WIMMA Lab is optional school course where you can work for in exchange of ECTS points.",
            "Course started on 14.05.2019 and ended on 31.07.2019.",
            "I worked in virtual company called Iotitude as Lead Developer.",
            "Our main objective was to create app for virtual queueing.",
            "",
            "We built the project with the most latest technologies such as Firebase, Google Cloud Platform, React, PWA"
        ],
        image: { src: "/images/jonoxi.jpg", alt: "" },
        url: "/project/wimmalab",
        links: [
            {
                url: "https://www.wimmalab.org",
                desc: "WIMMA Lab"
            },
            {
                url:
                    "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/jonoxi-front",
                desc: "JONOXI front-end code"
            },
            {
                url:
                    "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/jonoxi-back",
                desc: "JONOXI back-end code"
            },
            {
                url:
                    "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/core/blob/master/dokumentit/09-tuotokset/kayttoohje.md",
                desc: "JONOXI user manual"
            },
            {
                url: "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/core",
                desc: "JONOXI documentation"
            },
            {
                url: "www.jonoxi.com",
                desc: "JONOXI landing page"
            },
            {
                url:
                    "https://www.jamk.fi/fi/Tutkimus-ja-kehitys/future-factory/wimma-labissa-on-paiskittu-toita-koko-kesa/",
                desc: "JAMK article about our team"
            }
        ]
    },
    {
        title: "Software project",
        description:
            "School course on 2nd year where we went through a complete lifecycle of a software project",
        image: { src: "/images/wr.png", alt: "" },
        url: "/project/software-project",
        redirect: "https://gitlab.labranet.jamk.fi/team-g-2019"
    },
    {
        title: "Unity 3D Game",
        description: "Game I made as final project for game programming course",
        image: { src: "/images/unity-game.jpg", alt: "" },
        url: "/project/unity-game",
        redirect:
            "https://gitlab.labranet.jamk.fi/rekon-kurssiharkat/ttos0700/blob/pages/Unity3D/Escape/README.md"
    },
    {
        title: "Github repos",
        description: "Simple app for searching through GitHub repositories",
        image: { src: "/images/github-repos.png", alt: "" },
        url: "/project/github-repos",
        redirect: "https://github.com/K9260/github-repos-search"
    },
    {
        title: "VU-meter",
        description: "Audio responsive LED lights I have built and programmed",
        image: { src: "/images/vu-meter.jpg", alt: "" },
        url: "/project/vu-meter",
        redirect: "https://student.labranet.jamk.fi/~K9260/projects/vu_meter"
    }
];