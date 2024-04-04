import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
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
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#121417"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#121417"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
