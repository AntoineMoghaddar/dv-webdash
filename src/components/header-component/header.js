import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";

{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
}

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    LOGO
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li className="last">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
