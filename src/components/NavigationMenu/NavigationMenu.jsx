import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase-config";
import { NavMenu, StyledNavLink } from "./NavigationMenu.styled";

const NavigationMenu = () => {
  const [user] = useAuthState(auth);

  return (
    <NavMenu>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/teachers">Teachers</StyledNavLink>
      </li>
      {user && (
        <li>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </li>
      )}
    </NavMenu>
  );
};

export default NavigationMenu;
