import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const TeacherPageWrapper = styled.div`
  background: #f8f8f8;
`;

export const FavoritePageWrapper = styled.div`
  padding-top: 96px;
  background: #f8f8f8;
`;

export const TeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin-bottom: 64px;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 96px;
  height: 60px;

  border-radius: 12px;
  padding: 16px 48px;

  background: #f4c550;
  color: #121417;

  font-family: var(--bold);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;
