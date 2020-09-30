import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  background: #172A45;
  overflow: hidden;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 777px) {
    width: 100%;
  }
  ul {
    position: relative;
    display: flex;
    padding:0;
    flex-direction: column;
  }

  ul li {
    list-style: none;
    margin: 3px;
    
  }
  ul li:before{
      content:attr(data-text);
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      color:#fff;
      font-size: 11em;
      z-index:-1;
      font-weight:900;
      pointer-events:none;
      opacity:0; 
      letter-spacing:20px;
      transition:0.5s;
      white-space:nowrap;
  }
    ul li:hover:before{
        opacity:0.05;
        letter-spacing:0px;
    }
  ul li a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 6px 15px;
    letter-spacing: 2px;
    color: white;
    opacity:0.7;
    overflow: hidden;
    text-decoration: none;
    transition: color 0.3s linear;
    // background-color: #557a95;
    text-transform: uppercase;
    border:2px solid #66fcf1;
    font-size: 25px;
    transition: 0.3s;
    margin:2px; 

    @media (max-width: 555) {
      font-size: 1rem;
      text-align: center;
    }
  }
  ul:hover li a{
      opacity:0;
  }
  ul li a:hover {
    // transform: scale(4);
    font-size:3rem;
    z-index: 999;
    background: #66fcf1;
    color:black;
    opacity:1;
  }


`;
