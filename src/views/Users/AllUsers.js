import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";


const AllUsers = () => {
  const [users, setUsers] = useState([]);

const OnClickAddUser = () => {
  window.location.href= './AddUser'
}

  useEffect(() => {
    // Fetch user data from the API
    fetch("https://localhost:7217/api/Users")
      .then((res) => res.json())
      .then((data) => {
        // Map properties to match UserTable expectations
        const mappedUsers = data.map((user) => ({
          userId: user.userId,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          mobileNo: user.mobileNo,
          departmentName: user.departmentName,
          roleName:user.roleName,
        }));

        setUsers(mappedUsers);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Container className="userform border border-3 p-4 my-3">
      <div className="d-flex justify-content-between m-3">
        <h3>Users</h3>
        <Button as={Link} to="add-user/" className="btn" onClick={OnClickAddUser}>
          Add User
        </Button>
      </div>
      <hr />
      <UserTable users={users} />
    </Container>
  );
};

export default AllUsers;
