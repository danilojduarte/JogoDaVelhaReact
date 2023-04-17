import React from "react";
import './app.css';

import Label from "./objects/Label";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";





const App = () => (
    <main className="app">
  <Header />
  <Hashtag />
  <Label content="Mostrar Evento" />
   </main>
  );

export default App;



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Iniciando Com React JS
    //     </a>
    //   </header>
    // </div>
