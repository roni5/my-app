import * as React from 'react';

interface IMyCompProps {
  name: string,
}

const MyComp: React.SFC<IMyCompProps> = (props) => {
  return <h1> Hello, { props.name} </h1> ;
};

export default MyComp;