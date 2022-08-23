import React from "react";
import ReactDOM from "react-dom";
import root from "react-shadow/styled-components";
import styles from "!raw-loader!./styles.css";
import * as e from "./styles";

function App() {
  return (
    <root.div className="quote">
      <q>There is strong shadow where there is much light.</q>
      <e.Author>― Johann Wolfgang von Goethe.</e.Author>
      <style type="text/css">{styles}</style>
    </root.div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
