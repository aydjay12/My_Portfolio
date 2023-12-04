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
          <h2>CSS</h2>
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
      </motion.div>
    </motion.div>
  );
};

export default Services;
