import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './intro';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';
import TraçosResumido from './TraçosResumido';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/perguntas" element={<QuestionScreen />} />
        <Route path="/resultado" element={<ResultScreen />} />
        <Route path="/traços" element={<TraçosResumido />} />
      </Routes>
    </Router>
  );
}

export default App;

