import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase-config";
import LoginIcon from "../../assets/icons/log-in.svg?react";

import {
  FlexWrapper,
  Greeting,
  Login,
  Logout,
  Register,
} from "./AuthButtons.styled";

const AuthButtons = ({ openModal, logout }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <div>
      {!user && (
        <FlexWrapper>
          <Login onClick={() => openModal("login")}>
            <LoginIcon />
            Log in
          </Login>
          <Register onClick={() => openModal("register")}>
            Registration
          </Register>
        </FlexWrapper>
      )}

      {user && (
        <FlexWrapper>
          <Greeting>{user.displayName}</Greeting>
          <Logout onClick={logout}>Log Out</Logout>
        </FlexWrapper>
      )}
    </div>
  );
};

export default AuthButtons;

AuthButtons.propTypes = {
  openModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
