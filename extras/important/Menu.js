import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
              <li data-text="Home">
          <a href="/">Home</a>
        </li>
              <li data-text="About Me">
          <a href="/">About Me</a>
        </li>
        <li data-text="Skills">
          <a href="/">Skills</a>
        </li>
        <li data-text="Projects">
          <a href="/">Projects</a>
        </li>
        <li data-text="Experience">
          <a href="/">Experience</a>
        </li>
        <li data-text="Contact">
          <a href="/">Contact</a>
        </li>
      </ul>
      {/* <a href="/">About Me</a>
      <a href="/">Skills</a>
      <a href="/">Projects</a>
      <a href="/">Experience</a>
      <a href="/">Contact</a> */}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
