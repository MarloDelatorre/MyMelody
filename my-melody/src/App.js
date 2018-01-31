import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends Component {
    render() {
        return(
            <div className="containerBody">
                <LandingPage />
            </div>
        );
    }
}

export default App;
