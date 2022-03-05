export const PROJECTS = [
  {
    type: "FREELANCE",
    slug: "iseplive",
    image: "/images/iseplive.png",
    title: "ISEPLive",
    subtitle: "Club website released in late 2017",
    description:
      '<p>ISEPLive is an ISEP\'s club. I was asked to built this website in collaboration with JuniorISEP. Following ISEPLive\'s specifications, I built the frontend using <span class="accent">ReactJS</span> and the backend with <span class="accent">Spring Boot</span> as well as a <span class="accent">MySQL</span> database.</p>',
    technologies: ["react", "spring", "mysql"],
    url: "https://iseplive.fr",
    source: {
      type: "github",
      url: "https://github.com/juniorisep/IsepLive",
    },
  },
  {
    type: "SCHOOL",
    slug: "gcfa",
    image: "/images/gcfa.png",
    title: "GCFA",
    subtitle: "School project in 2017",
    description:
      "<p>GCFA is a web app used by ISEP apprentices to upload documents related to the apprenticeship. The goal of this project was to build a new version of this app. I build it with 4 other people.</p>",
    technologies: ["react", "spring", "mysql"],
    url: null,
    source: {
      type: "github",
      url: "https://github.com/Zawartek/Kraken",
    },
  },
  {
    type: "FREELANCE",
    slug: "espace-consultant-juniorisep",
    image: "/images/espace-consultant-juniorisep.png",
    title: "Espace Consultants",
    subtitle: "Junior ISEP project in 2017",
    description:
      "<p>I built the frontend of the web application used by consultants of JuniorIsep using Angular 2. This website is used for Project Managers to publish projects that consultants can apply to. It is also used to manage courses for consultants and a way for PM to search for consultants based on their skills</p>",
    technologies: ["angular2", "sass"],
    url: null,
    source: null,
  },
  {
    type: "FREELANCE",
    slug: "pickandguess",
    image: "/images/pickandguess.jpg",
    title: "Pick&Guess",
    subtitle: "Junior ISEP project in late 2016",
    description:
      "<p>Pick&Guess is an iOS application on which you can find hotels by guessing the room's prices.</p><p>It is also an app that you can use to promote your hotel if you are a manager.</p>",
    technologies: ["swift", "react", "nodejs", "spring", "mysql"],
    url: null,
    source: null,
  },
  {
    type: "SCHOOL",
    slug: "dynamo",
    image: "/images/dynamo.png",
    title: "Dynamo",
    subtitle: "School project in 2016",
    description:
      "<p>Dynamo is a fake web app to connect with people and do sport together.</p>",
    technologies: ["php", "mysql"],
    url: null,
    source: {
      type: "github",
      url: "https://github.com/GuillaumeCa/Dynamo",
    },
  },
  {
    type: "SCHOOL",
    slug: "dotsnboxes",
    image: "/images/dotsnboxes.png",
    title: "Dots and Boxes",
    subtitle: "School java project in late 2015",
    description:
      '<p>I implemented the game Dots and Boxes using the<span class="accent">Java</span> language and the StdDraw library. You can play against another player or against an AI with 3 levels of difficulty. The game has a console and a graphical UI.</p>',
    technologies: ["java"],
    url: null,
    source: {
      type: "github",
      url: "https://github.com/GuillaumeCa/DotsnBoxes",
    },
  },
  {
    type: "PERSONAL",
    slug: "freeroom",
    image: "/images/freeroom.png",
    title: "FreeRoom",
    subtitle: "Personal project started in late 2015",
    description:
      "<p>FreeRoom is a website that allows student from ISEP to find free rooms.</p>",
    technologies: ["react", "go", "mongodb"],
    url: "http://free-room-isep.ddns.net",
    source: {
      type: "github",
      url: "https://github.com/GuillaumeCa/freeroom4",
    },
  },
];
