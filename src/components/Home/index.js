import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./style.css";


class Home extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <Helmet>
                    <title>Quiz - Home</title>
                </Helmet>
            
                <div id="home">
                    <section>
                        <div>
                            <span className="mid mid-cube-outline"></span>
                        </div>
                        
                        <h1>Quiz App</h1>
                        
                        <div className="play-button-container">
                                <ul>
                                    <button className="btn btn-outline-primary" id="bigboy">
                                        <Link to="/play/instructions">Play</Link>
                                    </button>
                                </ul>
                        </div> 
                        
                        <div className="auth-container">
                            <Link to="/highscores">High Scores!</Link>
                        </div>
                    </section>
                </div>

            </Fragment>
         );
    }
}
 
export default Home;