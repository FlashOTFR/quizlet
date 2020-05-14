import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Instructions from './components/Instructions';
import Home from "./components/Home";
import Play from "./components/Play";
import QuizSummary from "./components/QuizSummary";
import HighScores from "./components/HighScores";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/play/instructions" component={Instructions} />
      <Route exact path="/play/quiz" component={Play} />
      <Route exact path="/play/quizSummary" component={QuizSummary} />
      <Route exact path="/highscores" component={HighScores} />
    </Router>
  );
}

export default App;
