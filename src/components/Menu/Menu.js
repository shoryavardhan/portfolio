import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import {NavLink} from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
              <li data-text="Home">
          <NavLink to="/">Home</NavLink>
        </li>
              <li data-text="About Me">
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li data-text="Skills">
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li data-text="Projects">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li data-text="Experience">
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li data-text="Contact">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* <NavLink to="/">About Me</NavLink>
      <NavLink to="/">Skills</NavLink>
      <NavLink to="/">Projects</NavLink>
      <NavLink to="/">Experience</NavLink>
      <NavLink to="/">Contact</NavLink> */}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
