import React from 'react';
import './App.css';
import WeatherApp from "./component/WeatherApp";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="logo">Lookbok</div>
        </header>
        <WeatherApp />
      </div>
  );
}

export default App;
