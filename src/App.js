import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="korea" />
      </header>
      <h2>weather from React</h2>
    </div>
  );
}

export default App;
