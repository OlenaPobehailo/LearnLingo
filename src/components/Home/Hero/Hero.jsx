import {
  Image,
  ImageWrapper,
  Main,
  StyledHero,
  StyledLink,
  Text,
  Title,
} from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <Main>
        <Title>
          Unlock your potential with the best <span>language</span> tutors
        </Title>
        <Text>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Text>
        <StyledLink to="/teachers">Get started</StyledLink>
      </Main>
      <ImageWrapper>
        <Image src="/public/images/hero/block-1.jpg" alt="" />
      </ImageWrapper>
    </StyledHero>
  );
};

export default Hero;
