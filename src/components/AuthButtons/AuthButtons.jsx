import PropTypes from "prop-types";

const AuthButtons = ({ openModal, logout }) => {
  return (
    <ul>
      <li>
        <button onClick={() => openModal("login")}>login</button>
      </li>
      <li>
        <button onClick={() => openModal("register")}>register</button>
      </li>
      <li>
        <button onClick={logout}>logout</button>
      </li>
    </ul>
  );
};

export default AuthButtons;

AuthButtons.propTypes = {
  openModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
