// CreateDepartmentForm.js 
import React, {useState} from 'react'; 
import { Button, Form, Collapse } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; // Import PropTypes 
import { Spinner } from 'react-bootstrap';

 


const CreateDepartmentForm = ({ newDepartment, setNewDepartment, handleCreateDepartment, openCreateDepartment, loading,  errorMessage}) => { 
  return ( 
    <Collapse in={openCreateDepartment}> 
      <div id="create-department-collapse"> 
        <div className="mt-3"> 
          <div className="glassmorphism-card"> 
            <div className="card-header"> 
              <div className="text-header fw-bold fs-3" style={{color:'#5856d6'}}>Create Department</div> 
            </div> 
            <div className="card-body "> 
              <Form onSubmit={handleCreateDepartment}> 
                <div className="form-group"> 
                  <label htmlFor="department"></label> 
                  <input 
                    required="" 
                    className="form-control" 
                    name="department" 
                    id="department" 
                    type="text" 
                    placeholder='Enter New Department'
                    value={newDepartment} 
                    onChange={(e) => setNewDepartment(e.target.value)} 
                  /> 
                </div > 
                {errorMessage && <div className='text-danger text-end'>{errorMessage}</div>}
                <Button type="submit" className="btn mt-2" disabled= {loading}>{loading ? <><Spinner animation="border" size='sm' /> Adding Department...</> : "Submit"}</Button> 
               
              </Form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </Collapse> 
  ); 
}; 


 
CreateDepartmentForm.propTypes = { // Define prop types 
  newDepartment: PropTypes.string.isRequired, 
  setNewDepartment: PropTypes.func.isRequired, 
  handleCreateDepartment: PropTypes.func.isRequired, 
  openCreateDepartment: PropTypes.bool.isRequired, 
  loading: PropTypes.bool.isRequired,
  errorMessage : PropTypes.string.isRequired,
}; 
 
export default CreateDepartmentForm;
