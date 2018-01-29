import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/LandingCard.css';

class LandingCard extends Component {
    render() {
        return(
            <div className="centerContainer">
                <div className="cardHolder">
                    <FontAwesome name="music" size="2x" className="musicNoteLogo"/>
                    <header className="welcomeMessage">Welcome to Melody</header>
                    <header className="describeMessage">Discover and share music</header>

                    <form>
                        <input type="text" className="username" placeholder="Username"/>
                        <br></br>
                        <input type="text" className="password" placeholder="Password"/>
                        <br></br>
                        <input type="text" className="confirmPassword" placeholder="Confirm Password"/>
                        <br></br>
                        <input type="submit" value="Continue" className="signUpButton"/>
                        <br></br>
                        <header className="orDivider">OR</header>

                        <button type="button" className="facebookButton">Continue with Facebook</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LandingCard;
