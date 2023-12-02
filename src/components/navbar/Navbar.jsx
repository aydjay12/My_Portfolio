import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Deji O.S
          </motion.span>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/ayo-deji-898308286/"
              target="blank"
            >
              <img src="/Linkedin.png" alt=""></img>
            </a>
            <a href="https://github.com/aydjay12/" target="blank">
              <img src="/pngegg.png" alt=""></img>
            </a>
            <a href="https://twitter.com/aydjay12" target="blank">
              <img src="/twitter.png" alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
