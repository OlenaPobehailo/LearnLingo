import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase-config";
import { NavMenu } from "./NavigationMenu.styled";

const NavigationMenu = () => {
  const [user] = useAuthState(auth);

  return (
    <NavMenu>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      )}
    </NavMenu>
  );
};

export default NavigationMenu;
