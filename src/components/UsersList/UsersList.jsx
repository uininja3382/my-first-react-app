/* eslint-disable react/prop-types */
import { Component } from "react";

class UsersList extends Component {
  render() {
    const { filteredUsers } = this.props;

    return (
      <div>
        <ul className="list-container">
          {filteredUsers.map(({ id, name, email }) => {
            return (
              <div key={id}>
                <li>
                  <span>Name: </span>
                  {name}
                  <p>
                    <span>Email: </span>
                    {email}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
