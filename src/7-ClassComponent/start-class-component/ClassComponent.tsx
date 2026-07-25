import React from "react";

class ClassComponent extends React.Component<{ description?: string }> {
  state = {
    description: "React",
  };

  render() {
    return (
      <div>
        <button onClick={() => console.log(this.state.description)}>
          Button
        </button>
        <h1>{this.state.description}</h1>
      </div>
    );
  }
}

export default ClassComponent;
