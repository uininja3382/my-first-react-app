import { useState, useEffect } from "react";
import UsersList from "./components/usersList";
import SearchBox from "./components/search-box";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const fetchUrl = "https://jsonplaceholder.typicode.com/users";


  const handleChange = (event) => {
    setSearchField(() => event.target.value);
  };

  useEffect(() => {
    //Error Handling when fetching data from external source
    //try catch and finally
    try {
      fetch(fetchUrl)
        .then((response) => {
          console.log(response);
          if (response.status >= 400) {
            setFetchError(true);
            throw new Error(`Http status ${response.status}`);
          }
          return response.json();
        })
        .then((users) => setUsers(users));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch implemented");
    }
  }, []);

  let filteredUsers = [];
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
        {!fetchError ? (
          <>
            <SearchBox
              searchLable="Search Users:"
              onChangeHandler={handleChange}
              placeHolder="Enter a search value"
              customClass="search-input-style"
            />
            <UsersList filteredUsers={filteredUsers} />
          </>
        ) : (
          <div className="error">The users list is not available now</div>
        )}
      </div>
    </>
  );
};

export default App;
