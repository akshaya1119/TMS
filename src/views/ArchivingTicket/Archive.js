import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Alert,Row,Col,Pagination,Form } from 'react-bootstrap'; // Import Alert component for error message 
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './../../context/UserContext';


const Archived = process.env.REACT_APP_API_ARCHIEVED;
const ticketapi = process.env.REACT_APP_API_TICKET;
const baseapi = process.env.REACT_APP_BASE_URL;

const ArchiveTable = () => {
  const [archivedTickets, setArchivedTickets] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error message 
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [isImageAttachment, setIsImageAttachment] = useState(false);
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = archivedTickets.filter(ticket => {
    const term = searchTerm.toLowerCase();
    return (
      (ticket.title && ticket.title.toLowerCase().includes(term)) ||
      (ticket.status && ticket.status.toLowerCase().includes(term)) ||
      (ticket.priority && ticket.priority.toLowerCase().includes(term)) ||
      (ticket.ticketType && ticket.ticketType.toLowerCase().includes(term)) ||
      (ticket.department && ticket.department.toLowerCase().includes(term)) ||
      (ticket.project && ticket.project.toLowerCase().includes(term))
    );
  });


  const fetchArchivedTickets = async () => {
    try {
      const response = await axios.get(`${Archived}?userId=${user.userId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      setArchivedTickets(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching archived tickets:', error);

      setLoading(false);
    }
  };


  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  // Slice users for current page
  const paginatedTickets = filteredTickets.slice(
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

  useEffect(() => {
    fetchArchivedTickets();
  }, [user?.userId]);

  const handleUnarchiveTicket = async () => {
    if (!selectedTicket || !user?.token || !user?.userId) {
      console.error('Missing required information for unarchiving ticket.');
      return;
    }

    try {
      await axios.post(
        `${ticketapi}/${selectedTicket.ticketId}/unarchive?userId=${user.userId}`,
        {}, // Payload, if needed
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      window.location.reload()
      // Fetch updated list of archived tickets
      fetchArchivedTickets();
    } catch (error) {
      console.error('Error unarchiving ticket:', error.response ? error.response.data : error.message);
      setError('Failed to unarchive the ticket.');
    } finally {
      handleCloseConfirmationModal();
    }
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setModalShow(true);
  };

  const handleShowConfirmationModal = (ticket) => {
    setSelectedTicket(ticket);
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setSelectedTicket(null);
    setShowConfirmationModal(false);
  };



  return (
    <div className='mt-6 table-responsive'>
      {/* Display error message if there's an error */}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>


        <Col md={10}>
        </Col>
        <Col md={2}> <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-3 text-start"

        />
        </Col>
      </Row>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>TicketID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>TicketType</th>
              <th>DueDate</th>
              <th>Department</th>
              <th>ProjectType</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTickets.map((ticket, index) => (
              <tr key={ticket.ticketId}>
                <td>{index + 1}</td>
                <td>{ticket.ticketId}</td>
                <td>{ticket.title}</td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.ticketType}</td>
                <td>{new Date(ticket.dueDate).toLocaleString()}</td>
                <td>{ticket.department}</td>
                <td>{ticket.project}</td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='me-3'>
                      <FontAwesomeIcon icon={faEye} className="text-success" onClick={() => handleViewTicket(ticket)} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faRepeat} className="text-danger" onClick={() => handleShowConfirmationModal(ticket)} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
        </>
      )}

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Unarchive</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to unarchive ticket {selectedTicket ? selectedTicket.ticketId : ''}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Cancel
          </Button>
          <Button variant="danger"
            onClick={handleUnarchiveTicket}>
            Unarchive
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Ticket Details Modal */}
      {selectedTicket && (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Ticket Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Title: {selectedTicket.title}</p>
            <p>Description: {selectedTicket.description}</p>
            <p>Creator ID: {selectedTicket.creatorName}</p>
            <p>Assignee ID: {selectedTicket.assigneeName}</p>
            <p>Attachments:</p>
            {selectedTicket.attachment && (
              <div>
                {isImageAttachment && /\.(png|jpg|jpeg|gif|bmp)$/i.test(selectedTicket.attachment) ? (
                  <img src={`${baseapi}/${selectedTicket.attachment.replace('wwwroot/', '')}`} alt="Attachment" className="img-fluid" />
                ) : (
                  <p>
                    <a href={`${baseapi}/${selectedTicket.attachment.replace('wwwroot/', '')}`} target="_blank" rel="noopener noreferrer">
                      View Attachment
                    </a>
                  </p>
                )}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ArchiveTable;
