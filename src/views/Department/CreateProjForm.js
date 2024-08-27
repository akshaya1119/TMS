import React from 'react'; 
import { Button, Form, Collapse,Spinner} from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; 
 
const CreateProjectForm = ({ newProject, setNewProject, handleCreateProjectType, openProject,loading,errorMessage}) => { 
    return ( 
        <Collapse in={openProject}> 
            <div id="create-Project-collapse"> 
                <div className="mt-3"> {/* Add margin top to create space below the button */} 
                    <div className="glassmorphism-card"> 
                        <div className="card-header"> 
                            <div className="text-header fw-bold fs-3" style={{color: '#5856d6'}}>Create Project</div> 
                        </div> 
                        <div className="card-body"> 
                            <Form onSubmit={handleCreateProjectType}> 
                                <div className="form-group"> 
                                    <label htmlFor="project"></label> 
                                    <input 
                                        required="" 
                                        className="form-control" 
                                        name="project" 
                                        id="project" 
                                        type="text" 
                                        placeholder='Enter New Project'
                                        value={newProject} 
                                        onChange={(e) => setNewProject(e.target.value)} 
                                    /> 
                                </div> 
                                {errorMessage && <div className='text-danger text-end'>{errorMessage}</div>}
                                <Button type="submit" className="btn mt-2" disabled= {loading}>{loading ? <><Spinner animation="border" size='sm' /> Adding Project...</> : "Submit"}</Button> 

                            </Form> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </Collapse> 
 
    ); 
}; 
CreateProjectForm.propTypes = { // Define prop types 
    newProject: PropTypes.string.isRequired, 
    setNewProject: PropTypes.func.isRequired, 
    handleCreateProjectType: PropTypes.func.isRequired, 
    openProject: PropTypes.bool.isRequired, 
    loading: PropTypes.bool.isRequired,
    errorMessage : PropTypes.string.isRequired,
  }; 
   
  export default CreateProjectForm;