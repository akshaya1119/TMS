import React from 'react'; 
import {  Button, Form } from 'react-bootstrap'; // Import Collapse 
import PropTypes from 'prop-types'; // Import PropTypes 
 
 
const Designation = ({ designations, handleEdit, handleEditSubmitDesignation, newDesignation, setNewDesignation, editItem, searchQuery }) => { 
 
    return ( 
        <div className="container py-5"> 
            <div className="row"> 
                <div className="col-lg-7 mx-auto bg-white rounded shadow"> 
                    <div className="table-responsive"> 
                        <table className="table"> 
                            <thead> 
                                <tr className="table-header mt-3"> 
                                    <th scope="col" className="col-3">S.No</th> 
                                    <th scope="col" className="col-6">Designation</th> 
                                    <th scope="col" className="col-3">Actions</th> 
                                </tr> 
                            </thead> 
                            <tbody> 
                                {designations 
                                    .filter((designation) => designation.designationName?.toLowerCase().includes(searchQuery.toLowerCase())) 
                                    .map((designation) => ( 
                                        <tr key={designation.designationId} className="table-row mt-1"> 
 
                                            <td className="col col-3" data-label="SNo.">{designation.designationId}</td> 
                                            <td className="col col-6" data-label="Designation">{designation.designationName}</td> 
                                            <td className="col col-3" data-label="Actions"> 
                                                {editItem && editItem.designationId === designation.designationId ? ( 
                                                    <Form onSubmit={(e) => handleEditSubmitDesignation(e, designation.designationId, newDesignation)}> 
                                                        <input 
                                                            className="form-control" 
                                                            type="text" 
                                                            value={newDesignation || designation.designationName} 
                                                            onChange={(e) => setNewDesignation(e.target.value)} 
                                                        /> 
                                                        <Button type="submit" variant="success" size="sm"> 
                                                            Save 
                                                        </Button> 
                                                    </Form> 
                                                ) : ( 
                                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(designation)}> 
                                                        <i className="fa-solid fa-pencil"></i> 
                                                    </Button> 
                                                )} 
                                            </td> 
                                        </tr> 
 
 
                                    ))} 
                            </tbody> 
                        </table> 
                    </div> 
                </div> 
            </div> 
        </div> 
 
 
    ); 
}; 
Designation.propTypes = { // Define prop types 
    designations: PropTypes.array.isRequired, 
    handleEdit: PropTypes.func.isRequired, 
    handleEditSubmitDesignation: PropTypes.func.isRequired, 
    newDesignation: PropTypes.string.isRequired, 
    setNewDesignation: PropTypes.func.isRequired, 
    searchQuery: PropTypes.func.isRequired, 
    editItem: PropTypes.object, 
}; 
export default Designation;