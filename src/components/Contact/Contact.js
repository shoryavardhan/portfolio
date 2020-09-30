import React from "react";
// import portrait from './portfolio.jpeg';
import { StyledContact } from "./Contact.styled";
import Form from "./Form.js";
// import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";

const Contact = () => {
    return (
        <StyledContact>
            <h1 className="heading">CONTACT.</h1>
            <h2 className="subheading">LET'S TALK.</h2>
            <div className="container">
                <Form/>
            </div>
        </StyledContact> )};
export default Contact;