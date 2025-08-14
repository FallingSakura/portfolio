import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "My portfolio",
    descr: "About me. \nJust for fun.",
    url: "https://fallingsakura.top",
    languages: ["react", "typescript"],
    img: "/project-images/portfolio.jpeg",
  },
  {
    title: "Tech News",
    descr:
      "Tech News, a website from our project team using next.js and flask api.",
    url: "https://technews.fallingsakura.top",
    img: "/project-images/tech-news.jpeg",
    commits: 0,
    stars: 0,
    forks: 0,
    languages: ["next.js", "typescript", "python"],
  },
  {
    title: "Hexo Blog",
    descr: "My blog using hexo redefine theme.",
    url: "https://vercel.fallingsakura.top",
    languages: ["html", "css", "javascript"],
    img: "/project-images/hexo-blog.jpeg",
  },
  {
    title: "Record Calendar",
    descr: "A Calendar that can record your everyday's feeling.",
    url: "https://calendar.fallingsakura.top",
    languages: ["vue", "node.js"],
    img: "/project-images/calendar.jpeg",
  },
  {
    title: "Naka Chat",
    descr: "Group chat with AI agents. Brianstorm, werewolf, COC, and more.",
    url: "https://naka.chat",
    languages: ["next.js", "typescript"],
    img: "/project-images/naka-chat.jpeg",
  },
  /* idea: gird draggable */
];
