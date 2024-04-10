import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 24px;
  padding: 12px;

  background-color: ${(props) => props.theme.colors.background.primary};

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    width: 1184px;
    padding: 24px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
  padding: 14px;
  border: 3px solid #fbe9ba;
`;

export const RightPart = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 968px;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  & span {
    color: #38cd3e;
  }
`;

export const Text = styled.p`
  color: #8a8a89;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-right: 2px solid ${(props) => props.theme.colors.text.gray};

  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--medium);
  font-weight: 500;
  line-height: 1.5;

  &:last-of-type {
    padding-right: 0;
    border: none;
    margin-right: 64px;
  }
`;

export const Teacher = styled.p`
  margin-bottom: 32px;

  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--medium);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
`;

export const TeacherInfoWrapper = styled.div`
  margin-bottom: 16px;
`;

export const TeacherInfo = styled.div`
  display: flex;
  margin-bottom: 8px;
  color: #8a8a89;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  white-space: "nowrap";

  & span {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

export const Languages = styled.ul`
  display: flex;
`;

export const ReadMoreButton = styled.button`
  margin-bottom: 32px;

  background-color: transparent;
  color: ${(props) => props.theme.colors.text.primary};
  border: none;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Experience = styled.p`
  margin-bottom: 32px;

  font-family: var(--regular);
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const BookLesson = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  padding: 16px 48px;
  min-width: 232px;
  height: 60px;

  background-color: ${(props) => props.theme.colors.accent.primary};
  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--bold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accent.secondary};
  }
`;

export const Reviews = styled.ul`
  margin-bottom: 32px;
`;

export const Levels = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Level = styled.li`
  border: 1px solid ${(props) => props.theme.colors.text.gray};
  border-radius: 35px;
  padding: 8px 12px;

  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--medium);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.143;

  &:first-child {
    background-color: ${(props) => props.theme.colors.accent.primary};
    border: 1px solid ${(props) => props.theme.colors.accent.primary};
  }
`;
