import { Link } from "react-router-dom";
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

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #121417;
`;

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: #121417;
`;

export const NotFoundLink = styled.a`
  color: #121417;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #f4c550;
  }
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

export const NoFavoriteTeachers = styled.p`
  font-family: var(--regular);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
  color: #121417;
  margin-top: 20px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-family: var(--regular);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.25;
  color: #121417;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: #f4c550;
  }
`;
