import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CloseModal = ({
    showCloseModal,
    handleCloseCloseModal,
    handleConfirmClose,
    hasUnsavedChanges,
    handleOpenSaveModal,
    selectedSavedFilter,
    handleSaveFilter,
}) => (
    <Modal show={showCloseModal} onHide={handleCloseCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Unsaved Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            You have unsaved changes. Do you want to save them before closing?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCloseModal}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirmClose}>
                Discard Changes
            </Button>
            {hasUnsavedChanges && (
                <Button variant="primary" onClick={selectedSavedFilter ? handleSaveFilter : handleOpenSaveModal}>
                    Save Changes
                </Button>
            )}
        </Modal.Footer>
    </Modal>
);

CloseModal.propTypes = {
    showCloseModal: PropTypes.bool.isRequired,
    handleCloseCloseModal: PropTypes.func.isRequired,
    handleConfirmClose: PropTypes.func.isRequired,
    hasUnsavedChanges: PropTypes.bool.isRequired,
    handleSaveFilter: PropTypes.func.isRequired,
    handleOpenSaveModal: PropTypes.func.isRequired,
    selectedSavedFilter: PropTypes.string,
};

export default CloseModal;
