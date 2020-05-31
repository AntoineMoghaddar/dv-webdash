import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'

{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
}

class Header extends Component {
    render() {
        return (

            // This is a test menu , remove if not needed.
            <header>
                <div id="outer-container">
                    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
                    <main id="page-wrap">
                        <Menu>
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="about" className="menu-item" href="/about">About</a>
                            <a id="contact" className="menu-item" href="/contact">Contact</a>
                        </Menu>
                    </main>
                </div>

            </header>

        );
    }
}

export default Header;













































