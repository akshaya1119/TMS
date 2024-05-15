import React from 'react'; 
import { Button, Form, Collapse,Spinner } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; 
 
const CreateDesignationForm = ({ newDesignation, setNewDesignation, handleCreateDesignation, openCreateDesignation,loading}) => { 
    return ( 
        <Collapse in={openCreateDesignation}> 
        <div id="create-designation-collapse"> 
            <div className="mt-3"> {/* Add margin top to create space below the button */} 
                <div className="glassmorphism-card"> 
                    <div className="card-header"> 
                        <div className="text-header fw-bold fs-3" style={{color: '#5856d6'}}>Create Designation</div> 
                    </div> 
                    <div className="card-body"> 
                        <Form onSubmit={handleCreateDesignation}> 
                            <div className="form-group"> 
                                <label htmlFor="designation"></label> 
                                <input 
                                    required="" 
                                    className="form-control" 
                                    name="designation" 
                                    id="designation" 
                                    type="text" 
                                    value={newDesignation} 
                                    placeholder='Enter New Designation'
                                    onChange={(e) => setNewDesignation(e.target.value)} 
                                /> 
                            </div> 
                            <Button type="submit" className="btn mt-2" disabled= {loading}>{loading ? <><Spinner animation="border" size='sm' /> Adding Designation...</> : "Submit"}</Button> 

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
    loading: PropTypes.bool.isRequired,

  }; 
   
  export default CreateDesignationForm;
