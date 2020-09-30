import React from "react";

const Card = ({ skill, progress, classes }) => {
  return (
    <div class="container">
      <div class="progress-container">
        <h1 class="skillheading">{skill}</h1>
        <h2 class="skillsubheading">Progress</h2>
        <div class="line"></div>
        <svg class="progressbar" viewBox="0 0 64 64">
          <g clip-path="url(#progress__mask)">
            <circle
              class="progressbar__track"
              cx="50%"
              cy="50%"
              r="30px"
            ></circle>
            <circle class={classes} cx="50%" cy="50%" r="30px"></circle>
          </g>
        </svg>
        <div class="progress-content">
          <div class="progress__value">{progress}</div>
          <div class="progress__text">Well done!</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
