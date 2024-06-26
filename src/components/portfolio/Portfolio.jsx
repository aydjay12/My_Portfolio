import { useState, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ecommerce from "/src/images/ecommerce.png";
import rentup from "/src/images/rentup.png";
import fitclub from "/src/images/fitclub.png";
import blog from "/src/images/blog.png";
import agency from "/src/images/agency.png";
import arua from "/src/images/arua.png";
import streamit from "/src/images/streamit.png";
import pizzeria from "/src/images/pizzeria.png";
import fruit from "/src/images/fruit.png";
import scroll from "/src/images/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const items = [
  {
    id: 1,
    title: "E-Commerce App",
    img: ecommerce,
    href: "https://aydjay12.github.io/E-Commerce_App/",
    desc: "Engineered a modular React.js e-commerce frontend, facilitating an engaging shopping experience with real-time updates and responsive design. Leveraged component-based architecture for flexibility and efficient management.",
  },
  {
    id: 2,
    title: "Real Estate Website",
    img: rentup,
    href: "https://aydjay12.github.io/Real_Estate_Website/",
    desc: "Designed a sleek React.js frontend for a real estate website, featuring dynamic property listings and interactive search functionalities for an optimized user experience.",
  },
  {
    id: 3,
    title: "FitClub Gym Website",
    img: fitclub,
    href: "https://aydjay12.github.io/FitClub/",
    desc: "Welcome to the FitClub Gym Website Demo, a showcase of my frontend development skills using React, Sass, and Vite. From sleek design elements to seamless navigation, this demo highlights my expertise in creating dynamic and responsive web applications.",
  },
  {
    id: 4,
    title: "Blog Website",
    img: blog,
    href: "https://aydjay12.github.io/Blog_Website/",
    desc: "Crafted a user-friendly React.js blog frontend with an intuitive layout and dynamic post rendering for an engaging reading experience.",
  },
  {
    id: 5,
    title: "Agency Website",
    img: agency,
    href: "https://aydjay12.github.io/Agency_Website/",
    desc: "Developed a sleek and responsive React.js frontend for an agency website. Incorporated modern design elements, seamless navigation, and dynamic content presentation to enhance user engagement.",
  },
  {
    id: 6,
    title: "ARUA 2023",
    img: arua,
    href: "https://aydjay12.github.io/ARUA-2023/",
    desc: "Designed and developed a dynamic event website for the University of Lagos, showcasing a modern and engaging interface. Implemented features such as event details, schedule, and registration forms, ensuring seamless navigation and a user-friendly experience.",
  },
  {
    id: 7,
    title: "Netflix Dub Website",
    img: streamit,
    href: "https://aydjay12.github.io/netflix-dub/",
    desc: "Developed a Netflix clone website using React.js, offering a visually immersive and responsive streaming experience. Implemented key features such as user authentication, dynamic movie fetching, and an interactive video player to replicate the essence of the original platform.",
  },
  {
    id: 8,
    title: "Deji's Pizzeria",
    img: pizzeria,
    href: "https://aydjay12.github.io/Deji_Pizzeria/",
    desc: "Crafted a mouthwatering Pizzeria website sample using React.js, featuring an appetizing design and seamless navigation. Leveraged React components for a responsive frontend, delivering a visually appealing and delicious representation of the pizzeria's offerings.",
  },
  {
    id: 9,
    title: "Fruit Website",
    img: fruit,
    href: "https://aydjay12.github.io/Fruit-Website/",
    desc: "Embarked on my initial project, an amateurish fruit website, as a foundational exploration into web development. Despite evident flaws, this project served as a crucial learning experience in coding, design, and user interaction.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 4], ["0%", "-300%"]);

  return (
    <section>
      <div className="container">
        <div className="wrapper" ref={ref}>
          <img src={item.img} alt="" />
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const [visibleItems, setVisibleItems] = useState(2);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.slice(0, visibleItems).map((item) => (
        <Single item={item} key={item.id}></Single>
      ))}
      {visibleItems < items.length && (
        <button className="loadMore" onClick={handleLoadMore}>
          See More
          <motion.img
            className="scrollMore"
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          ></motion.img>
        </button>
      )}
    </div>
  );
};
export default Portfolio;
