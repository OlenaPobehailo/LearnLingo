import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 20px;

  font-family: var(--medium);
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
`;

export const Text = styled.h2`
  margin-bottom: 40px;

  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.375;
  color: rgba(18, 20, 23, 0.8);
`;

export const Teacher = styled.div`
  display: flex;
  gap: 14px;

  margin-bottom: 40px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const Subtitle = styled.p`
  margin-bottom: 4px;

  color: #8a8a89;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
`;

export const TeacherName = styled.p`
  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Question = styled.p`
  margin-bottom: 20px;

  color: #121417;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
`;

export const RadioWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Item = styled.div``;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  color: #121417;

  font-family: var(--regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
`;

export const RadioInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 3px solid #ccc;
  border-radius: 50%;
  outline: none;
  margin-right: 8px;
  margin-bottom: 2px;

  &:checked {
    border: 3px solid #f4c550;
  }

  &:checked::after {
    content: "";
    width: 9px;
    height: 9px;
    background-color: #f4c550;
    border-radius: 50%;
    display: block;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 54px;
  padding: 16px 18px;
  margin-bottom: 18px;

  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 60px;

  background-color: #f4c550;
  color: #121417;

  font-family: var(--bold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;