import { CiStar, CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { GoGoal, GoProjectSymlink } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";

const projects = [
  {
    id: "1",
    image: "/assets/images/portfolio/laptop1.png",
    title: "portfolio",
    technology: [
      "Html",
      "Tailwind css",
      "React",
      "React-Router-Dom",
      "Framer Motion",
      "Vanilla Tilt Js",
      "React Icons",
    ],
    gitlink: "https://github.com/Syed-Tajamul/MyPortfolio",
    description:
      "Welcome to my personal portfolio, a meticulously crafted showcase that embodies the essence of modern web development. Powered by React JS and Tailwind CSS, this dynamic platform seamlessly blends responsiveness with elegance. With a focus on user experience, I've integrated features such as dark mode and smooth animations to create an immersive journey for visitors. As you navigate through the site, you'll encounter a diverse array of projects and skills, each meticulously curated to highlight my expertise and passion for web development. From interactive elements to seamless transitions, every aspect of this portfolio reflects a commitment to excellence and professionalism. Join me on this journey as we explore the intersection of innovation and creativity in the digital landscape.",
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
    gitlink: "https://github.com/Syed-Tajamul/React-Fast-Pizza",
    technology: ["React", "Redux js", "Tailwind css", "React-Router-Dom"],
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
    gitlink: "https://github.com/Syed-Tajamul/Nike_React-",
    technology: ["React", "Tailwind css", "Framer Motion"],
    description:
      "Introducing the Nike Project, a sleek and dynamic web application crafted with React. Featuring smooth animations powered by Framer Motion, this project showcases the best of modern web development. Dive into an engaging and interactive experience that highlights my ability to create visually stunning and highly functional web applications",
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
    gitlink: "https://github.com/Syed-Tajamul/React-worldwise",
    technology: ["React", "React-Router-Dom", "Context Api", "Leaflet-Library"],
    description:
      "WorldWise is a beautifully crafted web application that allows users to document and share their travel experiences. Built with React, this app provides a seamless and interactive user experience. After logging in, users can explore an interactive map powered by the Leaflet library. By clicking on a location they have visited, users can place a marker on the map. A popup box then allows them to input the date of their visit and share their experiences about the location. The app supports adding new locations, editing entries, and deleting markers, all while ensuring smooth navigation with React Router DOM and efficient state management with Context API. Enjoy documenting your travels with this intuitive and visually appealing application.",
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
    title: "React Quiz",
    gitlink: "https://github.com/Syed-Tajamul/react-quiz",
    technology: ["React", "UseReducer", "Context Api"],
    description:
      "React Quiz is an engaging quiz application built with React and Context API, primarily utilizing the useReducer hook for state management. Featuring a beautiful and intuitive design, this app allows users to start a quiz where a timer begins immediately, adding an element of challenge. The application tracks the score and shows a question progress bar, providing a seamless quiz-taking experience. At the end of the quiz, users receive their final results, making it an enjoyable and efficient way to test and improve knowledge.",
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
    gitlink: "https://github.com/Syed-Tajamul/usePopcorn",
    technology: ["Html", "Css", "React", "UseEffect"],
    description:
      "Welcome to UsePopcorn, a sophisticated web application meticulously crafted with React, designed to enhance your movie-watching experience. Seamlessly navigate through a vast movie database with a user-friendly search bar that enables you to find your favorite movies with ease. Once you've found a movie of interest, click on it to reveal a detailed description, providing valuable insights and information But that's just the beginning. UsePopcorn goes beyond basic functionality by offering advanced features such as the ability to add movies to your, Watch-Later  list, ensuring you never miss a must-see film. What's more, our innovative rating system, featuring beautiful star components, allows you to express your opinion and share your feedback with others.With UsePopcorn, the possibilities are endless. Add as many movies as you like, effortlessly manage your watchlist, and remove entries with just a click. Whether you're a casual moviegoer or a dedicated cinephile, UsePopcorn is your ultimate companion for discovering, organizing, and enjoying movies like never before",
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
    technology: ["Html", "Css", "React"],
    gitlink: "https://github.com/Syed-Tajamul",
    description:
      "Welcome to the Atomic Blog, a minimalist yet powerful web app crafted with React, simplifying the blogging experience for readers and writers alike. Dive into a curated collection of atomic posts, each meticulously crafted to deliver maximum impact. Effortlessly search and explore content using our intuitive search bar, ensuring you find what you're looking for with ease. Immerse yourself in a captivating reading experience, exploring thought-provoking musings and informative articles. Engage with interactive features like adding posts to your watch-Later list and rating them using our sleek star rating system, offering valuable feedback to authors and readers. Create and share your thoughts effortlessly by composing your post title and body, seamlessly becoming part of the Atomic Blog universe with just a click.",
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
    gitlink: "https://github.com/Syed-Tajamul/EAT-n-SPLIT",
    technology: ["Html", "Css", "React"],
    description:
      "Have you ever been out to eat with friends and found yourself in that awkward moment of deciding who should foot the bill? Say goodbye to those uncomfortable situations with Eat n Split! This user-friendly web app, created with React, takes the stress out of splitting bills among friends. Just add your friends, and Eat n Split will show you exactly who owes what. So the next time you're dining out with friends, you can focus on enjoying the meal instead of worrying about who pays the bill.",
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
    link: "/skills",
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
const education = [
  {
    image: "/assets/icons/online-education.png",
    title: "Masters in computer applications",
    institute:
      " Islamic University Of Science And Technology Awantipora,Pulwama",
    duration: "2020-2023",
  },
  {
    image: "/assets/icons/bachelor.png",
    title: "Bachelors in computer applications",
    institute: "Masters Institute Of Information And Technology ,Pulwama",
    duration: " 2016-2020",
  },
];
export { education };
