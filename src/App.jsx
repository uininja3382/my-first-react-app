import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Daniel",
      position: "UI developer",
      bgColor: "green",
    };
  }

  render() {
    return (
      <div
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: `${this.state.bgColor}`,
        }}
      >
        <h1>
          Hello am {this.state.name} my position is {this.state.position}
        </h1>
        <button
          onClick={() => {
            this.setState({
              name: "Madhu",
              position: "Software Developer",
              bgColor: "yellow",
            });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
