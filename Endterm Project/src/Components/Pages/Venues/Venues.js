import React, { useState, useEffect } from "react";
import "./Venues.css";
// import { useResolvedPath, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function Venues() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    
    <div id="pcontainer">
      <h2>Patients</h2>

      <div>
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email Address</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default Venues;
