import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import LandingCard from './LandingCard';
import LandingCard2 from './LandingCard2';
import LandingCardFinal from './LandingCardFinal';
import './../css/LandingPage.css';
import PersonMusic from './../assets/PersonMusic.png';

class LandingPage extends Component {
    render() {
        return(
            <div className="landingPageContainer">
                <img src={PersonMusic} className="landingPageBackground"/>

                <LandingCardFinal />
            </div>
        );
    }
}

export default LandingPage;
