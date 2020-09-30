import styled from "styled-components";

export const StyledSkills = styled.nav`
         .skill {
           margin-left: -80px;
           margin-bottom: 30px;
         }
        .heading {
           margin-top: 20px;
           color: white;
           opacity: 0.04;
           font-size: 13rem;
           letter-spacing: 2px;
           font-family: calibremedium;
           font-weight: 700;
           margin-left: -80px;
         }
         a {
           text-decoration: none;
           color: #66fcf1;
         }
         .subheading {
           color: white;
           margin-top: -80px;
           margin-left: -80px;
           opacity: 0.5;
           font-size: 3rem;
           letter-spacing: 1px;
           font-family: calibre;
           font-weight: 700;
         }
         .mainContainer1 {
           display: flex;
           // top: 45%;

           margin-left: -120px;
           position: relative;
         }
         .mainContainer2 {
           display: flex;
           // top: 100%;
           margin-top: 30px;
           margin-left: -120px;
           position: relative;
         }
         .container {
           display: flex;
           flex-direction: column;
         }

         .progress-container {
           display: flex;
           flex-direction: column;
           width: 250px;
           height: 250px;
          //  width: 300px;
          //  height: 300px;
           position: relative;
           display: flex;
           justify-content: center;
           align-items: center;
           margin:20px;
           background: #172a45;
           box-shadow: 8px 8px #122035;
         }
         .skillheading {
           color: #fff;
           opacity: 0.8;
           position: absolute;
           display: inline-block;
           top: 7px;
           font-size: 25px;
           font-family: lato;
         }
         .skillsubheading {
           color: #fff;
           opacity: 0.6;
           position: absolute;
           display: inline-block;
           top: 45px;
           font-size: 16px;
           font-weight: 100;
           font-family: lato;
         }
         .line {
           background-color: #fff;
           height: 1px;
           width: 130px;
           position: absolute;
           margin-top: -50px;
           opacity: 0.2;
         }
         .progressbar {
           position: absolute;
           width: 50%;
           height: 50%;
           left: 25%;
           top: 40%;
         }

         .progressbar__track {
           fill: transparent;
           stroke: #fff;
           opacity: 0.05;
           stroke-width: 3px;
         }

         .thumb {
           fill: transparent;
           stroke-width: 3px;
           stroke-dasharray: 0 calc(30 * 3 * 3.141593);
           stroke-linecap: round;
           transform: rotate(-89deg);
           transform-origin: 50% 50%;
         }
         .thumb_2 {
           animation-fill-mode: forwards;
           animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);
           stroke: #66fcf1;
           animation-duration: 1.6s;
           animation-delay: 0.2s;
           opacity: 0.8;
         }
         .one {
           animation-name: progress;
         }
         .two {
           animation-name: progress2;
         }
         .three {
           animation-name: progress3;
         }
         .four {
           animation-name: progress4;
         }

         .progress-content {
           text-align: center;
         }

         .progress__value {
           color: #66fcf1;
           font-size: 2em;
           position: relative;
           display: inline-block;
           margin-top: 70%;
           transform: scale(0);
           font-family: lato;
           animation: pulse 400ms 1.6s forwards;
         }

         .progress__value::before {
           content: "%";
           font-size: 0.5em;
           position: absolute;
           top: 3px;
           font-family: lato;
           left: -12px;
         }

         .progress__text {
           text-transform: uppercase;
           letter-spacing: 1px;
           max-height: 0;
           overflow-y: hidden;
           color: #fff;
           opacity: 0.08;
           font-family: lato;
           // animation: flyin 500ms 1.9s forwards;
         }

         @keyframes progress {
           to {
             stroke-dasharray: 168;
           }
         }
         @keyframes progress2 {
           to {
             stroke-dasharray: 150;
           }
         }
         @keyframes progress3 {
           to {
             stroke-dasharray: 131;
           }
         }
         @keyframes progress4 {
           to {
             stroke-dasharray: 187;
           }
         }

         @keyframes pulse {
           0% {
             transform: scale(0);
           }

           60% {
             transform: scale(1.4);
           }

           100% {
             transform: scale(1);
           }
         }

         @keyframes flyin {
           from {
             max-height: 0;
             opacity: 0;
           }

           to {
             max-height: 20px;
             opacity: 0.5;
           }
         }
       `;
