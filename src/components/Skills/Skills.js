import React from "react";
import Card from "./Card/Card.js";
import { StyledSkills } from "./Skills.styled";
import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";
import { NavLink } from 'react-router-dom'

const Skills = () => {
  return (
    <StyledSkills>
      <div className="container">
        <h1 className="heading">SKILLS.</h1>
        <h2 className="subheading">BECAUSE TECHNOLOGY MATTERS.</h2>
        <div className="mainContainer1">
          <Card skill={"C++"} progress={90} classes={"one thumb thumb_2"} />
          <Card skill={"C"} progress={90} classes={"one thumb thumb_2"} />
          <Card
            skill={"REACT-JS"}
            progress={80}
            classes={"two thumb thumb_2"}
          />
          <Card
            skill={"NODE-JS"}
            progress={70}
            classes={"three thumb thumb_2"}
          />
        </div>
        <div className="mainContainer2">
          <Card
            skill={"BOOTSTRAP"}
            progress={90}
            classes={"one thumb thumb_2"}
          />
          <Card skill={"HTML"} progress={100} classes={"four thumb thumb_2"} />
          <Card skill={"CSS"} progress={100} classes={"four thumb thumb_2"} />
          <Card skill={"PYTHON"} progress={80} classes={"two thumb thumb_2"} />
        </div>
        <div className="skill">
          <StyledButton><NavLink to="/projects">Projects</NavLink></StyledButton>
        </div>
      </div>
    </StyledSkills>
  );
};
export default Skills;
