import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Card from "../components/Card";
import { auth } from "../../firebase-config";
import { StyledCommonWrapper } from "../styles/CommonStyled";
import {
  TeacherPageWrapper,
  TeachersList,
} from "./Page.styled";

const FavoritesPage = () => {
  const [user, setUser] = useState({});
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // console.log(user);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteTeachers(favorites);
  }, []);


  console.log("Favorite Teachers:", favoriteTeachers);

  return (
    <StyledCommonWrapper>
      {user ? (
          <TeacherPageWrapper>
            <TeachersList>
              {favoriteTeachers &&
                favoriteTeachers.map((teacher, index) => (
                  <div key={index}>
                    <Card teacher={teacher} />
                  </div>
                ))}
            </TeachersList>
          </TeacherPageWrapper>
      ) : (
        <p>Please log in to view this content</p>
      )}
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;
