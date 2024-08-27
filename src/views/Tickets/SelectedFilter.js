import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaMinus } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const SelectedFilters = ({ selectedFilters, filterOptions, handleOptionSelect, handleRemoveFilter, selectedDate, setSelectedDate }) => {
    // Ensure filterOptions has a default empty object
    const options = filterOptions || {};

 
    return (
        <div className='flex-fill'>
            
            <div className='col-sm-9'>
                {selectedFilters.map(({ filter, selectedOption }) => (
                    
                    <div key={filter} className='d-flex align-items-center mb-2'>
                        <span className='me-2'>{filter}:</span>
                       {filter === 'DueDate' ? (
                            <input
                                type="date"
                                className="form-control"
                                value={selectedDate || ""}
                                onChange={(e) => {
                                    console.log('DatePicker Selected Date:', e.target.value);
                                    setSelectedDate(e.target.value);
                                    handleOptionSelect(filter, e.target.value);
                                }}
                         />
                        ) : filter === 'Title' ? (
                            <Form.Control
                                type="text"
                                placeholder="Search Title"
                                value={selectedOption || ""}
                                onChange={(e) => handleOptionSelect(filter, e.target.value)}
                                className="form-control"
                            />
                        ) : (
                            <div className="form-select-wrapper">
                                <select
                                    id={`select-options-${filter}`}
                                    className="form-select"
                                    value={selectedOption || ""}
                                    onChange={(e) => handleOptionSelect(filter, e.target.value)}
                                >
                                    <option value="">Select Option</option>
                                    {(options[filter] || []).map(({ label }) => (
                                        <option key={label} value={label}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <Button variant="danger" className="ms-2" onClick={() => handleRemoveFilter(filter)}>
                            <FaMinus />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

SelectedFilters.propTypes = {
    selectedFilters: PropTypes.array.isRequired,
    filterOptions: PropTypes.object.isRequired,
    handleOptionSelect: PropTypes.func.isRequired,
    handleRemoveFilter: PropTypes.func.isRequired,
    selectedDate: PropTypes.string,
    setSelectedDate: PropTypes.func.isRequired
};

export default SelectedFilters;
