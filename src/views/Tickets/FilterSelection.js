import React from 'react';
import PropTypes from 'prop-types';

const FilterSelection = ({ availableFilters, handleFilterSelect }) => (
   
        <div className='row'>
            <div className='col-sm-6'>
                <div className='d-flex align-items-center'>
                    <label htmlFor="filter-select" className='me-2 mb-0 fs-34'>
                        Select Filter:
                    </label>
                    <select
                        id="filter-select"
                        className="form-select"
                        onChange={(e) => handleFilterSelect(e.target.value)}
                    >
                        <option value="">Filter</option>
                        {availableFilters.map(filter => (
                            <option key={filter} value={filter}>
                                {filter}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
  
);

FilterSelection.propTypes = {
    availableFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFilterSelect: PropTypes.func.isRequired
};

export default FilterSelection;
