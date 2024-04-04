import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase-config";
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
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5h1c1.4 0 2.1 0 2.64.27.47.24.85.62 1.09 1.1.27.53.27 1.23.27 2.63v7c0 1.4 0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09c-.53.27-1.23.27-2.63.27h-1M8.33 5.83 12.5 10m0 0-4.17 4.17M12.5 10h-10"
                stroke="#F4C550"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
