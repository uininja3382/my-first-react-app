/* eslint-disable react/prop-types */
import "./users-list.css";

const UsersList = ({ filteredUsers }) => {
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
};

export default UsersList;
