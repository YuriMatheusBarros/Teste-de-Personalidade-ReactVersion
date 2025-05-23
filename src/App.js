// Importa o React, que é necessário para criar componentes
import React from 'react';

// Importa ferramentas do react-router-dom para criar rotas no aplicativo
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes que representam as diferentes páginas do aplicativo
import Intro from './intro';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';
import TraçosResumido from './TraçosResumido';

import './css/mediaQueries.css';

// Função principal do aplicativo
function App() {
  return (
    // Define o Router, que é como o "mapa" para navegar entre as páginas
    <Router>
      {/* Define as rotas do aplicativo */}
      <Routes>
        {/* Rota para a página inicial ("/"), que exibe o componente Intro */}
        <Route path="/" element={<Intro />} />
        {/* Rota para a página de perguntas ("/perguntas"), que exibe o componente QuestionScreen */}
        <Route path="/perguntas" element={<QuestionScreen />} />
        {/* Rota para a página de resultados ("/resultado"), que exibe o componente ResultScreen */}
        <Route path="/resultado" element={<ResultScreen />} />
        {/* Rota para a página de traços resumidos ("/traços"), que exibe o componente TraçosResumido */}
        <Route path="/traços" element={<TraçosResumido />} />

      </Routes>
    </Router>
  );
}




// Exporta o componente App para ser usado em outras partes do projeto
export default App;
