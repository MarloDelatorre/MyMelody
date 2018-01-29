import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import LandingCard from './components/LandingCard';
import './App.css';

class App extends Component {
    render() {
        return(
            <div className="containerBody">
                <LandingCard />
            </div>
        );
    }
}

export default App;
