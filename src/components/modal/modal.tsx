import React from "react";
import { useModal } from "../../contexts/modalContext/modalContext";
import { StyledContainerModal } from "./styledComponents";

const Modal = () => {
  const { closeModal, childrenModal, animationModal } = useModal();

  return (
    <StyledContainerModal animationModal={animationModal}>
      <div className="modal">
        <button onClick={closeModal} className="btnCloseModal">X</button>
        {childrenModal}
      </div>
    </StyledContainerModal>
  );
};

export default Modal;
