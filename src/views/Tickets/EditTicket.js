import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Form, Modal, Spinner, Tooltip } from 'react-bootstrap';
import './EditTicket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './../../context/UserContext';
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import { useSecurity } from './../../context/Security';

const baseapi = process.env.REACT_APP_BASE_URL;
const userapi = process.env.REACT_APP_API_USERS;
const ticketapi = process.env.REACT_APP_API_TICKET;
const TicketTypeapi = process.env.REACT_APP_API_TICKETTYPE;
const Commentapi = process.env.REACT_APP_API_TICKETFLOW_BY_COMMENTS;
const TicketFlowapi = process.env.REACT_APP_API_TICKETFLOW;
const markcompleted = process.env.REACT_APP_API_TICKET_COMPLETED;

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                        // remove formatting button
]

const EditTicket = () => {
  const { user } = useUser();
  const { ticketId } = useParams();
  const { decrypt } = useSecurity();
  const decryptid = decrypt(ticketId);
  const [formData, setFormData] = useState({
    ticketId: '',
    creatorName: '',
    priority: '',
    title: '',
    department: '',
    ticketType: '',
    status: '',
    project: '',
    dueDate: '',
    description: '',
    assigneeName: '',
    userAssigneeName: '',
    userTicketType: '',
    userStatus: '',
    userPriority: '',
    userComment: '',
  });
  const [showUserComment, setShowUserComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [message, setMessage] = useState(null);
  const [oldDetails, setOldDetails] = useState(null);
  const [assignees, setAssignees] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [isImageAttachment, setIsImageAttachment] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false)
  const [attachments, setAttachments] = useState([]);
  const[isAuthorized, setIsAuthorized] = useState(true);


  const fetchTicketDetails = async () => {
    try {
      const [ticketResponse, commentsResponse, assigneesResponse, ticketTypesResponse] = await Promise.all([
        axios.get(`${ticketapi}/${decryptid}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          }
        }),
        axios.get(`${Commentapi}/${decryptid}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          }
        }).catch(() => ({ data: [] })),
        axios.get(userapi, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          }
        }),
        axios.get(TicketTypeapi, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          }
        }),
      ]);
      setFormData(ticketResponse.data);
      setOldDetails(ticketResponse.data);
      setComments(commentsResponse.data);
      setAssignees(assigneesResponse.data);
      setCurrentUser(assigneesResponse.data.filter(cu => cu.userId === user.userId)[0]);
      setTicketTypes(ticketTypesResponse.data);
    } catch (error) {
      console.error('Error fetching Ticket, Comments, Assignees, and Ticket Types:', error);
      setMessage('Error fetching ticket, comments, assignees, and ticket types. Please try again.');
    }
  };

  useEffect(() => {
    fetchTicketDetails();
    setCurrentDateTime(new Date().toLocaleString());
  }, [decryptid]);

  // Function to sort comments by timestamp in descending order (newest first) 
  const sortCommentsByTimestampDesc = () => {
    const sortedComments = [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setComments(sortedComments);
  };

  // Function to sort comments by timestamp in ascending order (oldest first) 
  const sortCommentsByTimestampAsc = () => {
    const sortedComments = [...comments].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    setComments(sortedComments);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleComments = () => {
    setShowComments(prevState => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files : value,
    }));
  };


  const handleFileChange = (e) => {
    // Update the attachedFile state when a file is selected
    setAttachedFile(e.target.files[0]);
  }; 
  
 

  const handleToggleUserComment = () => {
    if (comments.length > 0) {
      const lastComment = comments[comments.length - 1];
      setFormData({
        ...formData,
        userAssigneeName: lastComment.newAssigneeName,
        userAssigneeId: lastComment.newAssigneeId,
        userTicketType: lastComment.newTicketType,
        userStatus: lastComment.newStatus,
        userPriority: lastComment.newPriority,
        userTicketTypeId: lastComment.newTicketTypeId,
      });
// Add this logging statement
    } else {
      // If there are no comments, set the initial state of the form fields with the details of the ticket
      setFormData({
        ...formData,
        userAssigneeName: formData.assigneeName,
        userAssigneeId: formData.assigneeId,
        userTicketType: formData.ticketType,
        userStatus: formData.status,
        userPriority: formData.priority,
        userTicketTypeId: formData.ticketTypeId,
      });
    }
    setShowUserComment(!showUserComment);
  };





  const handleUserCommentChange = (value) => {
    setNewComment(value);
  };

  // const handleUserSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   // Check if the current user is the creator, assignee, or reassignee
  //   const isCreator = currentUser.fullName === formData.creatorName;
  //   const isAssignee = currentUser.fullName === formData.assigneeName;
  //   const isReassignee = currentUser.fullName === formData.userAssigneeName;

  //   if (!isCreator && !isAssignee && !isReassignee) {
  //     setMessage('You are not authorized to comment on this ticket.');
  //     return;
  //   }

  //   try {
  //     const params = {
  //       userid: user.userId,
  //       prev: formData.assigneeId,
  //       pre: formData.status,
  //       newp: formData.userPriority,
  //       pret: formData.userTicketTypeId,
  //       newt: formData.userTicketTypeId,
  //       newa: formData.userAssigneeId,
  //       news: formData.userStatus,
  //       prep: formData.priority,
  //       ticketid: formData.ticketId,
  //       timestamp: new Date().toISOString(),
  //       comment: newComment,
  //     };

  //     const url = `${TicketFlowapi}?${new URLSearchParams(params).toString()}`;

  //     let bodyFormData = new FormData();

  //     if (attachedFile) {
  //       // Append the file to the FormData
  //       bodyFormData.append('attachment', attachedFile, attachedFile.name);
  //     }

  //     // Log FormData and file details to the console

  //     const response = await axios.post(url, bodyFormData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${user?.token}`,
  //       },
  //     });


  //     setComments([...comments, response.data]);
  //     setNewComment('');
  //     setMessage('Comment submitted successfully!');
  //     await fetchTicketDetails()
  //     handleToggleUserComment()
  //     setLoading(false);
  //     setOldDetails(formData);
  //   } catch (error) {
  //     console.error('Error submitting comment:', error);
  //     setMessage('Error submitting comment. Please try again.');
  //   }
  // };

  useEffect(() => {
    const isCreator = currentUser.fullName === formData.creatorName;
    const isAssignee = currentUser.fullName === formData.assigneeName;
    const isReassignee = currentUser.fullName === formData.userAssigneeName;
    
    setIsAuthorized(isCreator || isAssignee || isReassignee);
  }, [currentUser, formData]);


  const handleUserSubmit = async (event) => {
    event.preventDefault();
  

    // Check if the current user is the creator, assignee, or reassignee
    if (!isAuthorized) {
      setMessage('You are not authorized to comment on this ticket.');
      return;
    }
  setLoading(true);
    try {
      const params = {
        userid: user.userId,
        prev: formData.assigneeId,
        pre: formData.status,
        newp: formData.userPriority,
        pret: formData.userTicketTypeId,
        newt: formData.userTicketTypeId,
        newa: formData.userAssigneeId,
        news: formData.userStatus,
        prep: formData.priority,
        ticketid: formData.ticketId,
        timestamp: new Date().toISOString(),
        comment: newComment,
      };

      const url = `${TicketFlowapi}?${new URLSearchParams(params).toString()}`;

      let bodyFormData = new FormData();

      if (attachedFile) {
        // Append the file to the FormData
        bodyFormData.append('attachment', attachedFile, attachedFile.name);
      }

      // Log FormData and file details to the console

      const response = await axios.post(url, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user?.token}`,
        },
      });


      setComments([...comments, response.data]);
      setNewComment('');
      setMessage('Comment submitted successfully!');
      await fetchTicketDetails()
      handleToggleUserComment()
      setLoading(false);
      setOldDetails(formData);
    } catch (error) {
      console.error('Error submitting comment:', error);
      setMessage('Error submitting comment. Please try again.');
    }
  };


  const handleShowAttachmentModal = () => {
    const attachments = formData.attachment.split(';').filter(Boolean);

    // Check if any of the attachments are images
    const imageAttachments = attachments.filter((attachment) =>
      /\.(png|jpg|jpeg|gif|bmp)$/i.test(attachment)
    );

    // Check if any of the attachments are non-images


    if (attachments.length === 1) {
      // If there's only one attachment, handle it based on its type
      const singleAttachmentUrl = `${baseapi}/${attachments[0].replace('wwwroot/', '')}`;
      if (imageAttachments.length > 0) {
        // Single attachment is an image, show in modal
        setAttachments(attachments);
        setShowAttachmentModal(true);
      } else {
        // Single attachment is a non-image, download it
        window.open(singleAttachmentUrl, '_blank');
      }
    } else {
      // Multiple attachments or one image and one or more non-images
      setAttachments(attachments);
      setShowAttachmentModal(true);
    }
  };


  const handleCloseAttachmentModal = () => {
    setShowAttachmentModal(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const markAsCompleted = async () => {
    try {
      // Send a request to update the ticket status to "Completed"
      const response = await axios.put(`${markcompleted}/${decryptid}`, {
        status: 'Completed',
      }, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        }
      });


      // Check if the update was successful
      if (response.status === 200 || response.status === 204) {
        // Update local state to reflect the new status
        setFormData((prevData) => ({
          ...prevData,
          status: 'Completed',
        }));
        setMessage('Ticket marked as completed successfully!');
      } else {
        setMessage('Error marking ticket as completed. Please try again.');
      }
    } catch (error) {
      console.error('Error marking ticket as completed:', error);
      setMessage('Error marking ticket as completed.');
    }
  };

  return (
    <div className="container mt-3">
      <div className='d-flex justify-content-between '>
        <h4>Ticket Section</h4>
        {user.userId === formData.creatorId && (
          <Button onClick={markAsCompleted} disabled={formData.status === 'Completed'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hovered ? <FontAwesomeIcon icon={faCheck} /> : ' '}
            {formData.status === 'Completed' ? 'Completed' : 'Mark as Completed'}

          </Button>
        )}
      </div>

      <Row>
        <Col>
          <label htmlFor="creatorName" className="col-form-label text-end">
            CreatorID:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="creatorName"
              name="creatorName"
              value={formData.creatorName}
              required
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="title" className="col-form-label text-end">
            Title:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="department" className="col-form-label text-end">
            Department:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="project" className="col-form-label text-end">
            Project:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="project"
              name="project"
              value={formData.project}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>
        <Col>
          <label htmlFor="dueDate" className="col-form-label text-end">
            Due Date:
          </label>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate ? formData.dueDate.split('T')[0] : ''}
              required
              onChange={handleInputChange}
              disabled
            />
          </div>
        </Col>


        {/* Attachment Modal */}
        <Modal show={showAttachmentModal} onHide={handleCloseAttachmentModal}>
          <Modal.Header closeButton>
            <Modal.Title>Attachments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {attachments.length > 0 && (
              <div>
                {attachments.map((attachment, index) => {
                  const isImageAttachment = /\.(png|jpg|jpeg|gif|bmp)$/i.test(attachment);
                  const attachmentUrl = `${baseapi}/${attachment.replace('wwwroot/', '')}`;

                  return (
                    <div key={index} className="mb-2">
                      {isImageAttachment ? (
                        <img
                          src={attachmentUrl}
                          alt={`Attachment ${index + 1}`}
                          className="img-fluid"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      ) : (
                        <p>
                          <a href={attachmentUrl} target="_blank" rel="noopener noreferrer">
                            View Attachment {index + 1}
                          </a>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAttachmentModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>







      </Row>

      <h5 className="mt-3 d-flex align-items-center justify-content-between">
        <div>
          Discussion Forum
          <Button className="ms-2 btn-sm" onClick={sortCommentsByTimestampDesc}>
            Sort by Newest
          </Button>
          <Button className="ms-2 btn-sm" onClick={sortCommentsByTimestampAsc}>
            Sort by Oldest
          </Button>
        </div>
        <div>
          <Button onClick={toggleCollapse}>
            {collapsed ? <i className="fa-solid fa-angles-left"></i> : <i className="fa-solid fa-angles-right"></i>}
          </Button>
        </div>

      </h5>

      {message && (
        <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message}
        </div>
      )}

      <Row>
        <Col md={collapsed ? 12 : 9}>
          {/* main data  */}
          <Row>
            <Col md={7}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <label htmlFor="description" className="col-form-label text-end fs-3">
                  Description:
                </label>
                <Button className='btn-sm' variant="outline-primary" disabled = {!isAuthorized} onClick={handleToggleUserComment}>
                <FontAwesomeIcon 
                icon={faCommentDots} 
                className=" fs-4 " d
               // ata-toggle="tooltip" 
                data-html="true" 
                title="Comment Below" 
                 
                />
                </Button>
               
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  required
                  onChange={handleInputChange}
                  rows="6"
                 
               disabled
                />

                {/* Show Attachment Button */}
                {formData.attachment && (
                  <Col>
                    <Button className="mt-3" onClick={handleShowAttachmentModal}>
                      <FontAwesomeIcon icon={faPaperclip} className="me-2" />
                      Show Attachment
                    </Button>
                  </Col>
                )}
              </div>
            </Col>
            <Col md={5}>
              <h5 className="mb-3">Ticket Information</h5>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Assignee:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.assigneeName} onChange={handleInputChange} name="assigneeName" disabled>
                      <option value="">Select Assignee</option>
                      {assignees.map((assignee) => (
                        <option key={assignee.id} value={assignee.id}>
                          {assignee.fullName}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Ticket Type:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.ticketType} onChange={handleInputChange} name="ticketType" disabled>
                      <option value="">Select Ticket Type</option>
                      {ticketTypes.map((type) => (
                        <option key={type.ticketTypeId} value={type.ticketType}>
                          {type.ticketType}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Status:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.status} onChange={handleInputChange} name="status" disabled>
                      <option value="Open">Open</option>
                      <option value="Pending">Pending</option>
                      <option value="Self-Assigned">Self-Assigned</option>
                      <option value="Completed">Completed</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Priority:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select value={formData.priority} onChange={handleInputChange} name="priority" disabled>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          {/* my commente */}

          {showUserComment && (
            <Row>
              <Col md={7}>
                <div className="mt-3">
                  <label htmlFor="userComment" className="col-form-label text-end">
                    Your Comment:
                  </label>
                  <div className="mb-3">
                    {/* Use ReactQuill only for the user's comment */}
                    <ReactQuill
                      value={newComment}
                      onChange={handleUserCommentChange}
                      modules={{ toolbar: toolbarOptions }}
                    />
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="attachedFile">Attach File</Form.Label>
                  <Form.Control
                    type="file"
                    id="attachedFile"
                    name="attachedFile"
                    multiple
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Row className="mt-3">
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Assignee:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userAssigneeId} onChange={handleInputChange} name="userAssigneeId">
                          <option value="">Select Assignee </option>
                          {assignees.map((assignee) => (
                            <option key={assignee.userId} value={assignee.userId}>
                              {assignee.fullName}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Ticket Type:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userTicketTypeId} onChange={handleInputChange} name="userTicketType">
                          <option value="">Select Ticket Type</option>

                          {ticketTypes.map((type) => (
                            <option key={type.ticketTypeId} value={type.ticketTypeId}>
                              {type.ticketType}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Status:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userStatus} onChange={handleInputChange} name="userStatus">
                          <option value="">Select Status</option>
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Self-Assigned">Self-Assigned</option>
                          <option value="Completed">Completed</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4}>
                        Priority:
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Select value={formData.userPriority} onChange={handleInputChange} name="userPriority">
                          <option value="">Select Priority</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Form>
                </Row>
                <Button 
                className="mt-3" 
                onClick={handleUserSubmit} 
                disabled={loading}
                 >
                  {loading ? <><Spinner animation="border" size='sm' /> Submitting Comment...</> : "Submit Your Comment"}

                </Button>
              </Col>
            </Row>
          )}
          {/* comments   */}

          {comments && comments.length > 0 && (
            <div>
              {/* Button to expand or collapse comments */}
              <div className='text-end'>
                <Button
                  variant="primary"
                  onClick={handleToggleComments}
                  className="mb-3 "

                >
                  {showComments ? <i className="fa-solid fa-angles-up"></i> : <i className="fa-solid fa-angles-down"></i>}
                </Button></div>

              {/* Conditionally render comments based on showComments state */}
              {showComments && (

                comments.map((comment, index) => (
                  <>
                    <Row key={index} className='border p-2 align-items-center'>
                      <Col md={7}>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <label htmlFor="description" className="col-form-label text-end">
                            <p>Comment by {comment.userName} at {new Date(comment.timestamp).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                          </label>
                        </div>
                        <div className="mb-3">
                          <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
                          {/* Use dangerouslySetInnerHTML to render HTML tags */}
                          {comment.attachment && (
                            <div>
                              <strong></strong>
                              <a href={`${baseapi}/${comment.attachment.replace('wwwroot/', '')}`} target="_blank" rel="noopener noreferrer">
                                <Button>{'View Attachment'}</Button>
                              </a>
                            </div>
                          )}
                        </div>



                      </Col>
                      <Col md={5}>
                        <Form>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={4}>
                              Assignee:
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Select name="assigneeName" disabled>
                                <option value="">{comment.newAssigneeName}</option>

                              </Form.Select>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={4}>
                              Ticket Type:
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Select name="ticketType" disabled>
                                <option value="">{comment.newTicketType}</option>

                              </Form.Select>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={4}>
                              Status:
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Select name="status" disabled>
                                <option value="">{comment.newStatus}</option>

                              </Form.Select>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={4}>
                              Priority:
                            </Form.Label>
                            <Col sm={8}>
                              <Form.Select name="priority" disabled>
                                <option value="">{comment.newPriority}</option>

                              </Form.Select>
                            </Col>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>


                  </>

                )))
              }
            </div>
          )}


        </Col>
        {!collapsed && (
          <Col md={3} className="border-start border-end border-2">
            {/* Progress Tracker */}
            <div>
              <h5 className="mb-3">Progress Tracker</h5>
              <ul className="list-group">
                {comments.map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{new Date(comment.timestamp).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</strong>
                    <br />
                    {comment.newAssigneeName && (
                      <span>
                        Assigned to: {comment.newAssigneeName}
                      </span>
                    )}
                  </li>
                ))}

              </ul>

            </div>
          </Col>
        )}
      </Row>
    </div>

  );
};

export default EditTicket;

