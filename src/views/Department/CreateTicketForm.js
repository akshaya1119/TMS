import React from 'react'; 
import { Button, Form, Collapse,Spinner } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; 
 
const CreateTicketForm = ({ newTicketType, setNewTicketType, handleCreateTicketType, openTicketType,loading, errorMessage }) => { 
    return ( 
        <Collapse in={openTicketType}> 
            <div id="create-TicketType-collapse"> 
                <div className="mt-3"> {/* Add margin top to create space below the button */} 
                    <div className="glassmorphism-card"> 
                        <div className="card-header"> 
                            <div className="text-header fw-bold fs-3" style={{color: '#5856d6'}}>Create TicketType</div> 
                        </div> 
                        <div className="card-body"> 
                            <Form onSubmit={handleCreateTicketType}> 
                                <div className="form-group"> 
                                    <label htmlFor="TicketType"></label> 
                                    <input 
                                        required="" 
                                        className="form-control" 
                                        name="TicketType" 
                                        id="TicketType" 
                                        type="text" 
                                        placeholder='Enter New TicketType'
                                        value={newTicketType} 
                                        onChange={(e) => setNewTicketType(e.target.value)} 
                                    /> 
                                </div> 
                                {errorMessage && <div className='text-danger text-end'>{errorMessage}</div>}
                                <Button type="submit" className="btn mt-2" disabled= {loading}>{loading ? <><Spinner animation="border" size='sm' /> Adding TicketType...</> : "Submit"}</Button> 

                            </Form> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </Collapse> 
          ); 
        }; 
        CreateTicketForm.propTypes = { // Define prop types 
            newTicketType: PropTypes.string.isRequired, 
            setNewTicketType: PropTypes.func.isRequired, 
            handleCreateTicketType: PropTypes.func.isRequired, 
            openTicketType: PropTypes.bool.isRequired, 
            loading: PropTypes.bool.isRequired,
            errorMessage : PropTypes.string.isRequired,
          }; 
           
          export default CreateTicketForm;