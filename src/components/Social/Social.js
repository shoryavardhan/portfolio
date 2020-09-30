import React from 'react';
import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faChartBar} /></li>
                    <li><FontAwesomeIcon icon={faBriefcase} /></li>
                    <li><FontAwesomeIcon icon={faLightbulb} /></li> 
                    <li><FontAwesomeIcon icon={faPhoneAlt} /></li>
                </ul>
            </div>
        )
    }
}
