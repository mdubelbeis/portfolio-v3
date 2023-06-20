import mtgLifeCounter from "/assets/imgs/project-imgs/mtg-life-counter.png";
import theGathering from "/assets/imgs/project-imgs/the-gathering-bulletin.png";
import sunnySide from "/assets/imgs/project-imgs/sunny-side-agency.png";
import snap from "/assets/imgs/project-imgs/snap.png";
import splitter from "/assets/imgs/project-imgs/splitter.png";
import suite from "/assets/imgs/project-imgs/suite.png";

export interface ProjectProps {
  projects: {
    id: number;
    projectLink: string;
    projectBgImg: string | null;
    projectName: string;
    projectText: string;
    projectTech: string[];
    githubLink: string;
    demoLink?: string;
  }[];
}
export const PROJECTS = [
  {
    id: 1,
    projectLink: null,
    projectBgImg: null,
    projectName: "Behav",
    path: "behav",
    projectText:
      "A web application for job seekers to practice and record their behavioral interview answers and get feedback from other users or use OpenAI's ChatGPT to get an AI generated response.",
    projectTech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Router",
      "Django REST Framework",
      "PostgreSQL",
      "Figma",
    ],
    githubLink: "https://github.com/leodvincci/behav.io",
    demoLink: "https://www.youtube.com/embed/2_Ctan45Nyc",
  },
  {
    id: 2,
    projectLink: null,
    projectBgImg: null,
    projectName: "Life Kitz",
    path: "life-kitz",
    projectText:
      "A swiss army knife of tools to help you manage your everyday.",
    projectTech: [
      "Next",
      "Typescript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Icons",
      "Figma",
      "Django REST Framework",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/mdubelbeis/life-kitz",
    demoLink: "https://www.youtube.com/embed/FrL0x8fDUMc",
  },
  {
    id: 3,
    projectLink: null,
    projectBgImg: null,
    projectName: "Stack Gen",
    path: "stack-gen",
    projectText:
      "A program that generates a frontend framework, backend framework, and database at random for your next project and scaffolds that project out for you to begin developing faster.",
    projectTech: ["Python", "Colorama"],
    githubLink: "https://github.com/mdubelbeis/stack-generator",
    demoLink: "https://www.youtube.com/embed/GhjpcmZ5io8",
  },
  {
    id: 4,
    projectLink: "https://mtg-life-counter-three.vercel.app/",
    projectBgImg: mtgLifeCounter,
    projectName: "MTG Life Counter",
    path: "mtg-life-counter",
    projectText:
      "A web application meant for mobile devices to keep score of life total during Magic: The Gathering gameplay",
    projectTech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Redux-ToolKit",
      "React-Router",
    ],
    githubLink: "https://github.com/mdubelbeis/mtg-life-counter",
  },
  {
    id: 5,
    projectLink: "https://the-gathering-bulletin.vercel.app/",
    projectBgImg: theGathering,
    projectName: "The Gathering Bulletin",
    path: "the-gathering-bulletin",
    projectText:
      "A website that covers all news and resources for Magic: The Gathering players",
    projectTech: ["React", "Typescript", "Tailwind CSS", "React-Router"],
    githubLink: "https://github.com/mdubelbeis/the-gathering-bulletin",
  },
  {
    id: 6,
    projectLink: null,
    projectBgImg: null,
    projectName: "PokeDex",
    path: "poke-dex",
    projectText:
      "A web application that allows users to search for, capture, and view information about Pokemon.",
    projectTech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Router",
      "Vitest",
    ],
    githubLink: "https://github.com/mdubelbeis/poke-dex",
    demoLink: "https://www.youtube.com/embed/bcODFshzq1E",
  },
  {
    id: 7,
    projectLink: "https://sunnyside-agency-landing-page-kappa.vercel.app/",
    projectBgImg: sunnySide,
    projectName: "Sunny Side Agency",
    path: "sunny-side-agency",
    projectText: "A Frontendmentor.io web challenge",
    projectTech: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/mdubelbeis/sunnyside-agency-landing-page",
  },
  {
    id: 8,
    projectLink: "https://intro-section-db-menu.vercel.app/",
    projectBgImg: snap,
    projectName: "Snap",
    path: "snap",
    projectText: "A Frontendmentor.io web challenge",
    projectTech: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/mdubelbeis/intro-section-db-menu",
  },
  {
    id: 9,
    projectLink: "https://tip-calculator-rose-eight.vercel.app/",
    projectBgImg: splitter,
    projectName: "Splitter",
    path: "splitter",
    projectText: "A Frontendmentor.io web challenge",
    projectTech: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/mdubelbeis/tip-calculator",
  },
  {
    id: 10,
    projectLink: "https://suite-landing-page-one.vercel.app/",
    projectBgImg: suite,
    projectName: "Suite",
    path: "suite",
    projectText: "A Frontendmentor.io web challenge",
    projectTech: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/mdubelbeis/suite-landing-page",
  },
];
