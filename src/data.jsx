import { nanoid } from "nanoid";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />, // MongoDB icon
    text: "Proficient in MongoDB, designing and managing NoSQL databases to handle large datasets efficiently with scalability and flexibility.",
  },
  {
    id: nanoid(),
    title: "Express",
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />, // Express icon
    text: "Skilled in Express.js, building robust server-side applications and APIs with a focus on performance and scalability.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />, // React icon
    text: "Advanced expertise in React, creating efficient, dynamic, and interactive front-end applications using a component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />, // Node.js icon
    text: "Experienced in Node.js, building efficient and scalable back-end systems for high-performance web applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
