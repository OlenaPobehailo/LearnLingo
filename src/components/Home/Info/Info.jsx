import { Item, Key, StyledInfo, Value } from "./Info.styled";

const Info = () => {
  return (
    <StyledInfo>
      <Item>
        <Value>32,000 +</Value>
        <Key>Experienced tutors</Key>
      </Item>

      <Item>
        <Value>300,000 +</Value>
        <Key>5-star tutor reviews</Key>
      </Item>

      <Item>
        <Value>120 +</Value>
        <Key>Subjects taught</Key>
      </Item>

      <Item>
        <Value>200 +</Value>
        <Key>Tutor nationalities</Key>
      </Item>
    </StyledInfo>
  );
};

export default Info;
