import * as React from "react";

export interface IAppProps {
<<<<<<< HEAD
  name: string;
  
=======
  name?: string;
  isLogin: boolean;
>>>>>>> develop
}

export default class IApp extends React.Component<IAppProps> {
  public static defaultProps: Partial<IAppProps> = {
    name: "Blinds"
  };
  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}
