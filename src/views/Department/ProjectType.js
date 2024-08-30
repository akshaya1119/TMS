import React from 'react';
import { Button, Form } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; // Import PropTypes 

const ProjectType = ({ project, newProject, setNewProject, handleEdit, handleEditSubmitProject, editItem, searchQuery, errorProject }) => {

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 mx-auto bg-white rounded shadow">
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr className="table-header mt-3">
                                    <th scope="col" className="col-3">S.No</th>
                                    <th scope="col" className="col-6">Project Type</th>
                                    <th scope="col" className="col-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project
                                    .filter((project) =>
                                        project.projectTypes?.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((project, index) => (
                                        <tr key={project.projectId} className="table-row mt-1">

                                            <td className="col col-3" data-label="SNo.">{index + 1}</td>
                                            {/* <td className="col col-6" data-label="Project">{project.projectTypes}</td> 
                                            <td className="col col-3" data-label="Actions">  */}
                                            {editItem && editItem.projectId === project.projectId ? (
                                                <>

                                                    {/* <Form onSubmit={(e) => handleEditSubmitProject(e, project.projectId, newProject)}>  */}
                                                    <td className='col col-6'> <input
                                                        className="form-control"
                                                        type="text"
                                                        value={newProject || project.projectTypes}
                                                        onChange={(e) => setNewProject(e.target.value)}
                                                    />
                                                    </td>
                                                    <td className="col col-3">
                                                        <Button onClick={(e) => handleEditSubmitProject(e, project.projectId, newProject)} variant="success" size="sm">
                                                            Save
                                                        </Button>
                                                    </td>
                                                    {/* </Form>  */}
                                                </>
                                            ) : (
                                                <>
                                                    <td className="col col-6" data-label="Project">{project.projectTypes}</td>
                                                    <td className="col col-3">
                                                        <Button variant="outline-primary" size="sm" onClick={() => handleEdit(project)}>
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
                {errorProject && <div className='text-danger text-end'>{errorProject}</div>}
            </div>
        </div>



    );
};

ProjectType.propTypes = { // Define prop types 
    project: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleEditSubmitProject: PropTypes.func.isRequired,
    newProject: PropTypes.string.isRequired,
    setNewProject: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    editItem: PropTypes.object,
    errorProject: PropTypes.string.isRequired,
};

export default ProjectType;