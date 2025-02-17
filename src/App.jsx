import { Component } from "react";
import UsersList from "./components/UsersList/UsersList";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Daniel",
      position: "UI developer",
      bgColor: "cyan",
      users: [],
      searchField: "",
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

  handleChange = (event) => {
    this.setState(() => ({ searchField: event.target.value }));
  };

  render() {
    let filteredUsers = [];
    const { position, bgColor, users, searchField } = this.state || {}; //destructing
    filteredUsers = users?.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <div
          style={{
            padding: "20px",
            margin: "20px",
            backgroundColor: `${bgColor}`,
          }}
        >
          <h1>
            Hello am {users[users.length - 1]?.name} my position is {position}
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
              onChange={this.handleChange}
            />
          </label>
          <UsersList filteredUsers={filteredUsers} />
        </div>
      </>
    );
  }
}

export default App;
