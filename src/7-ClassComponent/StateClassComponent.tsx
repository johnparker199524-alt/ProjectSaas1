import React from "react";
class StateClassComponent extends React.Component<
  { message: string },
  { count: number }
> {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </button> 
      
    );
  }
  increment = (amt: number) => {
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}
export default StateClassComponent;
