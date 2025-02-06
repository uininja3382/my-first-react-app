import { Component } from "react";
import "./App.css";
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
      .then((users) => this.setState(() => ({ users })));
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
            Hello am {this.state.users[this.state.users.length - 1]?.name} my
            position is {this.state.position}
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
          style={{
            padding: "32px",
            margin: "24px",
            backgroundColor: "skyblue",
            borderRadius: "20px",
            fontSize: "1rem",
          }}
        >
          <label>
            Search Users:
            <input
              type="search"
              className="search-box"
              onChange={(event) => {
                let filteredUsers = [];
                const searchValue = event.target.value;
                filteredUsers = this.state.users.filter((user) =>
                  user.name.includes(searchValue)
                );
                this.setState(() => ({ users: filteredUsers }));
              }}
            />
          </label>
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
