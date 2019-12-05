export const skills = [
  { title: "HTML5", description: "" },
  { title: "CSS3", description: "Grid, Flexbox" },
  { title: "JavaScript", description: "React, Vue" },
  { title: "PHP", description: "Laravel framework" },
  { title: "MySQL", description: "" },
  { title: "Google Cloud", description: "Serverless functions" },
  { title: "Firebase", description: "Database, cloud messaging, authentication, hosting" },
  { title: "Docker", description: "Basics" },
  { title: "Git", description: "GitLab & GitHub" },
  { title: "C#", description: "WPF Basics" },
  { title: "C/C++", description: "" },
  { title: "Unity 3D", description: "Game development" },
  { title: "Kotlin", description: "Android" },
  { title: "Embedded software", description: "" },
  { title: "QT", description: "QML" }
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
    title: "Self balancing robot",
    description: "Just a fun project I made to challenge myself",
    image:
      "https://raw.githubusercontent.com/rekomerio/self-balancing-robot/master/img/self-balancing-robot.jpg",
    url: "/project/self-balancing-robot",
    redirect: "https://github.com/rekomerio/self-balancing-robot",
    technologies: ["C/C++", "Embedded software", "Electronics"]
  },
  {
    title: "WIMMA Lab",
    description:
      "Summer course from May to July, where our team built PWA app for virtual queueing",
    longDesc: [
      "WIMMA Lab is optional school course where you can work for in exchange of ECTS points.",
      "Course started on 14.05.2019 and ended on 31.07.2019.",
      "I worked in virtual company called Iotitude as Lead Developer.",
      "Our main objective was to create an app for virtual queueing.",
      "",
      "We built the project using the most latest technologies such as Firebase, Google Cloud Platform, React, PWA, GitLab CI/CD."
    ],
    image: "/images/jonoxi.jpg",
    url: "/project/wimmalab",
    links: [
      {
        url: "https://www.wimmalab.org",
        desc: "WIMMA Lab"
      },
      {
        url: "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/jonoxi-front",
        desc: "JONOXI front-end code"
      },
      {
        url: "https://gitlab.labranet.jamk.fi/wimma-lab-2019/iotitude/jonoxi-back",
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
        url:
          "https://www.jamk.fi/fi/Tutkimus-ja-kehitys/future-factory/wimma-labissa-on-paiskittu-toita-koko-kesa/",
        desc: "JAMK article about our team"
      }
    ],
    technologies: ["JavaScript", "Firebase", "Google Cloud", "HTML5", "CSS3"]
  },
  {
    title: "QT LED App",
    description: "Android app built with QT for controlling WS2812B LED's",
    image: "https://raw.githubusercontent.com/rekomerio/qt-led-app/master/img/app1.jpg",

    url: "/project/qt-led-app",
    redirect: "https://github.com/rekomerio/qt-led-app",
    technologies: ["QT", "QML", "JavaScript", "Android", "Websocket"]
  },
  {
    title: "Software project",
    description:
      "School course on 2nd year where we went through a complete lifecycle of a software project",
    image: "/images/wr.png",
    url: "/project/software-project",
    redirect: "https://gitlab.labranet.jamk.fi/team-g-2019",
    technologies: ["PHP", "Laravel", "JavaScript", "Vue", "MySQL", "Docker", "HTML5", "CSS3"]
  },
  {
    title: "CD Tray plotter",
    description: "Small drawing maching built from two old PC CD trays",
    image:
      "https://raw.githubusercontent.com/rekomerio/cd-tray-plotter/master/images/IMG_20190822_183753.jpg",
    url: "/project/cd-tray-plotter",
    redirect: "https://github.com/rekomerio/cd-tray-plotter",
    technologies: ["Embedded software", "C/C++", "Electronics"]
  },
  {
    title: "Unity 3D Game",
    description: "Game I made as final project for game programming course",
    image: "/images/unity-game.jpg",
    url: "/project/unity-game",
    redirect:
      "https://gitlab.labranet.jamk.fi/rekon-kurssiharkat/ttos0700/blob/pages/Unity3D/Escape/README.md",
    technologies: ["C#", "Unity 3D"]
  },
  {
    title: "RGB LED control panel",
    description: "JavaScript UI and ESP8266 server side code for controlling RGB LED's",
    image:
      "https://raw.githubusercontent.com/rekomerio/LED-ESP-Websocket/master/interface.jpg",
    url: "/project/rgb-led-control",
    redirect: "https://github.com/rekomerio/LED-ESP-Websocket",
    technologies: ["Embedded software", "C/C++", "Electronics", "JavaScript", "HTML5", "CSS3"]
  },

  {
    title: "VU-meter",
    description: "Audio responsive LED lights",
    image: "/images/vu-meter.jpg",
    url: "/project/vu-meter",
    redirect: "https://student.labranet.jamk.fi/~K9260/projects/vu_meter",
    technologies: ["Embedded software", "C/C++", "Electronics"]
  }
];
