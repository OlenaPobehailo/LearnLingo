import PropTypes from "prop-types";
import { ModalContent, ModalOverlay } from "./Modal.styled";

const Modal = ({ onClose, children }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
