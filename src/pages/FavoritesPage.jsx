import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Card from "../components/Card";
import { auth } from "../../firebase-config";
import { GreyWrapper, StyledCommonWrapper } from "../styles/CommonStyled";
import {
  FavoritePageWrapper,
  NoFavoriteTeachers,
  NotAuthorizedUser,
  StyledLink,
  TeachersList,
} from "./Page.styled";

const FavoritesPage = () => {
  const [user, setUser] = useState(null);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setIsUserLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.uid) {
      const userId = user.uid;
      const favorites = JSON.parse(localStorage.getItem(userId)) || [];
      setFavoriteTeachers(favorites);
    }
  }, [user]);

  useEffect(() => {
    if (!isUserLoaded) {
      return;
    }

    const timer = setTimeout(() => {
      console.log(user);
      if (!user || !user.uid) {
        navigate("/");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isUserLoaded, user, navigate]);

  return (
    <GreyWrapper>
      <StyledCommonWrapper>
        {user && user.uid ? (
          <FavoritePageWrapper>
            <TeachersList>
              {favoriteTeachers.length > 0 ? (
                favoriteTeachers.map((teacher, index) => (
                  <div key={index}>
                    <Card teacher={teacher} />
                  </div>
                ))
              ) : (
                <NoFavoriteTeachers>
                  No favorite teachers found.{" "}
                  <StyledLink to="/teachers">Add</StyledLink> some favorites!
                </NoFavoriteTeachers>
              )}
            </TeachersList>
          </FavoritePageWrapper>
        ) : (
          <NotAuthorizedUser>
            Please log in to view this content. If you do not log in after 10
            seconds, you will be automatically redirected to the home page.
          </NotAuthorizedUser>
        )}
      </StyledCommonWrapper>
    </GreyWrapper>
  );
};

export default FavoritesPage;
