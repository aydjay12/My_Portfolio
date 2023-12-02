import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <motion.div
        className="about-me"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About me</h1>
        <p>
          Highly skilled and passionate Front End Developer with over 2 years of
          experience in creating and implementing innovative user interfaces and
          interactive web applications. Proficient in translating design
          mock-ups and wireframes into responsive and pixel-perfect web
          experiences. Adept at collaborating with cross-functional teams to
          deliver top-notch products that exceed client expectations. Committed
          to staying updated with the latest web development trends and best
          practices to continuously improve development efficiency and user
          experience. Excels in HTML, CSS, JavaScript, and various modern
          front-end frameworks, including React and Angular.
        </p>
      </motion.div>
      <motion.div
        className="experience"
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
      >
        <h1>Work Experience</h1>
        <div className="junior">
          <div className="row-1">
            <h2>Junior Web Developer</h2>
            <p>Remote</p>
          </div>
          <div className="row-2">
            <h6>Freelance</h6>
            <ul></ul>
          </div>
        </div>
        <div className="web">
          <div className="row-1">
            <h2>Web Development Intern</h2>
            <p>Internship</p>
          </div>
          <div className="row-2">
            <h6>
              Centre For Information Technology and Systems(C.I.T.S), UNILAG
            </h6>
            <ul></ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="education"
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
      >
        <h1>Education</h1>
        <div className="bachelor">
          <div className="row-1">
            <h2>Bachelor in Science and Technology Education</h2>
            <p>Full Time</p>
          </div>
          <div className="row-2">
            <h6>University of Lagos</h6>
            <ul></ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
