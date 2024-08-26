// "use client";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { IconType } from "react-icons"; //for Typscript to recognise my FaHouse

// For image carousel use
export const images = [
  { id: 1, src: "/anima1.jpg", name: "Animation" },
  { id: 2, src: "/anima2.jpg", name: "Animation" },
  { id: 3, src: "/anima3.jpg", nmae: "Animation " },
  { id: 4, src: "/anima4.jpg", nmae: "Animation " },
];

// Navigation items defined
interface NavigationItem {
  title: string;
  path: string;
  icon: IconType;
}

// for navbar use
export const navigation: NavigationItem[] = [
  { title: "Home", path: "#home", icon: FaHouse },
  { title: "About", path: "#about", icon: FaUser },
  { title: "Projects", path: "#project", icon: FaBriefcase },
  { title: "Testimonials", path: "#testimonials", icon: FaComment },
  { title: "Contact", path: "#contact", icon: FaAddressCard },
];

// Home information
export const gridItems = [
  {
    id: 1,
    title:
      "I emphasize close client collaboration and transparent communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am flexible with time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for software development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on local team data collection",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to collaborate on a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Project Information
export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    liveLink: "/Tap",
    sourceLink: "https://github.com/gesin1",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    liveLink: "/Tap",
    sourceLink: "https://github.com/gesin1",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    liveLink: "/Tap",
    sourceLink: "https://github.com/gesin1",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    liveLink: "/Tap",
    sourceLink: "https://github.com/gesin1",
  },
];

// Testimonoals informtion
export const testimonials = [
  {
    quote:
      "Working with Gbadegesin was a pleasure. His professionalism, promptness, and dedication to delivering outstanding results were clear throughout our project. His enthusiasm for development truly stands out. If you want to elevate your website and brand, Gbadegesin is the perfect partner.",
    name: "Adekunle Ibrahim",
    title: "Director of Agro Technologies",
  },
  {
    quote:
      "Working with Ridwan was a fantastic experience. His proactive communication, strong work ethic, and dedication to achieving the best outcomes were evident throughout our collaboration. Ridwan is a top-notch professional who truly cares about his craft.",
    name: "Mark Banjo",
    title: "CFO Luxaam",
  },
  {
    quote:
      "Gbadegesin Ridwan is a talented developer with a keen eye for innovation. His ability to solve complex problems and deliver high-quality work on time made him an invaluable asset to our team. I highly recommend Ridwan for any development project.",
    name: "Sandra Smith",
    title: "Senior Dev @ Markwave Tech",
  },
  {
    quote:
      "Collaborating with Gbadegesin Ridwan was a seamless experience. His commitment to quality and attention to detail consistently exceeded my expectations. Ridwan's technical expertise and creative approach made a significant impact on our project's success.",
    name: "Mustapha Olalekan",
    title: "Senior dev @ Gudygo",
  },
  {
    quote:
      "Partnering with Gbadegesin Ridwan was an absolute delight. His genuine passion for development, coupled with his meticulous attention to detail, made our project not just successful, but enjoyable. Ridwan's warm professionalism and creativity shine through in everything he does.",
    name: "Pavic osuman",
    title: "Product Manager",
  },
];

// Companies information
export const companies = [
  {
    id: 1,
    name: "CSS",
    img: "/css.svg",
    nameImg: "/CSSName.svg",
  },
  {
    id: 2,
    name: "HTML5",
    img: "/html.svg",
    nameImg: "/html5Name.svg",
  },
  {
    id: 3,
    name: "js.js",
    img: "/js.svg",
    nameImg: "/JavaScriptName.svg",
  },
  {
    id: 4,
    name: "React.js",
    img: "/reactjs.svg",
    nameImg: "/ReactName.svg",
  },
  {
    id: 5,
    name: "next.js",
    img: "/next.svg",
    nameImg: "/NextName.svg",
  },
  {
    id: 6,
    name: "Tailwind",
    img: "/tailwind.svg",
    nameImg: "/TailwindName.svg",
  },
  {
    id: 7,
    name: "Typescript",
    img: "/typescript.svg",
    nameImg: "/TypescriptName.svg",
  },
  {
    id: 8,
    name: "Vite",
    img: "/vite.svg",
    nameImg: "/ViteName.svg",
  },
  {
    id: 9,
    name: "Visual Studio Code",
    img: "/VisualStudioCode.svg",
    nameImg: "/VisualName.svg",
  },
  {
    id: 10,
    name: "Firebase",
    img: "/firebase.svg",
    nameImg: "FirebaseName.svg",
  },
  {
    id: 11,
    name: "Github",
    img: "/github.svg",
    nameImg: "/GitHubName.svg",
  },
  {
    id: 12,
    name: "Node.js",
    img: "/nodejs.svg",
    nameImg: "/NodeName.svg",
  },
];

// Work experince details
export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "User interface & User experience design ",
    desc: "Designed a comprehensive sports website for both mobile and desktop using Figma, Adobe XD, and Illustrator. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance WebApp Dev Project",
    desc: "Partnered with other developers to create an e-commerce store for both the App Store and a website.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Social media
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Gesin1",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/@ThebussinesMyth",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/gbadegesin-ridwan-o",
  },
];
