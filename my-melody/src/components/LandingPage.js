import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import LandingCard from './LandingCard';
import LandingCard2 from './LandingCard2';
import './../css/LandingPage.css';

class LandingPage extends Component {
    render() {
        return(
            <div>
                <LandingCard2 />
            </div>
        );
    }
}

export default LandingPage;
