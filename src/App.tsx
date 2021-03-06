import * as React from "react";
import "./App.css";
import IForm from "./components/IForm";
import Calculator from "./components/Calculator";
import IApp from "./components/test/IApp";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <IForm text="hello Lord" />
          <Calculator />
          <IApp name={"roni"} />
        </p>
      </div>
    );
  }
}

export default App;
