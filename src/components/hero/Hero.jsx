import "./hero.scss";
import { motion } from "framer-motion";
import hero from "/src/images/hero.png";
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

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const scrollVariants = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: { x: "100%" },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  };
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 9100,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img src={hero} className="mob-img" variants={textVariants} />
          <motion.h2 variants={textVariants}>AYODEJI OLALEKAN</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              className="latest"
              variants={buttonHover}
              whileHover="hover"
              onClick={scrollToTop}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="cont"
              variants={buttonHover}
              whileHover="hover"
              onClick={scrollToTop2}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src={scroll}
            alt="Scroll down"
            variants={scrollVariants}
            animate="animate"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Full Stack Developer
        </motion.div>
        <motion.div
          className="imageContainer"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={hero} alt="hero" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;