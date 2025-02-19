import { Component } from "react";
import UsersList from "./components/usersList";
import SearchBox from "./components/search-box";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
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
    const { users, searchField } = this.state || {}; //destructing
    filteredUsers = users?.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <h1>Users List</h1>
        <div
          style={{
            padding: "32px",
            margin: "24px",
            backgroundColor: "skyblue",
            borderRadius: "20px",
            fontSize: "1rem",
          }}
        >
          <SearchBox
            searchLable="Search Users:"
            onChangeHandler={this.handleChange}
            placeHolder="Enter a search value"
            customClass="search-input-style"
          />
          <UsersList filteredUsers={filteredUsers} />
        </div>
      </>
    );
  }
}

export default App;
