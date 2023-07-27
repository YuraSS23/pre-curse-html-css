import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rates} from "./layout/sections/rates/Rates";
import {Markup} from "./layout/sections/markup/Markup";
import {Create} from "./layout/sections/create/Create";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";

function App() {
  return (
      <div className="App">
          <Header />
          <Markup/>
          <Rates/>
          <Create/>
          <Footer />
      </div>
  );
}

export default App;
