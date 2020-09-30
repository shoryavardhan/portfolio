import React from "react";
// import portrait from './portfolio.jpeg';
import { StyledProject } from "./Project.styled";
// import Form from "./Form.js";
import { NavLink } from 'react-router-dom'

import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";

const Project = () => {
  return (
    <StyledProject>
      <h1 className="heading">PROJECT.</h1>
      <h2 className="subheading">LET'S TALK.</h2>
      <div className="container">
      </div>
      <div className="home">
        <StyledButton>
          <NavLink to="/experience">Experience</NavLink>
        </StyledButton>
      </div>
    </StyledProject>
  );
};
export default Project;
