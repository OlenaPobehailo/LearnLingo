import { NavLink } from "react-router-dom";
import { NavMenu } from "./NavigationMenu.styled";

const NavigationMenu = () => {
  return (
    <NavMenu>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">Favorites</NavLink>
      </li>
    </NavMenu>
  );
};

export default NavigationMenu;
