import LogoImage from "/images/ukraine.png";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImage} alt="header logo" width={28} height={28} />
      <span>LearnLingo</span>
    </StyledLogo>
  );
};

export default Logo;
