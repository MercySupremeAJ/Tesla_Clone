import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

    </div>
  );
}

export default App;
