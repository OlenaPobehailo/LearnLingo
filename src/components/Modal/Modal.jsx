import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import CrossIcon from "../../assets/icons/x.svg?react";

import { CloseButton, ModalContent, ModalOverlay } from "./Modal.styled";

const rootModal = document.querySelector("#modal");

const Modal = ({ onClose, children }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [handleKeyDown]);

  const handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CrossIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
