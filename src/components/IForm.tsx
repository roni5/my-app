import * as React from "react";

export interface IFormProps {
  text: string;
}
export interface IState {
  email: string;
  name: string;
}
export default class IForm extends React.Component<IFormProps, IState> {
  public readonly state: Readonly<IState> = {
    email: "",
    name: ""
  };
  // public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const { name, value }: any = e.target;
  //   this.setState({name: value});
  // };
  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // No longer need to cast to any - hooray for react!
    this.setState({name: e.target.value});
  }

  public render() {
    const { text } = this.props;
    const { name } = this.state;
    return (
      <div>
        <div> {text} </div>
        <input name={name}  value={name} onChange={this.handleChange} />

      </div>
    );
  }
}
