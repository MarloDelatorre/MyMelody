import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends Component {
    render() {
        return(
            <div>
                <div>
                    <NavigationBar />
                </div>

                <div>
                    Hello World!
                </div>
            </div>
        );
    }
}

export default App;
