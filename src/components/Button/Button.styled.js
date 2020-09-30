import styled from "styled-components";

export const StyledButton = styled.button`
         text-transform: capitalize;
         font-size: 1rem;
         background: transparent;
         font-family: source;
         border: 1px solid #66fcf1;
         color: #66fcf1;
         // border: 1px solid #F4AD2F;
         // color: #F4AD2F;
         border-radius: 5px;
         padding: 15px 40px;
         cursor: pointer;
         position: relative;
         margin-top: 3%;
         transition: all 0.5s ease-in-out;
         .home {
           margin-left: 7%;
         }
         a {
           text-decoration: none;
           color: #66fcf1;
         }
         .skill {
           margin-left: -100px;
           margin-bottom: 30px;
         }
         &:hover {
           background-color: #0d2e43;
         }
         &:focus {
           outline: none;
         }
       `;