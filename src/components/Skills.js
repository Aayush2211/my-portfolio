import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="anime cursor-pointer flex items-center justify-center
       rounded-full font-semibold bg-slate-200 text-dark py-3 px-6 
       shadow-dark absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="heading font-bold text-6xl mt-20 w-full text-center text-white">
          Skills
        </h2>
        <div className="skills w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark">
          <motion.div
            className="anime cursor-pointer flex items-center justify-center rounded-full font-semibold bg-slate-200 text-dark p-6 shadow-dark"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>

          <Skill name="HTML" x="-20vw" y="2vw" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="ReactJs" x="0vw" y="12vw" />
          <Skill name="ExpressJs" x="-20vw" y="-13vw" />
          <Skill name="NodeJs" x="15vw" y="-12vw" />
          <Skill name="OOPs" x="30vw" y="-15vw" />
          <Skill name="Responsive Web Designing" x="32vw" y="-5vw" />
          <Skill name="Data Structures and Algorithms" x="0vw" y="-20vw" />
          <Skill name="Problem Solving" x="-25vw" y="18vw" />
          <Skill name="MongoDB" x="18vw" y="18vw" />
          <Skill name="Git & GitHub" x="-38vw" y="2vw" />
          <Skill name="Java" x="35vw" y="8vw" />
          <Skill name="Firebase" x="-40vw" y="-9vw" />
        </div>
      </div>
    </>
  );
};

export default Skills;
