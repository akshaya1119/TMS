import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSecurity } from './../../context/Security';
import { useUser } from 'src/context/UserContext';

const userapi = process.env.REACT_APP_API_USERS;
const base = process.env.REACT_APP_BASE_API_URL;
const departmentapi = process.env.REACT_APP_API_DEPARTMENTS;
const designationapi = process.env.REACT_APP_API_DESIGNATION;


const EditUser = () => {
    const [message, setMessage] = useState(null);
    const { userId } = useParams();
    const { decrypt } = useSecurity();
    const decryptid = decrypt(userId);
    const {user} = useUser();
    const [departments, setDepartments] = useState([]);
    const [Roles, setRoles] = useState([]);
    const [Designation, setDesignation] = useState([]);
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobileNo: '',
        departmentId: '',
        designationId: '',
        roleId: '',
        address: '',
        dateOfBirth: '',
    });
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        axios.get(`${userapi}/${decryptid}`,{
            headers:{
              Authorization : `Bearer ${user?.token}`,
            }
          })
            .then(res => {
                setFormData(res.data);
            })
            .catch(err => {
                console.log(err);
                setMessage('Error updating user. Please try again.');
            });
    }, [decryptid]);
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

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? e.target.files : value,
        }));
    };

    function handleUserSubmit(event) {
        event.preventDefault();
        axios.put(`${userapi}/${decryptid}`, formData,{
            headers:{
              Authorization : `Bearer ${user?.token}`,
            }
          })
            .then(res => {
                setMessage('User updated successfully!');
            })
            .catch(err => {
                console.log(err);
                setMessage('Error updating user. Please try again.');
            });
    }
 

    return (
        <div className="container mt-5">
            <h4 className='mb-3'>Edit the Details of {formData.firstName}</h4>

            {message && (
                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {message}
                </div>
            )}

            <form onSubmit={handleUserSubmit}>
                {/* Username */}
                <div className="row mb-3">
                    <label htmlFor="firstName" className="col-sm-1 col-form-label text-start">
                        FirstName:
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter FirstName"
                            required
                            onChange={handleInputChange}
                            value={formData.firstName}
                            disabled
                        />
                    </div>

                    {/* Lastname */}
                    <label htmlFor="lastName" className="col-sm-1 col-form-label text-end">
                        LastName:
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter lastName"
                            required
                            onChange={handleInputChange}
                            value={formData.lastName}
                            disabled
                        />
                    </div>
                    {/* Date of Birth */}
                       
                    <label htmlFor="dateOfBirth" className="col-sm-1 col-form-label text-end">
                        DOB:
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="date"
                            className="form-control"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            placeholder="Enter Date Of Birth"
                            required
                            onChange={handleInputChange}
                            value={formatDate(formData.dateOfBirth)}
                            disabled
                        />
                    </div>

                </div>

                {/* Address */}
                <div className="row mb-3">
                    <label htmlFor="address" className="col-sm-1 col-form-label text-end">
                        Address:
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
                            value={formData.address}
                        />
                    </div>


                    {/* Mobile Number */}
                    <label htmlFor="mobileNo" className="col-sm-1 col-form-label text-start">
                        MobileNo:
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
                            value={formData.mobileNo}
                        />
                    </div>

                    {/* Email */}
                    <label htmlFor="email" className="col-sm-1 col-form-label text-end">
                        Email:
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
                            value={formData.email}
                            disabled
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
                            value={formData.password}
                        />
                    </div> */}

                    {/* Department */}


                    <div className="row mb-3">
                    <label htmlFor="departmentId" className="col-sm-1 col-form-label text-start">
                        Department:
                    </label>
                    <div className="col-sm-3">
                        <select
                            className="form-select"
                            id="departmentId"
                            name="departmentId"
                            required
                            onChange={handleInputChange}
                            value={formData.departmentId}
                        >
                            <option value="">Select department</option>
                            {departments.map(dep => (
                                <option key={dep.departmentId} value={dep.departmentId}>{dep.departmentName}</option>
                            ))}
                        </select>
                    </div>
                    {/* Designation */}
                    <label htmlFor="designationId" className="col-sm-1 col-form-label text-start">
                        Designation:
                    </label>
                    <div className="col-sm-3">
                        <select
                            className="form-select"
                            id="designationId"
                            name="designationId"
                            required
                            onChange={handleInputChange}
                            value={formData.designationId}
                        >
                            <option value="">Select Designation</option>
                            {Designation.map(designation => (
                                <option key={designation.designationId} value={designation.designationId}>{designation.designationName}</option>
                            ))}
                        </select>
                    </div>
                    <label htmlFor="roleId" className="col-sm-1 col-form-label text-end">
                        Role:
                    </label>
                    <div className="col-sm-3">
                        <select
                            className="form-select"
                            id="roleId"
                            name="roleId"
                            required
                            onChange={handleInputChange}
                            value={formData.roleId}
                        >
                            <option value="">Select Role</option>
                            {Roles.map(role => (
                                <option key={role.roleId} value={role.roleId}>{role.role}</option>
                            ))}
                        </select>
                    </div>
                </div>

                    {/* Confirm Password
          <label htmlFor="confirmPassword" className="col-sm-3 col-form-label text-end">
            Confirm Password:
          </label>
          <div className="col-sm-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              onChange={handleInputChange}
            /> */}
                    {/* </div> */}
                </div>

                <div className="row mb-3">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-end">
                        <button type="submit" className="btn btn-primary">
                            Update User
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
