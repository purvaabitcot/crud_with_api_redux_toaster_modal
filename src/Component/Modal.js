import React, { useState } from 'react';

function ConfirmModal({showModal,handleToggleModal, deleteUser}) {

  return (
    <div>
      
      {showModal &&
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Please Confirm</h5>
                <button type="button" className="btn-close" onClick={handleToggleModal}></button>
              </div>
              <div className="modal-body">
                <h3>Are you sure want to delete ?</h3>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleToggleModal}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={deleteUser}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      }
      {showModal &&
        <div className="modal-backdrop fade show"></div>
      }
    </div>
  );
}

export default ConfirmModal;
