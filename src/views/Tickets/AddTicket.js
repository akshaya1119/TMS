import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useUser } from './../../context/UserContext';
import { Spinner } from 'react-bootstrap';
import { Form, useNavigate } from "react-router-dom";
import Select from 'react-select';
import addNotification from "react-push-notification";
import greentick from './images/greentick.jpg';

const dashboardapi = process.env.REACT_APP_MY_SERVER;
const userapi = process.env.REACT_APP_API_USERS;
const TicketTypeapi = process.env.REACT_APP_API_TICKETTYPE;
const ProjectTypeapi = process.env.REACT_APP_API_PROJECTTYPE;
const Ticketapi = process.env.REACT_APP_API_TICKET;

const AddTicket = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [ticketType, setTicketType] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [Assignee, setAssignee] = useState([]);
  const [formData, setFormData] = useState({
    creatorName: user.firstName,
    priority: 'low',
    title: '',
    departmentId: '',
    ticketTypeId: '',
    status: 'Open',
    projectId: '',
    dueDate: '',
    description: '',
    assigneeId: '',
    attachments: null
  });
  const [message, setMessage] = useState(null);

  const ClickToNotify = () => {


    addNotification({
      title: 'Ticket',
      message: 'New ticket has been assigned',
      duration: 11000,
      icon: greentick,
      native: true,
      onClick: () => window.location = `${dashboardapi}`,

    });
  }


  useEffect(() => {
    async function fetchAssignee() {
      try {
        const response = await axios.get(userapi,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setAssignee(response.data);
      } catch (error) {
        console.error('Error fetching Assignee:', error);
      }
    }

    fetchAssignee();
  }, []);

  useEffect(() => {
    async function fetchTickettype() {
      try {
        const response = await axios.get(TicketTypeapi,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setTicketType(response.data);
      } catch (error) {
        console.error('Error fetching Ticket Type:', error);
      }
    }
    
    fetchTickettype();
  }, []);

  useEffect(() => {
     // Moved inside the useEffect
  }, [ticketType]); // Added ticketType to the dependency array

  useEffect(() => {
    async function fetchProjecttype() {
      try {
        const response = await axios.get(ProjectTypeapi,{
          headers:{
            Authorization : `Bearer ${user?.token}`,
          }
        });
        setProjectType(response.data);
      } catch (error) {
        console.error('Error fetching Project Type:', error);
      }
    }

    fetchProjecttype();
  }, []);

  // Modify handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target || e;

    if (name === 'assigneeId') {
      const selectedAssignee = Assignee.find(assignee => assignee.userId === value);
      const isSelfAssign = value === user.userId
      const newDepartment = isSelfAssign ? selectedAssignee.departmentname : (selectedAssignee?.departmentname || '');

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        departmentId: selectedAssignee?.departmentId || '', // Update departmentId as well
        department: newDepartment,
        status: isSelfAssign ? 'Self-Assigned' : 'Open',
      }));
    } else if (name === 'departmentId') {
      setFormData((prevData) => ({
        ...prevData,
        departmentId: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

  };


  // ...

  // Modify useEffect function for handling assignee changes
  useEffect(() => {
    const selectedAssignee = Assignee.find((assignee) => assignee.userId === formData.assigneeId);
    const isSelfAssign = formData.assigneeId === user.userId
    const newDepartment = isSelfAssign ? selectedAssignee?.departmentname : (selectedAssignee?.departmentname || '');
  
    setFormData((prevData) => ({
      ...prevData,
      departmentId: selectedAssignee?.departmentId || '',
      department: newDepartment,
      status: isSelfAssign ? 'Self-Assigned' : 'Open',
    }));
  }, [formData.assigneeId, Assignee, user]);
  


  // const handleFileChange = (e) => {
  //   setFormData(prevData => ({
  //     ...prevData,
  //     attachments: e.target.files
  //   }));
  // };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);    
    setFormData(prevData => ({
      ...prevData,
      attachments: [...prevData.attachments || [], ...newFiles]
    }));
  };
  

  const handleTicketSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formattedParams = Object.entries(formData)
  .filter(([key, value]) => key !== 'department' ) // Exclude departmentName and creatorName
  .map(([key, value]) => `${key === 'creatorName' ? 'creatorId' : key}=${key === 'creatorName' ? user.userId : value}`)
  .join('&');

  const currentDate = new Date().toISOString().split('T')[0];
    if (formData.dueDate < currentDate) {
      setMessage('Due Date must be greater than today or equal to today.');
      return;
    }


  

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'attachments') {
        if (value) {
          for (let i = 0; i < value.length; i++) {
            formDataToSend.append('attachments', value[i]);
          }
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const res = await axios.post(`${Ticketapi}?${formattedParams}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization : `Bearer ${user?.token}`,
        },
      });

      setMessage('Ticket added successfully!');
      setLoading(false);

      ClickToNotify();


      setFormData({
        creatorName: user.firstName,
        priority: 'low',
        title: '',
        departmentId: '',
        ticketTypeId: '',
        status: 'Open',
        projectId: '',
        dueDate: '',
        description: '',
        assigneeId: '',
        attachments: null
      });
      navigate(`/Tickets/AddTicket/${res.data.userId}`);
    } catch (err) {
      console.error(err);
      setMessage('Error adding ticket. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-between'></div>

      {message && (
        <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleTicketSubmit}>
        {/* ticketId */}
        <div className="row mb-3">

          <label htmlFor="creatorName" className="col-sm-3 col-form-label text-end">
            Creator
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="creatorName"
              name="creatorName"
              placeholder="Enter your Name"
              required
              value={user.firstName}
              onChange={handleInputChange}
              disabled
            />

          </div>

          {/* priority */}
          <label htmlFor="assigneeId" className="col-sm-3 col-form-label text-end">
            Assignee Name<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <Select
              options={Assignee.map((Setas) => ({
                label: Setas.fullName,
                value: Setas.userId,
              }))}
              value={formData.assigneeId ? { label: Assignee.find(t=>t.userId === formData.assigneeId).fullName, value: formData.assigneeId } : null}
              onChange={(selectedOption) =>
                handleInputChange({
                  target: { name: 'assigneeId', value: selectedOption.value },
                })
              }
             
              isSearchable
              placeholder="Select Assignee"

             
            />
          </div>
        </div>

        {/* title */}
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-3 col-form-label text-end">
            Title<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter title"
              required
              onChange={handleInputChange}
            />
          </div>
          {/* department */}
          <label htmlFor="priority" className="col-sm-3 col-form-label text-end">
            Priority<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              id="priority"
              name="priority"
              placeholder="Select priority"
              required
              onChange={handleInputChange}
            >
              <option defaultValue>Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* Ticket Type */}
        <div className="row mb-3">
          <label htmlFor="ticketTypeId" className="col-sm-3 col-form-label text-end">
            Ticket Type<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <Select
              options={ticketType.map((TT) => ({
                label: TT.ticketType,
                value: TT.ticketTypeId,
              }))}
              value={formData.ticketTypeId ? { label: ticketType.find(t => t.ticketTypeId === formData.ticketTypeId).ticketType, value: formData.ticketTypeId } : null}
              onChange={(selectedOption) =>
                handleInputChange({
                  target: { name: 'ticketTypeId', value: selectedOption.value },
                })
              }
              isSearchable
              placeholder="Select Ticket Type"
            />
          </div>
          {/* status */}
          <label htmlFor="status" className="col-sm-3 col-form-label text-end">
            Status
          </label>
          <div className="col-sm-3">
            <input
              className="form-control"
              id="status"
              name="status"
              value={formData.status}
              required
              onChange={handleInputChange}
              readOnly
              disabled
            />
          </div>
        </div>


        {/* Project Type */}
        <div className="row mb-3">

          <label htmlFor="projectId" className="col-sm-3 col-form-label text-end">
            Project Type<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <Select
              options={projectType.map((pt) => ({
                label: pt.projectTypes,
                value: pt.projectId,
              }))}
              value={formData.projectId ? { label: projectType.find((pt) => pt.projectId === formData.projectId).projectTypes, value: formData.projectId } : null}
              onChange={(selectedOption) => handleInputChange
                ({
                  target: { name: 'projectId', value: selectedOption.value }
                })}
              isSearchable
              placeholder="Select Project Type"
              required
            />


          </div>
          {/* Due Date */}
          <label htmlFor="dueDate" className="col-sm-3 col-form-label text-end">
            Due Date<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              placeholder="Select Due Date"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Creator ID */}
        <div className="row mb-3">
          <label htmlFor="ticketId" className="col-sm-3 col-form-label text-end">
            Ticket ID:
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="ticketId"
              name="ticketId"
              placeholder="Ticket ID"
              required
              onChange={handleInputChange}
              disabled
              value='0'
            />
          </div>

          {/* Assigned To */}
          <label htmlFor="department" className="col-sm-3 col-form-label text-end">
            Department
          </label>
          <div className="col-sm-3">

            <Select
              value={{ value: formData.departmentId, label: formData.department }}
              components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              isDisabled
            />
          </div>

        </div>


        {/* description */}
        <div className="row mb-3">
          <label htmlFor="description" className="col-sm-3 col-form-label text-end">
            Description<span className="text-danger"> * </span>
          </label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter description"
              rows="4"
              required
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="attachments" className="col-sm-3 col-form-label text-end">
            Attachments:
          </label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              id="attachments"
              name="attachments"
              multiple
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-3"></div>
          <div className="col-sm-9 text-end">
            <button type="submit" className="btn btn-primary" disabled={loading} >
              {loading ? <><Spinner animation="border" size='sm' /> Adding Ticket...</> : "Add Ticket"}
            </button>
          </div>
        </div>
      </form >

    </div >
  );
};

export default AddTicket;
