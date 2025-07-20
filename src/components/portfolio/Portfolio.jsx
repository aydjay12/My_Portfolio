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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const items = [
  {
    id: 1,
    title: "Blog Website",
    img: blog,
    href: "https://blog-website-kappa-roan.vercel.app/",
    desc: "A user-friendly React blog full stack app for readers and bloggers with dynamic post rendering and an intuitive layout for an engaging reading experience.",
  },
  {
    id: 2,
    title: "RentUp Website",
    img: rentup,
    href: "https://rent-up-gold.vercel.app/",
    desc: "A full-stack application built with React, Node.js, and MongoDB, featuring authentication, coupon system, Stripe payments, admin dashboard, and user profiles.",
  },
  {
    id: 3,
    title: "E-Commerce App",
    img: ecommerce,
    href: "https://aydjay12.github.io/E-Commerce_App/",
    desc: "A modular React-based e-commerce frontend with real-time updates and responsive design, showcasing component-driven development.",
  },
  {
    id: 4,
    title: "Agency Website",
    img: agency,
    href: "https://aydjay12.github.io/Agency_Website/",
    desc: "A responsive React agency website with modern design elements and dynamic content presentation for enhanced user engagement.",
  },
  {
    id: 5,
    title: "ARUA 2023",
    img: arua,
    href: "https://aydjay12.github.io/ARUA-2023/",
    desc: "A dynamic event website for the University of Lagos with event details, schedules, and registration forms in a modern interface.",
  },
  {
    id: 6,
    title: "Netflix Dub Website",
    img: streamit,
    href: "https://aydjay12.github.io/netflix-dub/",
    desc: "A Netflix clone built with React, featuring user authentication, dynamic movie fetching, and an interactive video player.",
  },
  {
    id: 7,
    title: "Deji's Pizzeria",
    img: pizzeria,
    href: "https://aydjay12.github.io/Deji_Pizzeria/",
    desc: "A visually appealing React pizzeria website with responsive design and component-based architecture.",
  },
  {
    id: 8,
    title: "Fruit Website",
    img: fruit,
    href: "https://aydjay12.github.io/Fruit-Website/",
    desc: "An early project exploring web development basics with HTML, CSS, and JavaScript, focusing on design and user interaction.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.section
      ref={ref}
      variants={itemVariants}
      whileHover="hover"
    >
      <div className="container">
        <motion.div className="wrapper" variants={hoverVariants}>
          <img src={item.img} alt={item.title} />
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const [visibleItems, setVisibleItems] = useState(3);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, items.length));
  };

  return (
    <motion.div
      className="portfolio"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="progress" variants={itemVariants}>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </motion.div>

      {items.slice(0, visibleItems).map((item) => (
        <Single item={item} key={item.id} />
      ))}

      {visibleItems < items.length && (
        <motion.button
          className="loadMore"
          onClick={handleLoadMore}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Load More
          <motion.img
            src={scroll}
            alt="Scroll down"
            className="scrollMore"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Portfolio;