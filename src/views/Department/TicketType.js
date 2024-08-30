import React from 'react';
import { ListGroup, Button, Form, Collapse } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; // Import PropTypes 

const Tickettype = ({ ticketType, handleEdit, handleEditSubmitTicketType, newTicketType, setNewTicketType, editItem, searchQuery,errorTicketType }) => {

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 mx-auto bg-white rounded shadow">
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr className="table-header mt-3">
                                    <th scope="col" className="col-3">S.No</th>
                                    <th scope="col" className="col-6">Ticket Type</th>
                                    <th scope="col" className="col-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ticketType
                                    .filter((ticket) =>
                                        ticket.ticketType?.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((ticket,index) => (
                                        <tr key={ticket.ticketTypeId} className="table-row mt-1">

                                            <td className="col col-3" data-label="SNo.">{index+1}</td>
                                            {/* <td className="col col-6" data-label="TicketType">{ticket.ticketType}</td> 
                                            <td className="col col-3" data-label="Actions">  */}
                                            {editItem && editItem.ticketTypeId === ticket.ticketTypeId ? (
                                                <>
                                                    {/* <Form onSubmit={(e) => handleEditSubmitTicketType(e, ticket.ticketTypeId, newTicketType)}>  */}
                                                    <td className="col col-6"><input
                                                        className="form-control"
                                                        type="text"
                                                        value={newTicketType || ticket.ticketType}
                                                        onChange={(e) => setNewTicketType(e.target.value)}
                                                    />
                                                    </td>
                                                    <td className="col col-3">

                                                        <Button onClick={(e) => handleEditSubmitTicketType(e, ticket.ticketTypeId, newTicketType)} variant="success" size="sm">
                                                            Save
                                                        </Button>
                                                    </td>
                                                    {/* </Form>  */}
                                                </>

                                            ) : (
                                                <>
                                                    <td className="col col-6" data-label="TicketType">{ticket.ticketType}</td>
                                                    <td>
                                                        <Button variant="outline-primary" size="sm" onClick={() => handleEdit(ticket)}>
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </Button>
                                                    </td>
                                                </>

)}


                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
                                    {errorTicketType && <div className='text-danger text-end'>{errorTicketType}</div>}
        </div>
    );
};
Tickettype.propTypes = { // Define prop types 
    ticketType: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleEditSubmitTicketType: PropTypes.func.isRequired,
    newTicketType: PropTypes.string.isRequired,
    setNewTicketType: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    editItem: PropTypes.object,
    errorTicketType : PropTypes.string.isRequired,
};
export default Tickettype;
