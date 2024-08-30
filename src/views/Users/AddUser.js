import axios from "axios";
import React, { useState, useEffect } from 'react';
import './AddUser.css';
import { Spinner, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useSecurity } from "./../../context/Security";
import { useUser } from "src/context/UserContext";


const departmentapi = process.env.REACT_APP_API_DEPARTMENTS;
const base = process.env.REACT_APP_BASE_API_URL;
const designationapi= process.env.REACT_APP_API_DESIGNATION;
const userapi= process.env.REACT_APP_API_USERS;

const onClickViewUser = () => {
  window.location.href = './AllUsers';
}

const AddUser = () => {
  const {encrypt} = useSecurity();
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const {user} = useUser();
  const [Roles, setRoles] = useState([]);
  const [designations, setDesignation] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    autoGenPass: true,
    mobileNo: '',
    departmentId: '',
    roleId: '',
    designationId: '',
    address: '',
    dateOfBirth: '',
    profilePicturePath: null,
  });
  const [message, setMessage] = useState(null);
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await axios.get(departmentapi,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    }

    fetchDepartments();
  }, []);


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setTodayDate(today);
  }, []);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await axios.get(`${base}/Roles`,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setRoles(response.data);
      } catch (error) {
        console.error('Error fetching Roles:', error);
      }
    }

    fetchRoles();
  }, []);

  useEffect(() => {
    async function fetchDesignation() {
      try {
        const response = await axios.get(designationapi,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });

        setDesignation(response.data);
      } catch (error) {
        console.error('Error fetching Designation:', error);
      }
    }

    fetchDesignation();
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files : value,
    }));

    // Additional real-time validation
    if (name === 'firstName' || name === 'lastName') {
      const regex = /^[A-Za-z\s]*$/;
      if (!regex.test(value)) {
        setMessage(`${name === 'firstName' ? 'First Name' : 'Last Name'} can only contain letters and spaces.`);
      } else {
        setMessage(null);
      }
    }

    if (name === 'mobileNo') {
      if (!/^\d*$/.test(value)) {
        setMessage('Mobile number must only contain digits.');
      } else if (value.length !== 10) {
        setMessage('Mobile number must be exactly 10 digits long.');
      } else {
        setMessage(null);
      }
    }
  };


  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.mobileNo === '' || formData.address === '' || formData.dateOfBirth === '' || formData.departmentId === '' || formData.roleId === '') {
      setMessage('Please fill out all required fields.');
      return false;
    }

    if (!/^[A-Za-z\s]*$/.test(formData.firstName)) {
      setMessage('First Name can only contain letters and spaces.');
      return false;
    }

    if (!/^[A-Za-z\s]*$/.test(formData.lastName)) {
      setMessage('Last Name can only contain letters and spaces.');
      return false;
    }

    if (!validateEmail(formData.email)) {
      setMessage('Email address is in an incorrect format.');
      return false;
    }

    if (!/^\d{10}$/.test(formData.mobileNo)) {
      setMessage('Mobile number must be exactly 10 digits long.');
      return false;
    }

    if (!/^[A-Za-z\s]*$/.test(formData.address)) {
      setMessage('Address can only contain letters and spaces.');
      return false;
    }

    return true;
  };


  function handleUserSubmit(event) {
    event.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    axios.post(userapi, formData,{
      headers:{
        Authorization : `Bearer ${user?.token}`,
      }
    })
      .then(res => {
        setMessage('User added successfully!');
        setLoading(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          autoGenPass: true,
          mobileNo: '',
          departmentId: '',
          roleId: '',
          designationId: '',
          address: '',
          dateOfBirth: '',
          profilePicturePath: null,
        });
        // Redirect to the notification page after user is added
        navigate(`/Users/AddPermissions/${encrypt(res.data.userId)}`);
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setMessage('Error: Email already in use. Please choose a different email.');
        } else {
          setMessage('Error adding User. Please try again.');
        }
        setLoading(false);
      });
  }

  return (
    <div className=" au container mt-2">
      <div className='text-start mb-12 d-flex justify-content-between'>
      
      </div>

      {message && (
        <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleUserSubmit}>
        {/* Username */}
        <div className="row mb-3">
          <label htmlFor="firstName" className="col-sm-1 col-form-label text-start">
            First Name<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Lastname */}
          <label htmlFor="lastName" className="col-sm-1 col-form-label text-end">
            Last Name<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Mobile Number */}
          <label htmlFor="mobileNo" className="col-sm-1 col-form-label text-start">
            MobileNo<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              placeholder="Enter Mobile No."
              required
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              maxLength="10"
            />
          </div>

        </div>

        {/* Address */}
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-1 col-form-label text-end">
            Address<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="address"
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter Address"
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Date of Birth */}
          <label htmlFor="dateOfBirth" className="col-sm-1 col-form-label text-end">
            DOB<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Enter Date Of Birth"
              required
              max={todayDate}
              onChange={handleInputChange}
            />
          </div>
          {/* Email */}
          <label htmlFor="email" className="col-sm-1 col-form-label text-end">
            Email<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Password */}
        <div className="row mb-3">
          {/* <label htmlFor="password" className="col-sm-1 col-form-label text-start"> 
            Password: 
          </label> 
          <div className="col-sm-3"> 
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              placeholder="Enter password" 
              required 
              onChange={handleInputChange} 
            /> 
          </div> */}

          {/* Department */}


          <label htmlFor="departmentId" className="col-sm-1 col-form-label text-start">
            Department<span className="text-danger">*</span>
          </label>
          <div
            className="col-sm-3">
            <select
              className="form-select"
              id="departmentId"
              name="departmentId"

              required
              onChange={handleInputChange}
            >
              <option value="">Select department</option>
              {departments.map(dep => (
                <option key={dep.departmentId} value={dep.departmentId}>{dep.departmentName}</option>
              ))}
            </select>
          </div>
          {/* Role */}
          <label htmlFor="roleId" className="col-sm-1 col-form-label text-end">
            Role<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              id="roleId"
              name="roleId"

              required
              onChange={handleInputChange}
            >
              <option value="">Select Role</option>
              {Roles.map(role => (
                <option key={role.roleId} value={role.roleId}>{role.role}</option>
              ))}
            </select>
          </div>


          {/* Designation */}
          <label htmlFor="designationId" className="col-sm-1 col-form-label text-end">
          Designation<span className="text-danger">*</span>
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              id="designationId"
              name="designationId"

              required
              onChange={handleInputChange}
            >
              <option value="">Select Designation</option>
              {designations.map(designation => (
                <option key={designation.designationId} value={designation.designationId}>{designation.designationName}</option>
              ))}
            </select>
          </div>

          
        </div>

        <div className="row mb-3">
          <div className="col-sm-3"></div>
          <div className="col-sm-9 text-end">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <><Spinner animation="border" size='sm' />Adding User...</> : " Add User"}

            </button>
          </div>
        </div>
      </form>


    </div>
  );
};

export default AddUser;
