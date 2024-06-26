import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Nav, Tab, Collapse, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './Department.css';
import PermissionChecker from './../../context/PermissionChecker';
import DepartmentList from './DepartmentList';
import CreateDepartmentForm from './CreateDepartmentForm';
import Designation from './Role';
import CreateTicketForm from './CreateTicketForm';
import CreateProjectForm from './CreateProjForm';
import ProjectType from './ProjectType';
import Tickettype from './TicketType';
import Tabs from 'react-bootstrap/Tabs';
import CreateDesignationForm from './CreateRoleForm';



const Departmentapi = process.env.REACT_APP_API_DEPARTMENTS;
const designationapi = process.env.REACT_APP_API_DESIGNATION;
const TicketTypeapi = process.env.REACT_APP_API_TICKETTYPE;
const ProjectTypepi = process.env.REACT_APP_API_PROJECTTYPE;
const Department = () => {
    const [activeTab, setActiveTab] = useState('departments');
    const [departments, setDepartments] = useState([]);
    const [newDepartment, setNewDepartment] = useState('');
    const [openCreateDepartment, setOpenCreateDepartment] = useState(false);
    const [designation, setDesignation] = useState([]);
    const [newdesignation, setNewDesignation] = useState('');
    const [openCreateDesignation, setOpenCreateDesignation] = useState(false);
    const [project, setProject] = useState([]);
    const [newProject, setNewProject] = useState('');
    const [openProject, setOpenProject] = useState(false);
    const [ticketType, setTicketTypes] = useState([]);
    const [newTicketType, setNewTicketType] = useState('')
    const [openTicketType, setOpenTicketType] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [editItem, setEditItem] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false);


    // Fetch departments from the API when the component mounts 
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get(Departmentapi);
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    // Fetch roles from the API when the component mounts 
    useEffect(() => {
        const fetchDesignation = async () => {
            try {
                const response = await axios.get(designationapi);
                setDesignation(response.data);
            } catch (error) {
                console.error('Error fetching designation:', error);
            }
        };

        fetchDesignation();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleEdit = (item) => {
        console.log('Edit item:', item);
        setEditItem(item);
    };


    const handleEditSubmit = async (e, id, updatedValue) => {
        e.preventDefault();
        // Check if there is a change in the department name
        if (updatedValue !== '' && updatedValue !== null && updatedValue !== undefined) {
            try {
                await axios.put(`${Departmentapi}/${id}`, {
                    departmentId: id,
                    departmentName: updatedValue,
                });

                setDepartments((prevDepartments) =>
                    prevDepartments.map((dept) =>
                        dept.departmentId === id ? { ...dept, departmentName: updatedValue } : dept
                    )
                );
            } catch (error) {
                console.error('Error updating item:', error);
            }
        }

        setEditItem(null);
        setNewDepartment('');
    };

    const handleEditSubmitDesignation = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`${designationapi}/${id}`, {
                designationId: id,
                designationName: updatedValue,
            });

            setDesignation((prevDesignation) =>
                prevDesignation.map((designation) =>
                    designation.designationId === id ? { ...designation, designationName: updatedValue } : designation
                )
            );

            setEditItem(null);
            setNewDesignation(''); // Reset newRoles state after submitting
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

   

    const handleEditSubmitTicketType = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`${TicketTypeapi}/${id}`, {
                ticketTypeId: id,
                ticketType: updatedValue,
            });

            setTicketTypes((prevTicketTypes) =>
                prevTicketTypes.map((ticket) =>
                    ticket.ticketTypeId === id ? { ...ticket, ticketType: updatedValue } : ticket
                )
            );

            setEditItem(null);
            setNewTicketType(''); // Reset newTicketType state after submitting
        } catch (error) {
            console.error('Error updating ticket type:', error);
        }
    };

    const handleEditSubmitProject = async (e, id, updatedValue) => {
        e.preventDefault();
        try {
            await axios.put(`${ProjectTypepi}/${id}`, {
                projectId: id,
                projectTypes: updatedValue,
            });

            setProject((prevProjects) =>
                prevProjects.map((project) =>
                    project.projectId === id ? { ...project, projectTypes: updatedValue } : project
                )
            );

            setEditItem(null);
            setNewProject(''); // Reset newProject state after submitting
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };




    // Fetch projects from the API when the component mounts 
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(ProjectTypepi);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    // Fetch ticket types from the API when the component mounts 
    useEffect(() => {
        const fetchTicketTypes = async () => {
            try {
                const response = await axios.get(TicketTypeapi);
                setTicketTypes(response.data);
            } catch (error) {
                console.error('Error fetching ticket types:', error);
            }
        };

        fetchTicketTypes();
    }, []); // Empty dependency array ensures this effect runs only once on mount 

    const handleCreateDepartment = async (e) => {
        e.preventDefault();
        if (newDepartment.trim() !== '') {
            if (departments.some(department => department.departmentName === newDepartment)) {
                setErrorMessage('Department name must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts
            try {
                // Send a POST request to create a new department 
                const response = await axios.post(Departmentapi, {
                    departmentName: newDepartment,
                });

                // Update the state with the new department from the server response 
                setDepartments([...departments, response.data]);
                setNewDepartment('');
            } catch (error) {
                console.error('Error creating department:', error);
            }
            finally {
                setLoading(false); // Reset loading state after the request completes
              }
        }
    };
    const handleCreateDesignation = async (e) => {
        e.preventDefault();
        
        if (newdesignation.trim() !== '') {
            if (designation.some(designation => designation.designationName === newdesignation)) {
                setErrorMessage('Designation must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(designationapi, {
                    designationName: newdesignation,
                });

                // Update the state with the new department from the server response 
                setDesignation([...designation, response.data]);
                setNewDesignation('');
            } catch (error) {
                console.error('Error creating designation:', error);
                
            }
            finally{
                setLoading(false); // Reset loading state after the request completes
            }
        }
    };
    const handleCreateProjectType = async (e) => {
        e.preventDefault();
        if (newProject.trim() !== '') {
            if (project.some(projects => projects.projectTypes === newProject)) {
                setErrorMessage('Project name must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(ProjectTypepi, {
                    projectTypes: newProject,
                });

                // Update the state with the new department from the server response 
                setProject([...project, response.data]);
                setNewProject('');
            } catch (error) {
                console.error('Error creating Project Name:', error);
            }
            finally{
                setLoading(false); // Reset loading state after the request completes

            }
        }
    };
    const handleCreateTicketType = async (e) => {
        e.preventDefault();
        if (newTicketType.trim() !== '') {
            if (ticketType.some(ticketTypes => ticketTypes.ticketType === newTicketType)) {
                setErrorMessage('Ticket Type must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(TicketTypeapi, {
                    ticketType: newTicketType,
                });

                // Update the state with the new department from the server response 
                setTicketTypes([...ticketType, response.data]);
                setNewTicketType('');
            } catch (error) {
                console.error('Error creating Ticket Type:', error);
            }
            finally{
                setLoading(false); // Reset loading state after the request completes

            }
        }
    };

    return (
        <PermissionChecker>
            {({ hasPermission }) => (
                <Container>
                    <Row>
                        {/* Department List */}
                        <Col md={12}>
                            <div className='row mb-3 justify-content-between display flex'>

                                <h4 className='col-sm-3'>Categories</h4>
                                <Form className='col-sm-3'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </Form>


                            </div>
                            <div className="col-md-6">


                                <Tabs defaultActiveKey="departments" id="tab-example" className="mb-3" onSelect={(key) => setActiveTab(key)} justify>
                                    {hasPermission(3, 'canViewOnly') && (
                                        <Tab eventKey="departments" title="Departments">

                                        </Tab>
                                    )}
                                    {hasPermission(4, 'canViewOnly') && (
                                        <Tab eventKey="designation" title="Designation">

                                        </Tab>
                                    )}
                                    {hasPermission(5, 'canViewOnly') && (
                                        <Tab eventKey="ticketType" title="Ticket Types">

                                        </Tab>
                                    )}
                                    {hasPermission(6, 'canViewOnly') && (
                                        <Tab eventKey="project" title="Projects">

                                        </Tab>
                                    )}
                                </Tabs>
                            </div>
                            <Container>
                                {/* Other JSX code */}
                                {activeTab === 'departments' && (
                                    <Row>

                                        {hasPermission(3, 'canViewOnly') && <Col md={6}>

                                            <DepartmentList
                                                departments={departments}
                                                handleEdit={handleEdit}
                                                handleEditSubmit={handleEditSubmit}
                                                newDepartment={newDepartment}
                                                setNewDepartment={setNewDepartment}
                                                editItem={editItem}
                                                searchQuery={searchQuery} // Pass search query as prop 

                                            />
                                        </Col>}
                                        {hasPermission(3, 'canAddOnly') && <Col md={6} className="position-relative">
                                            <Button
                                                onClick={() => setOpenCreateDepartment(!openCreateDepartment)}
                                                aria-controls="create-department-collapse"
                                                aria-expanded={openCreateDepartment}
                                                className="mb-3 position-absolute top-0 end-0"
                                            >
                                                Create
                                            </Button>
                                            <CreateDepartmentForm
                                                newDepartment={newDepartment}
                                                setNewDepartment={setNewDepartment}
                                                handleCreateDepartment={handleCreateDepartment}
                                                openCreateDepartment={openCreateDepartment} // Pass openCreateDepartment as a prop 
                                                loading={loading} // Pass loading state as a prop
                                            />
                                        </Col>}
                                    </Row>
                                )}
                                {activeTab === 'designation' && (
                                    <Row>
                                        {hasPermission(4, 'canViewOnly') && <Col md={6}>

                                            <Designation
                                                designations={designation}
                                                handleEdit={handleEdit}
                                                handleEditSubmitDesignation={handleEditSubmitDesignation}
                                                newDesignation={newdesignation}
                                                setNewDesignation={setNewDesignation}
                                                editItem={editItem}

                                                searchQuery={searchQuery}
                                            />
                                        </Col>}
                                        {hasPermission(4, 'canAddOnly') && <Col md={6} className="position-relative">
                                            <Button
                                                onClick={() => setOpenCreateDesignation(!openCreateDesignation)}
                                                aria-controls="create-role-collapse"
                                                aria-expanded={openCreateDesignation}
                                                className="mb-3 position-absolute top-0 end-0"
                                            >
                                                Create
                                            </Button>
                                            <CreateDesignationForm
                                                newDesignation={newdesignation}
                                                setNewDesignation={setNewDesignation}
                                                handleCreateDesignation={handleCreateDesignation}
                                                openCreateDesignation={openCreateDesignation}
                                                loading={loading} // Pass loading state as a prop
                                            />
                                        </Col>}
                                    </Row>
                                )}
                                {activeTab === 'ticketType' && (
                                    <Row>
                                        {hasPermission(5, 'canViewOnly') && <Col md={6}>

                                            <Tickettype
                                                ticketType={ticketType}
                                                handleEdit={handleEdit}
                                                handleEditSubmitTicketType={handleEditSubmitTicketType}
                                                newTicketType={newTicketType}
                                                setNewTicketType={setNewTicketType}
                                                editItem={editItem}

                                                searchQuery={searchQuery}
                                            />
                                        </Col>}
                                        {hasPermission(5, 'canAddOnly') && <Col md={6} className="position-relative">
                                            <Button
                                                onClick={() => setOpenTicketType(!openTicketType)}
                                                aria-controls="create-tickettype-collapse"
                                                aria-expanded={openTicketType}
                                                className="mb-3 position-absolute top-0 end-0"
                                            >
                                                Create
                                            </Button>
                                            <CreateTicketForm
                                                newTicketType={newTicketType}
                                                setNewTicketType={setNewTicketType}
                                                handleCreateTicketType={handleCreateTicketType}
                                                openTicketType={openTicketType}
                                                loading={loading} // Pass loading state as a prop
                                            />
                                        </Col>}
                                    </Row>
                                )}
                                {activeTab === 'project' && (
                                    <Row>
                                        {hasPermission(6, 'canViewOnly') && <Col md={6}>

                                            <ProjectType
                                                project={project}
                                                handleEdit={handleEdit}
                                                handleEditSubmitProject={handleEditSubmitProject}
                                                newProject={newProject}
                                                setNewProject={setNewProject}
                                                editItem={editItem}

                                                searchQuery={searchQuery}
                                            />
                                        </Col>}
                                        {hasPermission(6, 'canAddOnly') && <Col md={6} className="position-relative">
                                            <Button
                                                onClick={() => setOpenProject(!openProject)}
                                                aria-controls="create-project-collapse"
                                                aria-expanded={openProject}
                                                className="mb-3 position-absolute top-0 end-0"
                                            >
                                                Create
                                            </Button>
                                            <CreateProjectForm
                                                newProject={newProject}
                                                setNewProject={setNewProject}
                                                handleCreateProjectType={handleCreateProjectType}
                                                openProject={openProject}
                                                loading={loading} // Pass loading state as a prop
                                            />
                                        </Col>}
                                    </Row>
                                )}

                            </Container>
                            <Tab.Content>
                                <Tab.Pane eventKey="departments">
                                    <Table responsive hover bordered striped>

                                    </Table>
                                </Tab.Pane>

                                <Tab.Pane eventKey="designation">
                                    <Table responsive hover bordered striped>

                                    </Table>
                                </Tab.Pane>

                                <Tab.Pane eventKey="ticketType">
                                    <Table responsive hover bordered striped>

                                    </Table>
                                </Tab.Pane>

                                <Tab.Pane eventKey="project">
                                    <Table responsive hover bordered striped>
                                        {/* Render project data here */}

                                    </Table>
                                </Tab.Pane>
                            </Tab.Content>

                        </Col>
                    </Row>
                </Container>
            )}
        </PermissionChecker>
    );

};

export default Department;