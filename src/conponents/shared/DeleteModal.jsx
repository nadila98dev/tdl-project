import React from "react";

const DeleteModal = () => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button onClick={closeModal}>Close</button>
          </div>

          <div>Are you sure you want to delete the data ?</div>

          <div className="flex flex-row justify-evenly pt-10">
            <button type="button">Yes</button>
            <button type="button" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
