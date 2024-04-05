import {
  NotFoundLink,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
} from "./Page.styled";

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>
        Sorry, the page you are looking for does not exist. Please go back to
        the <NotFoundLink href="/">Home page</NotFoundLink>.
      </NotFoundText>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
