/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import people from "/src/images/people.webp";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div
        className="textContainer"
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          I focus on incorporating beautiful designs
          <br></br> in a seamless manner
        </p>
        <hr></hr>
      </motion.div>
      <motion.div
        className="titleContainer"
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Designs
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I USE?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer mobile"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3 }}
      >
        <div className="one">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>HTML</h2>
            <p>
              Having dedicated two years to mastering HTML, I've evolved into an
              advanced user with a deep understanding of its intricacies.
              Proficient in crafting semantic and accessible markup, I excel in
              structuring web content for optimal user experience and search
              engine visibility. From complex forms to responsive layouts, my
              expertise in HTML empowers me to create efficient,
              standards-compliant, and visually compelling web applications.
            </p>
            <button>Advanced</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>CSS</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              minus tenetur impedit cupiditate. Laboriosam quam tempore facere
              porro dolores sed vel saepe? Incidunt, ea? Nam, enim! Ut maiores
              debitis aliquid!
            </p>
            <button>Advanced</button>
          </motion.div>
        </div>
        <div className="two">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>JAVASCRIPT</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              minus tenetur impedit cupiditate. Laboriosam quam tempore facere
              porro dolores sed vel saepe? Incidunt, ea? Nam, enim! Ut maiores
              debitis aliquid!
            </p>
            <button>Advanced</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>REACT</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              minus tenetur impedit cupiditate. Laboriosam quam tempore facere
              porro dolores sed vel saepe? Incidunt, ea? Nam, enim! Ut maiores
              debitis aliquid!
            </p>
            <button>Advanced</button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3 }}
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML</h2>
          <p>
            Having dedicated over two years to mastering HTML, I've evolved into
            an advanced user with a deep understanding of its intricacies.
            Proficient in crafting semantic and accessible markup, I excel in
            structuring web content for optimal user experience.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CSS</h2>
          <p>
            I'm adept at creating visually stunning and responsive web designs.
            From intricate layouts to meticulous styling, my expertise
            encompasses the use of flexbox, grid, and animations. As a result, I
            can transform design concepts into polished user interfaces.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>JAVASCRIPT</h2>
          <p>
            After extensive and dedicated learning, I've achieved proficiency in
            JavaScript, mastering its core concepts and advanced
            functionalities. My skill set includes DOM manipulation,
            asynchronous programming, and proficiency in popular frameworks like
            React.js.
          </p>
          <button>Advanced</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>REACT</h2>
          <p>
            With two years of hands-on experience, I've evolved into an advanced
            React.js developer. Proficient in building dynamic and scalable web
            applications, my skills encompass component-driven architecture,
            state management, and effective use of React libraries.
          </p>
          <button>Advanced</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
