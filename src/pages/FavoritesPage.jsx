import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Card from "../components/Card";
import { auth } from "../../firebase-config";
import { GreyWrapper, StyledCommonWrapper } from "../styles/CommonStyled";
import {
  FavoritePageWrapper,
  NoFavoriteTeachers,
  StyledLink,
  TeachersList,
} from "./Page.styled";

const FavoritesPage = () => {
  const [user, setUser] = useState({});
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || {});
    });
  }, []);

  useEffect(() => {
    if (user && user.uid) {
      const userId = user.uid;
      const favorites = JSON.parse(localStorage.getItem(userId)) || [];
      setFavoriteTeachers(favorites);
    }
  }, [user]);

  return (
    <GreyWrapper>
      <StyledCommonWrapper>
        {user ? (
          <FavoritePageWrapper>
            {favoriteTeachers.length > 0 ? (
              <TeachersList>
                {favoriteTeachers.map((teacher, index) => (
                  <div key={index}>
                    <Card teacher={teacher} />
                  </div>
                ))}
              </TeachersList>
            ) : (
              <NoFavoriteTeachers>
                No favorite teachers found.{" "}
                <StyledLink to="/teachers">Add</StyledLink> some favorites!
              </NoFavoriteTeachers>
            )}
          </FavoritePageWrapper>
        ) : (
          <p>Please log in to view this content</p>
        )}
      </StyledCommonWrapper>
    </GreyWrapper>
  );
};

export default FavoritesPage;
