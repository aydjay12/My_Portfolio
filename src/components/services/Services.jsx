import "./services.scss";
import { motion } from "framer-motion";
import people from "/src/images/people.webp";

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
    backgroundColor: "#e0e0e0",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="textContainer" variants={itemVariants}>
        <p>
          Building seamless, scalable solutions
          <br /> for modern web challenges
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={itemVariants}>
        <div className="title">
          <img src={people} alt="Team collaboration" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Full Stack</motion.b>{" "}
            Expertise
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Success
          </h1>
          <button>Explore My Skills</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={itemVariants}>
        <motion.div className="box desktop-hover" whileHover="hover" variants={hoverVariants}>
          <h2>Frontend</h2>
          <p>
            Crafting responsive, user-friendly interfaces with React, HTML, CSS, and JavaScript. I focus on pixel-perfect designs and smooth interactions.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div className="box desktop-hover" whileHover="hover" variants={hoverVariants}>
          <h2>Backend</h2>
          <p>
            Building robust server-side solutions with Node.js and Express. I ensure efficient logic and secure application performance.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div className="box desktop-hover" whileHover="hover" variants={hoverVariants}>
          <h2>Database Management</h2>
          <p>
            Designing and managing databases with MongoDB and SQL. I optimize data storage and retrieval for scalability.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div className="box desktop-hover" whileHover="hover" variants={hoverVariants}>
          <h2>API Development</h2>
          <p>
            Creating RESTful APIs for seamless communication between systems. I prioritize security and efficiency in data exchange.
          </p>
          <button>Advanced</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;