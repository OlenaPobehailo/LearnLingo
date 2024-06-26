import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 14px;

  padding: 16px 18px;
  height: 48px;

  background-color: #fff;
  color: ${(props) => props.theme.colors.text.primary};

  font-family: var(--medium);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;

  cursor: pointer;
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 108%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  z-index: 10;
`;

export const OptionItem = styled.div`
  padding: 8px;
  cursor: pointer;

  font-family: var(--medium);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${(props) => props.theme.colors.text.gray};
  transition: color 0.3s ease;


  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
