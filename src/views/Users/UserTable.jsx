import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table, Pagination, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSecurity } from "./../../context/Security";
import defaultavatar from './../../assets/images/defaultavatar.jpg';

const baseapi = process.env.REACT_APP_BASE_URL;

const UserTable = ({ users, hasPermission }) => {
  const { encrypt } = useSecurity();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.mobileNo.includes(searchTerm)
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Slice users for current page
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div className="table-responsive">
      {/* Search Input */}
      <Row>

      
      <Col md={10}>
      </Col>
      <Col md ={2}> <Form.Control
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-3 text-start"
       
      />
      </Col>
     </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td><img src={user.profilePicturePath ? `${baseapi}/${user.profilePicturePath}` : `${defaultavatar}`} alt="" width={30} height={30} /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>{user.departmentname}</td>
                <td>{user.designationname}</td>
                <td className="d-flex gap-3 text-primary">
                  <div className="d-flex gap-3 text-primary justify-content-center">
                    {hasPermission(1, 'canViewOnly') && <Link to={`/UserProfile/Profile/${user.userId}`}><FontAwesomeIcon icon={faEye} className="text-success" /></Link>}
                    {hasPermission(1, 'canUpdateOnly') && <Link to={`/Users/EditUser/${encrypt(user.userId)}`}><FontAwesomeIcon icon={faPenToSquare} className="text-primary" /></Link>}
                    {/* Uncomment this line to enable delete action if needed */}
                    {/* {hasPermission(1, 'canDeleteOnly') && <FontAwesomeIcon icon={faTrash} className="text-danger" />} */}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <Row className="justify-content-end">
        <Col md="auto">
          <Pagination>
            <Pagination.Prev
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Col>
      </Row>
    
    </div>
  );
};

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      mobileNo: PropTypes.string.isRequired,
      departmentname: PropTypes.string.isRequired,
      designationname: PropTypes.string.isRequired,
    })
  ).isRequired,
  hasPermission: PropTypes.func.isRequired,
};

export default UserTable;
