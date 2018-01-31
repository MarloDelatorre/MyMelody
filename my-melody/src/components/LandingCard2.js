import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/LandingCard2.css';

class LandingCard2 extends Component {
    render() {
        return(
            <div className="landingContainer">
                <header className="melodyLogo">Welcome to Melody</header>
                <header className="discoverLogo">Discover and share music with your friends</header>

                <form className="signUpForm">
                    <input type="text" className="usernameText" placeholder="Username"/>
                    <br></br>
                    <input type="text" className="passwordText" placeholder="Password"/>
                    <br/>

                    <input type="checkbox" className="rememberCheck"/>
                    <span>Remember Me</span>
                    <br/>
                    <input type="submit" className="loginSubmit" value="Login"/>
                    <button type="button" className="signUpSubmit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default LandingCard2;
