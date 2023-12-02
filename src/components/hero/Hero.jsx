import "./hero.scss";
import { motion } from "framer-motion";

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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 9100,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AYODEJI OLALEKAN</motion.h2>
          <motion.h1 variants={textVariants}>Front-end Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              className="latest"
              variants={textVariants}
              onClick={scrollToTop}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="cont"
              onClick={scrollToTop2}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          ></motion.img>
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="slidingTextContainer"
        >
          Front-end Web Developer
        </motion.div>
        <div className="imageContainer">
          <img src="/hero.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
