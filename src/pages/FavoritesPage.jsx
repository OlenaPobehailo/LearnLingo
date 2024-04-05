import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Card from "../components/Card";
import { auth } from "../../firebase-config";
import { StyledCommonWrapper } from "../styles/CommonStyled";
import { FavoritePageWrapper, TeachersList } from "./Page.styled";

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
    <StyledCommonWrapper>
      {user ? (
        <FavoritePageWrapper>
          <TeachersList>
            {favoriteTeachers &&
              favoriteTeachers.map((teacher, index) => (
                <div key={index}>
                  <Card teacher={teacher} />
                </div>
              ))}
          </TeachersList>
        </FavoritePageWrapper>
      ) : (
        <p>Please log in to view this content</p>
      )}
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;
