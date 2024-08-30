import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SaveFilterModal = ({ showSaveModal, handleCloseSaveModal, filterName, setFilterName, handleSaveNewFilter, handleConfirmClose }) => (
    <Modal show={showSaveModal} onHide={handleCloseSaveModal}>
        <Modal.Header closeButton>
            <Modal.Title>Save Search Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="filterName">
                <Form.Label>Filter Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter filter name"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSaveModal}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => {
                handleSaveNewFilter();
                handleConfirmClose(); // Ensure this is called when saving is successful
            }}>
                Save
            </Button>
        </Modal.Footer>
    </Modal>
);

SaveFilterModal.propTypes = {
    showSaveModal: PropTypes.bool.isRequired,
    handleCloseSaveModal: PropTypes.func.isRequired,
    filterName: PropTypes.string.isRequired,
    setFilterName: PropTypes.func.isRequired,
    handleSaveNewFilter: PropTypes.func.isRequired,
    handleConfirmClose : PropTypes.func.isRequired
};

export default SaveFilterModal;
