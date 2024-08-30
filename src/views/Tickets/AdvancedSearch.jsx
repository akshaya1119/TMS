import React, { useState, useEffect } from 'react';
import { Button, Container, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from 'src/context/UserContext';
import FilterSelection from './FilterSelection';
import SelectedFilters from './SelectedFilter';
import SaveFilterModal from './SaveFilterModal';
import CloseModal from './CloseModal';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';



const userapi = process.env.REACT_APP_API_USERS;
const TicketTypeapi = process.env.REACT_APP_API_TICKETTYPE;
const ProjectTypeapi = process.env.REACT_APP_API_PROJECTTYPE;
const savedFiltersApi = process.env.REACT_APP_API_SavedSearch;
const FilterApi = process.env.REACT_APP_API_Filter;

const AdvancedSearchContainer = ({ onApplyFilters, fetchTickets }) => {
    const [isAdvancedSearchOpen, setAdvancedSearchOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [availableFilters, setAvailableFilters] = useState([]);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showCloseModal, setShowCloseModal] = useState(false);
    const [filterName, setFilterName] = useState('');
    const [savedFilters, setSavedFilters] = useState([]);
    const [selectedSavedFilter, setSelectedSavedFilter] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [filterParams, setFilterParams] = useState({});
    const [originalFilters, setOriginalFilters] = useState([]);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [message, setMessage] = useState(null);
    const [filename, setFilename] = useState('mysearch');
    const { user } = useUser();


    const filterOptionsMap = (ticketTypes, projects, users) => ({
        'Assigned by': users.map(user => ({ label: user.fullName, value: user.userId })),
        'Assigned To': users.map(user => ({ label: user.fullName, value: user.userId })),
        'DueDate': [], // Placeholder
        'Project': projects.map(project => ({ label: project.projectTypes, value: project.projectId })),
        'Priority': ['High', 'Medium', 'Low'].map(priority => ({ label: priority, value: priority })),
        'Status': ['Open', 'Self-Assigned', 'Pending', 'Completed'].map(status => ({ label: status, value: status })),
        'Title': [],
        'Ticket Type': ticketTypes.map(type => ({ label: type.ticketType, value: type.ticketTypeId }))
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const ticketResponse = await axios.get(TicketTypeapi, {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setTicketTypes(ticketResponse.data || []);

                const projectResponse = await axios.get(ProjectTypeapi, {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setProjects(projectResponse.data || []);

                const userResponse = await axios.get(userapi, {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setUsers(userResponse.data || []);

                const savedFiltersResponse = await axios.get(savedFiltersApi, {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setSavedFilters(savedFiltersResponse.data || []);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [user?.token]);

    useEffect(() => {
        const optionsMap = filterOptionsMap(ticketTypes, projects, users);
        setAvailableFilters(Object.keys(optionsMap));
        setFilterOptions(optionsMap);
    }, [ticketTypes, projects, users]);

    useEffect(() => {
        setOriginalFilters(selectedFilters);
    }, [selectedFilters]);

    useEffect(() => {
        if (selectedSavedFilter) {
            handleSelectSavedFilter(selectedSavedFilter); // Ensure this updates filterOptions
        }
    }, [selectedSavedFilter]);

    useEffect(() => {
        if (JSON.stringify(selectedFilters) !== JSON.stringify(originalFilters)) {
            setHasUnsavedChanges(true);
        } else {
            setHasUnsavedChanges(false);
        }
    }, [selectedFilters]);

    useEffect(() => {
        console.log('Updated selectedFilters:', selectedFilters);
    }, [selectedFilters]);
    

    const handleShowCloseModal = () => {
        if (hasUnsavedChanges) {
            setShowCloseModal(true);
        } else {
            setSelectedFilters([])
            setHasUnsavedChanges(false)
            setFilterParams({})
            setSelectedSavedFilter('')
            fetchTickets();
            setAdvancedSearchOpen(false);
        }
    };

    const onClickApply = async () => {
        try {
            const response = await axios.get(FilterApi, {
                params: filterParams,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            onApplyFilters(response.data); // Handle the data as needed
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFilterSelect = (filter) => {
        setAvailableFilters(prev => prev.filter(f => f !== filter));
        const options = filterOptions[filter] || [];
        setSelectedFilters(prev => [...prev, { filter, selectedOption: null }]);
        setHasUnsavedChanges(true);
    };

    const handleOptionSelect = (filter, option) => {
        let selectedOption;
        if (filter === 'Title') {
            selectedOption = option;
        } else if (filter === 'DueDate') {
            console.log('Original Date Option:', option); // Debug log

            // Create a date object from the option
            const date = new Date(option);
            console.log('Date Object:', date); // Debug log

            // Format the date to match the API format: 'YYYY-MM-DD HH:mm:ss'
            selectedOption = date.toISOString().replace('T', ' ').split('.')[0]; // Adjust format
            console.log('Formatted Date:', selectedOption); // Debug log
        } else {
            selectedOption = filterOptions[filter]?.find(opt => opt.label === option);
        }

        console.log('Selected Option:', selectedOption); // Debug log

        setSelectedFilters(prev =>
            prev.map(f => (f.filter === filter ? { ...f, selectedOption: filter === 'Title' ? selectedOption : selectedOption?.label } : f))
        );

        // Ensure the correct key is used
        if (filter === 'DueDate') {
            // Directly set 'DueDate' in filterParams
            setFilterParams(prev => ({
                ...prev,
                DueDate: selectedOption // Directly use 'DueDate' as key
            }));
        } else {
            const filtersThatSendValue = ['Ticket Type', 'Project', 'Assigned by', 'Assigned To'];
            const key = filter.replace(' ', '') + (filtersThatSendValue.includes(filter) ? 'Id' : '');

            setFilterParams(prev => ({
                ...prev,
                [key]: filter === 'Title' ? selectedOption : selectedOption?.value
            }));
        }

        setHasUnsavedChanges(true);
    };


 
    

    const handleRemoveFilter = (filter) => {
        setSelectedFilters(prev => prev.filter(f => f.filter !== filter));
        setAvailableFilters(prev => [...prev, filter]);
        setFilterParams(prev => {
            const updatedParams = { ...prev };
            const key = filter.replace(' ', '') + (['Ticket Type', 'Project', 'Assigned by', 'Assigned To'].includes(filter) ? 'Id' : '');
            delete updatedParams[key];
            return updatedParams;
        });
        setHasUnsavedChanges(true);
    };

    const handleShowSaveModal = () => setShowSaveModal(true);
    const handleCloseSaveModal = () => setShowSaveModal(false);


    const handleSaveFilter = async () => {
        if (!selectedSavedFilter) {
            // No filter is selected, create a new filter
            setShowSaveModal(true);
        } else {
            // A filter is selected, update it directly
            const newSavedFilter = {
                id: savedFilters.find(f => f.name === selectedSavedFilter).id,
                name: selectedSavedFilter,
                config: JSON.stringify(selectedFilters.reduce((acc, { filter, selectedOption }) => {
                    if (selectedOption) acc[filter] = selectedOption;
                    return acc;
                }, {})),
            };

            try {
                await axios.put(`${savedFiltersApi}/${savedFilters.find(f => f.name === selectedSavedFilter).id}`, newSavedFilter, {
                    headers: { Authorization: `Bearer ${user?.token}`, 'Content-Type': 'application/json' },
                });
                setSavedFilters(prev => prev.map(f => f.name === selectedSavedFilter ? newSavedFilter : f));
                setMessage('Filter updated successfully');
                setFilterName('')
                handleCloseSaveModal();
                handleConfirmClose();
            } catch (error) {
                console.error('Error saving filter:', error);
            }
        }
    };



    const handleSaveNewFilter = async () => {
        const newSavedFilter = {
            name: filterName,
            config: JSON.stringify(selectedFilters.reduce((acc, { filter, selectedOption }) => {
                if (selectedOption) acc[filter] = selectedOption;
                return acc;
            }, {})),
        };

        try {
            const response = await axios.post(savedFiltersApi, newSavedFilter, {
                headers: { Authorization: `Bearer ${user?.token}`, 'Content-Type': 'application/json' },
            });
            setSavedFilters(prev => [...prev, newSavedFilter]);
            setMessage('Search saved successfully');
            setFilterName('')
            handleCloseSaveModal();
            handleConfirmClose();
        } catch (error) {
            console.error('Error saving filter:', error);
        }
    };

    const handleSelectSavedFilter = (filterName) => {
        const selectedFilter = savedFilters.find(f => f.name === filterName);
        if (selectedFilter) {
            const parsedConfig = JSON.parse(selectedFilter.config);
            const filterEntries = Object.entries(parsedConfig);

            setSelectedFilters(filterEntries.map(([filter, option]) => ({ filter, selectedOption: option })));
            const updatedOptions = filterOptionsMap(ticketTypes, projects, users);
            setAvailableFilters(Object.keys(updatedOptions).filter(f => !filterEntries.map(([filter]) => filter).includes(f)));
            setFilterOptions(updatedOptions);

            const updatedFilterParams = filterEntries.reduce((acc, [filter, option]) => {
                const filtersThatSendValue = ['Ticket Type', 'Project', 'Assigned by', 'Assigned To'];
                const key = filter.replace(' ', '') + (filtersThatSendValue.includes(filter) ? 'Id' : '');
                const optionObj = filterOptions[filter]?.find(opt => opt.label === option);
                acc[key] = optionObj ? optionObj.value : option;
                return acc;
            }, {});

            setFilterParams(updatedFilterParams);
            setFilename(filterName)
            onClickApply();
        }
        setSelectedSavedFilter(filterName);
        setHasUnsavedChanges(false);
    };

    const handleDeleteFilter = async () => {
        if (selectedSavedFilter) {

            console.log('Selected Saved Filter:', selectedSavedFilter);
           
            // Find the filter object that matches the selectedSavedFilter name
            const filterToDelete = savedFilters.find(f => f.name === selectedSavedFilter);

            if (filterToDelete && filterToDelete.id) {
                console.log('Preparing to delete filter:', filterToDelete);
                try {
                    // Send DELETE request using the filter's id
                    const response = await axios.delete(`${savedFiltersApi}/${filterToDelete.id}`, {
                        headers: { Authorization: `Bearer ${user?.token}` }
                    });


                    if (response.status === 204) { // Check if status code indicates success
                        // Remove the deleted filter from the state
                        setSavedFilters(prev => prev.filter(f => f.id !== filterToDelete.id));
                        // Clear the selected filter
                        setSelectedFilters([]);
                       
                        setSelectedSavedFilter(null);
                         setMessage('Search deleted successfully')
                        await handleConfirmClose();
                    } else {
                        console.warn('Unexpected response status:', response.status);
                    }
                } catch (error) {
                    console.error('Error deleting filter:', error.response || error.message || error);
                }
            } else {
                console.warn('No matching filter found to delete');
            }
        } else {
            console.warn('No filter selected to delete');
        }
    };




    const handleConfirmClose = async () => {
        
            // Clear selected filters and related states
            setSelectedFilters([]);
            setFilterParams({});
            setAvailableFilters(Object.keys(filterOptions));
            setHasUnsavedChanges(false);
            setSelectedSavedFilter(null)
        

        fetchTickets(); // Ensure to fetch tickets or handle necessary updates after clearing
        setShowCloseModal(false);
        setAdvancedSearchOpen(false);
    };



    const handleOpenSaveModal = () => {
        setShowSaveModal(true);
        setShowCloseModal(false); // Close the CloseModal if open
    };




    return (
        <Container className='border border-3 p-4 my-3'>
            <div>
                <div className='text-end mb-3'>
                    <Button onClick={isAdvancedSearchOpen ? handleShowCloseModal : () => setAdvancedSearchOpen(true)}>
                        {isAdvancedSearchOpen ? 'Close' : 'Advanced Search'}
                    </Button>
                </div>

                {isAdvancedSearchOpen && (
                    <div className='advanced-search-box mb-3'>
                        <div className='row'>
                            <div className=' d-flex align-items-center justify-content-between'>

                                <div className=' mb-3 text-end'>
                                    <Form.Control as="select" value={selectedSavedFilter || ''} onChange={(e) => handleSelectSavedFilter(e.target.value)}>
                                        <option value="">Select Saved Filter</option>
                                        {savedFilters?.map(({ name }) => (
                                            <option key={name} value={name}>{name}</option>
                                        ))}
                                    </Form.Control>
                                </div>


                            </div>

                            <div className='row'>
                                <div className='col-sm-6'>
                                    <FilterSelection
                                        availableFilters={availableFilters}
                                        handleFilterSelect={handleFilterSelect}
                                    />
                                </div>
                                <div className='col-sm-6'>
                                    {filterOptions && (
                                        <SelectedFilters
                                            selectedFilters={selectedFilters || []}
                                            filterOptions={filterOptions}
                                            handleOptionSelect={handleOptionSelect}
                                            handleRemoveFilter={handleRemoveFilter}
                                            selectedDate={selectedDate}
                                            setSelectedDate={setSelectedDate}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="text-end mt-3">
                                {selectedSavedFilter ? (
                                    <Button type="button" className="btn btn-danger me-2" onClick={handleDeleteFilter}>
                                        <FaTrash /> Delete
                                    </Button>
                                ) : (
                                    <Button type="button" className="btn btn-primary me-2" onClick={onClickApply}>
                                        Apply
                                    </Button>
                                )}
                            </div>

                        </div>
                    </div>
                )}
            </div>

            <SaveFilterModal
                showSaveModal={showSaveModal}
                handleCloseSaveModal={handleCloseSaveModal}
                filterName={filterName}
                setFilterName={setFilterName}
                handleSaveNewFilter={handleSaveNewFilter}
                handleConfirmClose = {handleConfirmClose}
            />

            <CloseModal
                showCloseModal={showCloseModal}
                handleCloseCloseModal={() => setShowCloseModal(false)}
                handleConfirmClose={handleConfirmClose}
                hasUnsavedChanges={hasUnsavedChanges}
                handleSaveFilter={handleSaveFilter}
                handleOpenSaveModal={handleOpenSaveModal}
                selectedSavedFilter={selectedSavedFilter}
            />

        </Container>
    );
};

AdvancedSearchContainer.propTypes = {
    onApplyFilters: PropTypes.func.isRequired,
    fetchTickets: PropTypes.func.isRequired,
};

export default AdvancedSearchContainer;
