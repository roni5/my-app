import * as React from "react";
import TemperatureInput from "./TemperatureInput";

 class Calculator extends React.Component {
  public render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator;
