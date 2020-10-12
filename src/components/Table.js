import React from "react";
import "./Table.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import UserActions from "./UserActions";
const userData = [
  {
    id: 312323,
    name: "Amit Bansal",
    email: "amit@gmail.com",
    status: "active",
    lastSignIn: "2 days ago",
    emailUsage: "0GB",
  },

  {
    id: 554534,
    name: "Kunal Arora",
    email: "KunalArora@gmail.com",
    status: "active",
    lastSignIn: "2 days ago",
    emailUsage: "1GB",
  },
];

function Table() {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>
            <input
              type="checkbox"
              id="table-header"
              name="select-all"
              value="s3lect-all"
            />
          </th>
          <th>
            <span>Name</span>
            <span>
              <ArrowUpwardIcon />
            </span>
          </th>
          <th>Email</th>
          <th>Status</th>
          <th>Last Sign In</th>
          <th>Email Usage</th>
        </tr>
        {userData.map((user) => {
          return (
            <tr className="table-container-user-data">
              <td>
                <input
                  type="checkbox"
                  id={user.id}
                  name={user.name}
                  value={user.name}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.lastSignIn}</td>
              <td>{user.emailUsage}</td>
              <div className="table-container-user-data-action">
                <UserActions />
              </div>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
