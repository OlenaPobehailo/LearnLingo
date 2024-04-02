import Info from "../components/Home/Info/Info";
import Hero from "../components/Home/Hero";
import { StyledCommonWrapper } from "../styles/CommonStyled";

const HomePage = () => {
  return (
    <StyledCommonWrapper>
      <Hero />
      {/* <Info/> */}
    </StyledCommonWrapper>
  );
};

export default HomePage;
