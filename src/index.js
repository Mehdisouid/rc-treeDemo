import React from "react";
import ReactDOM from "react-dom";
import SimpleTreeContainer from "./SimpleTreeContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SimpleTreeContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
