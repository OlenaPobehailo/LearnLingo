import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase-config";

const AuthButtons = ({ openModal, logout }) => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <ul>
      {!user && (
        <>
          <li>
            <button onClick={() => openModal("login")}>login</button>
          </li>
          <li>
            <button onClick={() => openModal("register")}>register</button>
          </li>
        </>
      )}

      {user && (
        <li>
          <span>Hello, {user.displayName}!</span>
          <button onClick={logout}>logout</button>
        </li>
      )}
    </ul>
  );
};

export default AuthButtons;

AuthButtons.propTypes = {
  openModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
