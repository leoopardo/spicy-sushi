import { motion } from "framer-motion";
import { Section1 } from "./sections/1";
import { Section2 } from "./sections/2";
import "./App.css";
import { Section3 } from "./sections/3";

const sections = [<Section1 />, <Section2 />, <Section3 />];

const App = () => {
  return (
    <motion.div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {section}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default App;
