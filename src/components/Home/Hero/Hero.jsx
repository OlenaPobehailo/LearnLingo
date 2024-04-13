import block1Image from "/public/images/hero/block-1.jpg";
import block2Image from "/public/images/hero/block-2.jpg";
import block3Image from "/public/images/hero/block-3.jpg";

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
        <picture>
          <source
            srcSet={`${block1Image} 1x, ${block2Image} 2x, ${block3Image} 3x`}
          />
          <Image src={block1Image} alt="hero" />
        </picture>
      </ImageWrapper>
    </StyledHero>
  );
};

export default Hero;
