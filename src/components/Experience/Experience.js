import React from "react";
// import portrait from './portfolio.jpeg';
import { StyledExperience } from "./Experience.styled";
// import Form from "./Form.js";
import { NavLink } from 'react-router-dom'

import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";

const Experience = () => {
  return (
    <StyledExperience>
      <h1 className="heading">EXPERIENCE.</h1>
      <h2 className="subheading">LET'S TALK.</h2>
      <div className="container">

      </div>
      <div className="home">
        <StyledButton>
          <NavLink to="/contact">Contact</NavLink>
        </StyledButton>
      </div>
    </StyledExperience>
  );
};
export default Experience;
