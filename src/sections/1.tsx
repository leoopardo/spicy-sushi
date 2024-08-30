import { motion } from "framer-motion";
import logo from "/logo.png";
import sushi1 from "/sushi1.jpeg";
import sushi2 from "/sushi2.jpeg";

export const Section1 = () => {
  return (
    <section className="h-screen bg-amber-50">
      <header className="flex justify-between items-center border-b-stone-100 border-b-2 pb-4 pr-8">
        <div
          style={{ backgroundImage: `url(${logo})`, marginLeft: "1rem" }}
          className="w-24 h-20 bg-cover bg-center"
        />

        <ul
          className="flex justify-between w-3/12 scroll-ml-11 text-red-600"
          style={{ fontSize: 22 }}
        >
          <li>
            <motion.a
              href="#about"
              whileHover={{ color: "#ff0000", textDecoration: "underline" }}
            >
              Sobre nós
            </motion.a>
          </li>
          <li>
            <motion.a href="#cardapio" whileHover={{ color: "#ff0000" }}>
              Cardápio
            </motion.a>
          </li>
          <li>
            <motion.a href="#contact" whileHover={{ color: "#ff0000" }}>
              Contato
            </motion.a>
          </li>
        </ul>
      </header>
      <body className="w-screen bg-amber-50 flex" style={{ height: "100%" }}>
        <div
          className="h-full w-6/12 flex flex-col justify-center"
          style={{ paddingLeft: "10%" }}
        >
          <motion.h1
            className="text-6xl font-bold text-red-600 max-w-52 uppercase"
            initial={{ x: -20, fontStyle: "normal" }}
            animate={{ x: 0, fontStyle: "italic" }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.5,

              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Explore
          </motion.h1>
          <motion.h1
            className="text-6xl font-bold text-red-600 max-w-52 uppercase"
            initial={{ x: -20, fontStyle: "normal" }}
            animate={{ x: 50, fontStyle: "italic" }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.5,

              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Nossos
          </motion.h1>
          <motion.h1
            className="text-6xl font-bold text-red-600 max-w-52 mb-60 uppercase"
            initial={{ x: -20, fontStyle: "normal" }}
            animate={{ x: 100, fontStyle: "italic" }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.5,

              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Sabores
          </motion.h1>

          <motion.button
            className="bg-red-600 text-white px-4 py-2 rounded-lg w-52 h-14 flex justify-center items-center text-2xl"
            style={{ marginLeft: "-20px" }}
            whileHover={{ scale: 1.1, backgroundColor: "#ff0000" }}
            whileTap={{ scale: 0.9, backgroundColor: "#ff0000" }}
          >
            <a href="#cardapio">Ver cardápio</a>
          </motion.button>
        </div>
        <div className="h-full w-6/12 flex">
          <motion.div
            className="h-full w-6/12 bg-cover bg-center rotate-6"
            style={{
              backgroundImage: `url(${sushi1})`,
              marginLeft: 300,
              marginTop: -100,
              marginRight: -200,
              height: "120%",
            }}
            animate={{ marginLeft: 50 }}
            transition={{
              duration: 2.5,
              type: "spring",
            }}
          />
          <motion.div
            className="h-full w-6/12 bg-cover bg-center rotate-6"
            style={{
              backgroundImage: `url(${sushi2})`,
              marginLeft: 300,
              marginTop: -100,
              height: "120%",
            }}
            animate={{ marginRight: -200, marginLeft: 200 }}
            transition={{
              duration: 1.3,
              type: "spring",
            }}
          />
        </div>
      </body>
    </section>
  );
};
