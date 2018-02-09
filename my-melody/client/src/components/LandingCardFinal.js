import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/LandingCardFinal.css';
import LandingCardMessages from './../messages/LandingCardMessages.json';

class LandingCardFinal extends Component {
    render() {
        return(
            <div>
                <div className="landingCardTopBar">
                    <div className="landingCardWebName">
                        <header>{LandingCardMessages.projectNameMessage}</header>
                    </div>

                    <button className="landingCardAbout">{LandingCardMessages.aboutMessage}</button>
                    <button className="landingCardTeam">{LandingCardMessages.teamMessage}</button>
                </div>

                <div className="landingCardBody">
                    <header className="landingCardDiscoverMessage">{LandingCardMessages.discoverMessage}</header>
                    <header className="landingCardListenMessage">{LandingCardMessages.listenMessage} <strong>{LandingCardMessages.melodiesMessage}.</strong></header>
                    <button className="landingCardSignUp">{LandingCardMessages.signUpMessage}</button>

                    <div className="landingCardDivider">
                        <hr/>
                        <header className="landingCardDividerMessage">{LandingCardMessages.alreadyHaveAnAccountMessage}</header>
                        <hr/>
                    </div>

                    <button className="landingCardLogIn">{LandingCardMessages.loginInMessage}</button>
                </div>
            </div>
        );
    }
}

export default LandingCardFinal;
