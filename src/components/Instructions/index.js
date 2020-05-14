import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.css";


class Instructions extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Helmet>
                    <title>Quiz - Instructions</title>
                </Helmet>
            
                <div id="instructions">
                    <section>

                        <h1>How To Play!</h1>
                        
                        <p className="explain">The game is simple!  You will be asked a series of questions, and offered 4 possible answers.  Click the button of the answer that makes the most sense to you.  Try to answer all the questions before the time limit is up!</p>

                        <div className="ready-or-not">
                            <button className="btn btn-outline-primary" id="bigboy">
                                <Link to="/">Back To Home</Link>
                            </button>
                                
                            <button className="btn btn-outline-primary" id="bigboy">
                                <Link to="/play/quiz">Let's Play!</Link>
                            </button>

                        </div>
                    </section>
                </div>

            </Fragment>
         );
    }
}
 
export default Instructions;