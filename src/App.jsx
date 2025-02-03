import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Daniel",
      position: "UI developer",
      bgColor: "cyan",
      users: [],
    };
  }
  /* React life cycle methods are inherited from main Component Class of React*/

  /* mounting means inital loading or render of the component*/
  /* unmounting means removing the component from DOM*/

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <>
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
        <div
          style={{ padding: "20px", margin: "20px", backgroundColor: "gray" }}
        >
          {this.state.users.map((user) => {
            return (
              <h2 key={user.id}>
                {user.id}. {user.name}
              </h2>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
