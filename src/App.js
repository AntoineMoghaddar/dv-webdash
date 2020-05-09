import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import './Assets/css/default.min.css';

// Components
import Header from "./components/header-component/header";
import Footer from "./components/footer-component/footer";
import Homepage from "./components/pages/homepage";
import About from "./components/pages/about";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/About' component={About}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
