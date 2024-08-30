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
import { useUser } from './../../../src/context/UserContext'



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
    const [loading, setLoading] = useState(false);
    const { user } = useUser();
    const[errorDepartment,setErrorDepartment] = useState('');
    const[errorProject,setErrorProject] = useState('');
    const[errorTicketType,setErrorTicketType] = useState('');
    const[errorRole,setErrorRole] = useState('');

    // Fetch departments from the API when the component mounts 
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get(Departmentapi, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });
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
                const response = await axios.get(designationapi, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });
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
        setEditItem(item);
    };


    const handleEditSubmit = async (e, id, updatedValue) => {
        e.preventDefault();
        setErrorDepartment('');
        // Check if there is a change in the department name
        if (updatedValue !== '' && updatedValue !== null && updatedValue !== undefined) {
            try {
                await axios.put(`${Departmentapi}/${id}`, {
                    departmentId: id,
                    departmentName: updatedValue,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                setDepartments((prevDepartments) =>
                    prevDepartments.map((dept) =>
                        dept.departmentId === id ? { ...dept, departmentName: updatedValue } : dept
                    )
                );
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    // Handle specific conflict error
                    setErrorDepartment(error.response.data.message); // Display the specific error message
                } else {
                    // Handle other errors
                    setErrorDepartment('An unexpected error occurred. Please try again.');
                }
            }
        }

        setEditItem(null);
        setNewDepartment('');
    };

    const handleEditSubmitDesignation = async (e, id, updatedValue) => {
        e.preventDefault();
        setErrorRole('');
        if (updatedValue !== '' && updatedValue !== null && updatedValue !== undefined) {
            try {
                await axios.put(`${designationapi}/${id}`, {
                    designationId: id,
                    designationName: updatedValue,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                setDesignation((prevDesignation) =>
                    prevDesignation.map((designation) =>
                        designation.designationId === id ? { ...designation, designationName: updatedValue } : designation
                    )
                );



            } catch (error) {
                if (error.response && error.response.status === 409) {
                    // Handle specific conflict error
                    setErrorRole(error.response.data.message); // Display the specific error message
                } else {
                    // Handle other errors
                    setErrorRole('An unexpected error occurred. Please try again.');
                }
            }
        }
        setEditItem(null);
        setNewDesignation(''); // Reset newRoles state after submitting
    };



    const handleEditSubmitTicketType = async (e, id, updatedValue) => {
        e.preventDefault();
        setErrorTicketType('');
        if (updatedValue !== '' && updatedValue !== null && updatedValue !== undefined) {

            try {
                await axios.put(`${TicketTypeapi}/${id}`, {
                    ticketTypeId: id,
                    ticketType: updatedValue,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                setTicketTypes((prevTicketTypes) =>
                    prevTicketTypes.map((ticket) =>
                        ticket.ticketTypeId === id ? { ...ticket, ticketType: updatedValue } : ticket
                    )
                );

                // Reset newTicketType state after submitting
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    // Handle specific conflict error
                    setErrorTicketType(error.response.data.message); // Display the specific error message
                } else {
                    // Handle other errors
                    setErrorTicketType('An unexpected error occurred. Please try again.');
                }
            }
        }
        setEditItem(null);
        setNewTicketType('');
    };

    const handleEditSubmitProject = async (e, id, updatedValue) => {
        e.preventDefault();
        setErrorProject('');
        if (updatedValue !== '' && updatedValue !== null && updatedValue !== undefined) {

            try {
                await axios.put(`${ProjectTypepi}/${id}`, {
                    projectId: id,
                    projectTypes: updatedValue,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                setProject((prevProjects) =>
                    prevProjects.map((project) =>
                        project.projectId === id ? { ...project, projectTypes: updatedValue } : project
                    )
                );

            } catch (error) {
                if (error.response && error.response.status === 409) {
                    // Handle specific conflict error
                    setErrorProject(error.response.data.message); // Display the specific error message
                } else {
                    // Handle other errors
                    setErrorProject('An unexpected error occurred. Please try again.');
                }
            }
        }
        setEditItem(null);
        setNewProject('');
    };




    // Fetch projects from the API when the component mounts 
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(ProjectTypepi, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });
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
                const response = await axios.get(TicketTypeapi, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });
                setTicketTypes(response.data);
            } catch (error) {
                console.error('Error fetching ticket types:', error);
            }
        };

        fetchTicketTypes();
    }, []); // Empty dependency array ensures this effect runs only once on mount 

    const handleCreateDepartment = async (e) => {
        e.preventDefault();
        setErrorDepartment('');

        if (newDepartment.trim() !== '') {
            if (departments.some(department => department.departmentName === newDepartment)) {
                setErrorDepartment('*Department name must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts
            try {
                // Send a POST request to create a new department 
                const response = await axios.post(Departmentapi, {
                    departmentName: newDepartment,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                // Update the state with the new department from the server response 
                setDepartments([...departments, response.data]);
                setNewDepartment('');
                setOpenCreateDepartment(false);
            } catch (error) {
                setErrorDepartment('An unexpected error occurred. Please try again.');
            }
            finally {
                setLoading(false); // Reset loading state after the request completes
            }
        }
    };

    const handleCreateDesignation = async (e) => {
        e.preventDefault();
        setErrorRole('');
        if (newdesignation.trim() !== '') {
            if (designation.some(designation => designation.designationName === newdesignation)) {
                setErrorRole('Designation must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(designationapi, {
                    designationName: newdesignation,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                // Update the state with the new department from the server response 
                setDesignation([...designation, response.data]);
                setNewDesignation('');
                setOpenCreateDesignation(false);
            } catch (error) {
                setErrorRole('An unexpected error occurred. Please try again.');

            }
            finally {
                setLoading(false); // Reset loading state after the request completes
            }
        }
    };

    const handleCreateProjectType = async (e) => {
        e.preventDefault();
        setErrorProject('');
        if (newProject.trim() !== '') {
            if (project.some(projects => projects.projectTypes === newProject)) {
                setErrorProject('Project name must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(ProjectTypepi, {
                    projectTypes: newProject,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                // Update the state with the new department from the server response 
                setProject([...project, response.data]);
                setNewProject('');
                setOpenProject(false);
            } catch (error) {
                setErrorProject('An unexpected error occurred. Please try again.');
            }
            finally {
                setLoading(false); // Reset loading state after the request completes

            }
        }
    };

    const handleCreateTicketType = async (e) => {
        e.preventDefault();
        setErrorTicketType('');
        if (newTicketType.trim() !== '') {
            if (ticketType.some(ticketTypes => ticketTypes.ticketType === newTicketType)) {
                setErrorTicketType('Ticket Type must be unique.');
                return;
            }
            setLoading(true); // Set loading to true when the form submission starts

            try {
                // Send a POST request to create a new department 
                const response = await axios.post(TicketTypeapi, {
                    ticketType: newTicketType,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    }
                });

                // Update the state with the new department from the server response 
                setTicketTypes([...ticketType, response.data]);
                setNewTicketType('');
                setOpenTicketType(false);
            } catch (error) {
                setErrorTicketType('An unexpected error occurred. Please try again.');
            }
            finally {
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
                                                errorDepartment={errorDepartment}
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
                                                errorMessage={errorMessage}
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
                                                errorRole={errorRole}
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
                                                errorMessage={errorMessage}
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
                                                errorTicketType={errorTicketType}
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
                                                errorMessage={errorMessage}
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
                                                errorProject={errorProject}
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
                                                errorMessage={errorMessage}
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