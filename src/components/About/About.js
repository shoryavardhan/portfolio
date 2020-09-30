import React from "react";
import portrait from "./portfolio2.jpeg";
import { StyledAbout } from "./About.styled";
import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <StyledAbout>
      <h1 className="heading">ABOUT.</h1>
      <h2 className="subheading">INSPIRED BY DIFFERENCE.</h2>
      <div className="container">
        <div class="text">
          <p>Hello! I'm Shorya, a software engineer based in Delhi NCR.!!</p>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from{" "}
            <a href="http://www.jiit.ac.in/">
              Jaypee Intitute Of Information Technology
            </a>
            , I joined the engineering team at{" "}
            <a href="https://www.avizva.com/">Avizva</a> where I work on a wide
            variety of interesting and meaningful projects on a daily basis.
          </p>
        </div>
        <div class="photo">
          <img src={portrait} alt="phosto" />
        </div>
      </div>
      <div className="about">
        <StyledButton>
          <NavLink to="/skills">skills</NavLink>
        </StyledButton>
      </div>
    </StyledAbout>
  );
};
export default About;
