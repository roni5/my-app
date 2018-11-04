import * as React from "react";

export interface IAppProps {
  name: string;

}
export interface IAppState {
  age: number;
}
export default class IApp extends React.Component<IAppProps, IAppState> {
  public static defaultProps: Partial<IAppProps> = {
    name: "Blinds"
  };
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      age: 21
    }
  }


  public render() {
    return (
      <div>
        <div> My Name is {this.props.name} and I am {this.state.age}</div>
      </div>
    );
  }
}
