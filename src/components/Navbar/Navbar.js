import React from "react";
import { Component } from "react";
import { StyledNavbar } from "./Navbar.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <StyledNavbar>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLightbulb} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </li>
          </ul>
          <div className="vl"></div>
        </StyledNavbar>
      </div>
    );
  }
}
