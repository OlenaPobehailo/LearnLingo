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

export const FavoritePageWrapper = styled.div`
  padding-top: 96px;
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
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NotFoundLink = styled.a`
  color: ${(props) => props.theme.colors.text.primary};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent.primary};
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

export const NoFavoriteTeachers = styled.p`
  font-family: var(--regular);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: 20px;
  text-align: center;
`;

export const NoResultsFound = styled.p`
  font-family: var(--regular);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: 20px;
  text-align: center;
`;

export const NotAuthorizedUser = styled.p`
  font-family: var(--regular);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-family: var(--regular);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text.primary};
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accent.primary};
  }
`;
