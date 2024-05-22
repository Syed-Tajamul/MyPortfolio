import { CiStar, CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { GoGoal, GoProjectSymlink } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";

const projects = [
  {
    id: "1",
    image: "/assets/images/portfolio/laptop1.png",
    title: "portfolio",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/portfolio/laptop1.png",
        image2: "/assets/images/portfolio/laptop2.png",
        image3: "/assets/images/portfolio/laptop3.png",
        image4: "/assets/images/portfolio/laptop4.png",
      },
    ],
  },
  {
    id: "2",
    image: "/assets/images/Fast Pizza/laptop1.png",
    title: "Fast Pizza",
    description:
      "Crafted captivating UI with Tailwind CSS for seamless user experiences across devices. Implemented smooth navigation via React Router DOM and managed global state efficiently with Redux.js. Leveraged dynamic data rendering with React hooks and personalized services with geolocation integration. Optimized menu component rendering with React Router DOM loader functions.",
    carousel: [
      {
        image1: "/assets/images/Fast Pizza/laptop1.png",
        image2: "/assets/images/Fast Pizza/laptop2.png",
        image3: "/assets/images/Fast Pizza/laptop3.png",
        image4: "/assets/images/Fast Pizza/laptop4.png",
      },
    ],
  },
  {
    id: "3",
    image: "/assets/images/nike/laptop1.png",
    title: "nike",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/nike/laptop1.png",
        image2: "/assets/images/nike/laptop2.png",
        image3: "/assets/images/nike/laptop3.png",
        image4: "/assets/images/nike/laptop4.png",
      },
    ],
  },
  {
    id: "4",
    image: "/assets/images/worldwise/laptop1.png",
    title: "worldwise",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/worldwise/laptop1.png",
        image2: "/assets/images/worldwise/laptop2.png",
        image3: "/assets/images/worldwise/laptop3.png",
        image4: "/assets/images/worldwise/laptop4.png",
      },
    ],
  },
  {
    id: "5",
    image: "/assets/images/quiz/laptop1.png",
    title: "quiz",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/quiz/laptop1.png",
        image2: "/assets/images/quiz/laptop2.png",
        image3: "/assets/images/quiz/laptop3.png",
        image4: "/assets/images/quiz/laptop4.png",
      },
    ],
  },
  {
    id: "6",
    image: "/assets/images/UsePopcorn/laptop1.png",
    title: "UsePopcorn",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/UsePopcorn/laptop1.png",
        image2: "/assets/images/UsePopcorn/laptop2.png",
        image3: "/assets/images/UsePopcorn/laptop3.png",
        image4: "/assets/images/UsePopcorn/laptop4.png",
      },
    ],
  },
  {
    id: "7",
    image: "/assets/images/The Atomic Blog/laptop1.png",
    title: "The Atomic Blog",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/The Atomic Blog/laptop1.png",
        image2: "/assets/images/The Atomic Blog/laptop2.png",
        image3: "/assets/images/The Atomic Blog/laptop3.png",
        image4: "/assets/images/The Atomic Blog/laptop4.png",
      },
    ],
  },
  {
    id: "8",
    image: "/assets/images/eatnsplit/laptop1.png",
    title: "eatnsplit",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel: [
      {
        image1: "/assets/images/eatnsplit/laptop1.png",
        image2: "/assets/images/eatnsplit/laptop2.png",
        image3: "/assets/images/eatnsplit/laptop3.png",
        image4: "/assets/images/eatnsplit/laptop4.png",
      },
    ],
  },
];
export { projects };
const questions = [
  {
    id: "1",
    question: "Who am I professionally ?",
    answer:
      "I'm Syed Tajamul Khursheed, a passionate Front-End Developer from Pulwama, Jammu & Kashmir, India. ",
    logo: CiUser,
  },

  {
    id: "2",
    question: "What's My Education ?",
    answer:
      "I hold a Bachelor's degree in Computer Applications, which I completed in 2020, followed by the successful attainment of a Master's degree in the same field in 2023",
    logo: MdCastForEducation,
  },
  {
    id: "3",
    question: "What Are My Skills & Strengths ?",
    answer:
      "My expertise encompasses HTML5, CSS3, JavaScript (ES6), React.js, & Tailwind CSS, with a touch of Framer Motion. ",
    tag: "skills",
    link: "/whatIDo",
    logo: GiSkills,
  },
  {
    id: "4",
    question: "Do I Have Any Projects ?",
    answer:
      "I've crafted various projects that showcase my skills. Explore them further by clicking on the link below.",
    tag: "projects",
    link: "/whatIDid",
    logo: GoProjectSymlink,
  },
  {
    id: "5",
    question: "What Are My Career Goals & Aspirations ?",
    answer:
      " My aspiration as a fresher is to immerse myself in a vibrant professional environment, where I can learn, innovate, and contribute positively.",
    logo: GoGoal,
  },

  {
    id: "6",
    question: "What's My Journey So Far ?",
    answer:
      "As a fresher, I embark on a journey fueled by enthusiasm, dedication, and a thirst for knowledge, bringing a fresh perspective and commitment to excellence to every project.",
    logo: CiStar,
  },
];
export { questions };
const certfications = [
  {
    id: "1",
    title: "The complete React js Bootcamp",
    instructor: "John Schmedtmann",
    completionDate: "Completion data: 12-04-2023",
    platform: "Udemy",
    link: " certification Link",
  },
  {
    id: "2",
    title: " The complete Web Development Bootcamp",
    instructor: "Dr Angela Yu",
    completionDate: "    Completion data: 20-06-2022",
    platform: "Udemy",
    link: " certification Link",
  },
  {
    id: "3",
    title: "React js bootcamp",
    instructor: "Freecodecamp",
    completionDate: "Completion data: 5-04-2024",
    platform: "Freecodecamp",
    link: " certification Link",
  },
  {
    id: "4",
    title: "      Complete Node js Bootcamp",
    instructor: "John Smigla",
    completionDate: "currently pursuing",
    platform: "Udemy",
    link: " certification Link",
  },
];
export { certfications };
const skills = [
  {
    id: "1",
    image: "/assets/icons/html.png",
    title: "HTML5",
    description:
      "Empowering the web's core – HTML5. Expert in crafting structured, accessible, and captivating web experiences",
    skillLevel: "⭐⭐⭐⭐",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "2",
    image: "/assets/icons/css.png",
    title: "CSS3",
    description:
      "Crafting captivating designs with CSS3. Skilled in building responsive layouts and enhancing user interfaces with modern styling techniques.",
    skillLevel: "⭐⭐⭐",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "3",
    image: "/assets/icons/java-script.png",
    title: "JavaScript ES6",
    description:
      "Harnessing the power of JavaScript ES6 to create dynamic and interactive web applications. Experienced in working with modern JavaScript frameworks.",
    skillLevel: "⭐⭐⭐⭐",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "4",
    image: "/assets/icons/library.png",
    title: "React.js",
    description:
      "Building scalable and maintainable user interfaces with React.js. Proficient in state management, component composition, and modern React ecosystem tools.",
    skillLevel: "⭐⭐⭐⭐",
    link: "https://react.dev/",
  },
  {
    id: "5",
    image: "/assets/icons/tailwindcss.jpg",
    title: "Tailwind CSS",
    description:
      "Utilizing Tailwind CSS for rapid and responsive UI development. Expertise in crafting utility-first designs and custom component styling.",
    skillLevel: "⭐⭐⭐⭐",
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    id: "6",
    image: "/assets/icons/framermotion.jpg",
    title: "React Framer Motion",
    description:
      "Animating React components with Framer Motion. Skilled in creating delightful user interactions and seamless transitions.",
    skillLevel: "⭐⭐⭐",
    link: "https://www.framer.com/motion/",
  },
  {
    id: "7",
    image: "/assets/icons/github.png",
    title: "Version Control (Git)",
    description:
      "Leveraging Git for version control and collaboration. Experienced in managing code repositories, branching strategies, and pull requests.",
    skillLevel: "⭐⭐⭐",
    link: "https://docs.github.com/en",
  },
  {
    id: "8",
    image: "/assets/icons/project-launch.png",
    title: "Deployment (Vercel)",
    description:
      "Deploying web applications with Vercel. Proficient in continuous deployment workflows, environment variables management, and scalability.",
    skillLevel: "⭐⭐⭐",
    link: "https://vercel.com/docs",
  },
];
export { skills };
