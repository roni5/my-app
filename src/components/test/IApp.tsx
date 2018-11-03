import * as React from "react";

export interface IAppProps {
  name: string;
  
}

export default class IApp extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        <div>{name}</div>
      </div>
    );
  }
}
