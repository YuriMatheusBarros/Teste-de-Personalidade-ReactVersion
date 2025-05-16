// Importamos o React, que é como a mágica que ajuda a criar o site
import React from 'react';
// Importamos o ReactDOM, que coloca o site na tela do navegador
import ReactDOM from 'react-dom/client';
// Importamos o arquivo de estilos (as "roupas" do site)
import './css/index.css';
// Importamos o App, que é o coração do nosso site
import App from './App';

// Aqui estamos dizendo onde o site vai aparecer na tela
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aqui pedimos para o React mostrar o site (App) dentro da página
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser medir o desempenho do site (quão rápido ele é), 
// pode passar uma função para registrar os resultados.
// Por exemplo: reportWebVitals(console.log)
// Ou enviar esses dados para um lugar que analisa isso.
// Saiba mais aqui: https://bit.ly/CRA-vitals
