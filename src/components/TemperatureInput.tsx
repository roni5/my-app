import * as React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

interface ITemperatureState {
  temperature: string;
}

interface ITemperatureProps {
  scale: string;
}

class TemperatureInput extends React.Component<ITemperatureProps,ITemperatureState> {
  constructor(props: ITemperatureProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  //  handleChange(e: { target: { value: string; }; }) {
  //    this.setState({temperature: e.target.value});
  //  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // No longer need to cast to any - hooray for react!
    this.setState({ temperature: e.target.value });
  }

  public render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}



export default TemperatureInput;
