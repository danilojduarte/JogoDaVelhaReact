import React from "react";
import Logo from "./objects/Logo";
import Sobre from "./objects/Sobre";
import Menu from "./objects/Menu";

function App() {
  return (
    <div>
      <Logo />
      <Sobre />
      <Menu />  
    </div>




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
  );
}

export default App;
