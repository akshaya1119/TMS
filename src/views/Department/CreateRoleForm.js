import React from 'react'; 
import { Button, Form, Collapse } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; 
 
const CreateDesignationForm = ({ newDesignation, setNewDesignation, handleCreateDesignation, openCreateDesignation}) => { 
    return ( 
        <Collapse in={openCreateDesignation}> 
        <div id="create-department-collapse"> 
            <div className="mt-3"> {/* Add margin top to create space below the button */} 
                <div className="glassmorphism-card"> 
                    <div className="card-header"> 
                        <div className="text-header fw-bold fs-3" style={{color: '#5856d6'}}>Create Designation</div> 
                    </div> 
                    <div className="card-body"> 
                        <Form onSubmit={handleCreateDesignation}> 
                            <div className="form-group"> 
                                <label htmlFor="Designation">Enter New Designation:</label> 
                                <input 
                                    required="" 
                                    className="form-control" 
                                    name="designation" 
                                    id="designation" 
                                    type="text" 
                                    value={newDesignation} 
                                    onChange={(e) => setNewDesignation(e.target.value)} 
                                /> 
                            </div> 
                            <Button type="submit" className="btn"> 
                                Submit 
                            </Button> 
                        </Form> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </Collapse> 
    ); 
}; 
CreateDesignationForm.propTypes = { // Define prop types 
    newDesignation: PropTypes.string.isRequired, 
    setNewDesignation: PropTypes.func.isRequired, 
    handleCreateDesignation: PropTypes.func.isRequired, 
    openCreateDesignation: PropTypes.bool.isRequired, 
  }; 
   
  export default CreateDesignationForm;
