import { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "My portfolio",
    descr: "About me. \nJust for fun.",
    url: "https://fallingsakura.top",
    languages: ["react"],
    img: "/project-images/portfolio.jpeg",
  },
  {
    title: "Tech News",
    descr: "Tech News, a website from our project team using next.js and flask api.",
    url: "https://technews.fallingsakura.top",
    img: "/project-images/technews.jpeg",
    commits: 0,
    stars: 0,
    forks: 0,
    languages: ["react", "python"],
  },
  {
    title: "Hexo Blog",
    descr: "My blog using hexo redefine theme.",
    url: "https://vercel.fallingsakura.top",
    languages: ["html", "css", "javascript"]
  },
  {
    title: "Record Calendar",
    descr: "A Calendar that can record your everyday's feeling.",
    url: "https://calendar.fallingsakura.top",
    languages: ["vue", "node.js"]
  },
  /* idea: gird draggable */
]