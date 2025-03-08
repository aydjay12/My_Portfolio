import "./about.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
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

const About = () => {
  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="about-me" variants={itemVariants}>
        <h1>About Me</h1>
        <p>
          I’m a dedicated Full Stack Developer with over 3 years of experience crafting robust, scalable web applications. Specializing in both front-end and back-end development, I thrive on turning complex ideas into intuitive, high-performing solutions. With expertise in JavaScript, React, Node.js, Express, and MongoDB, I deliver seamless user experiences backed by efficient server-side logic. Collaborative and detail-oriented, I’m passionate about leveraging modern technologies to solve real-world problems.
        </p>
      </motion.div>

      <motion.div className="experience" variants={itemVariants}>
        <h1>Experience</h1>
        <div className="entry">
          <div className="header">
            <h2>Full Stack Developer</h2>
            <span className="tag">Freelance</span>
          </div>
          <div className="details">
            <h3>Remote • 2022 - Present</h3>
            <ul>
              <li>Built end-to-end web applications using React, Node.js, and MongoDB</li>
              <li>Designed and implemented RESTful APIs for seamless data flow</li>
              <li>Optimized performance and ensured cross-device compatibility</li>
            </ul>
          </div>
        </div>
        <div className="entry">
          <div className="header">
            <h2>Frontend Developer</h2>
            <span className="tag">Contract</span>
          </div>
          <div className="details">
            <h3>Sphiderassweb Limited • June 2024 - January 2025</h3>
            <ul>
              <li>Developed responsive and interactive UIs using React and TypeScript</li>
              <li>Collaborated with designers to implement pixel-perfect designs</li>
              <li>Integrated APIs and optimized front-end performance</li>
            </ul>
          </div>
        </div>
        <div className="entry">
          <div className="header">
            <h2>Web Development Intern</h2>
            <span className="tag">Internship</span>
          </div>
          <div className="details">
            <h3>C.I.T.S, University of Lagos • 2021</h3>
            <ul>
              <li>Developed internal tools using JavaScript and PHP</li>
              <li>Managed database updates and front-end improvements</li>
              <li>Assisted in testing and debugging web applications</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div className="education" variants={itemVariants}>
        <h1>Education</h1>
        <div className="entry">
          <div className="header">
            <h2>B.Sc. in Science and Technology Education</h2>
            <span className="tag">Full-Time</span>
          </div>
          <div className="details">
            <h3>University of Lagos • Graduated 2024</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;