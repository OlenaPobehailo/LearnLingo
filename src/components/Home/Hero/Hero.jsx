import { Button, Image, Main, StyledHero, Text, Title } from "./Hero.styled";

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
        <Button>Get started</Button>
      </Main>
      <Image src="/public/images/hero/block-1.jpg" alt="" />
    </StyledHero>
  );
};

export default Hero;
