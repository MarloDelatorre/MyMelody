import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/NavigationBar.css';

class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            burgerMenuDisplay: false
        }

        this.hamburgerMenuToggle = this.hamburgerMenuToggle.bind(this);
    }

    hamburgerMenuToggle() {
        this.setState(() => {return {burgerMenuDisplay: !this.state.burgerMenuDisplay}});
    }

    render() {
        return(
            <nav>
                <FontAwesome name="music" size="2x" className="musicNoteIcon"/>
                <header className="projectName">My Melody</header>

                <div className="navBarWide">
                    <div className="wideMenu">
                        Menu Area
                    </div>
                </div>

                <div className="navBarNarrow">
                    <FontAwesome name="bars" size="2x" className="burgerNavIcon" onClick={this.hamburgerMenuToggle}/>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
