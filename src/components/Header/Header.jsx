import { NavLink } from "react-router-dom";
import { AuthMenu, NavMenu, StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
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

      <AuthMenu>
        <li>
          <button>login</button>
        </li>
        <li>
          <button>register</button>
        </li>
      </AuthMenu>
    </StyledHeader>
  );
};

export default Header;
