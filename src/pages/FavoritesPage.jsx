import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { StyledCommonWrapper } from "../styles/CommonStyled";
import {
  LoadMoreButton,
  TeacherPageWrapper,
  TeachersList,
} from "./Page.styled";
import Card from "../components/Card";

const FavoritesPage = () => {
  const [user, setUser] = useState({});
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
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

  useEffect(() => {
    setTotalTeachers(favoriteTeachers.length);
  }, [favoriteTeachers]);

  const handleLoadMore = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  console.log("Favorite Teachers:", favoriteTeachers);
  console.log("Total Teachers:", totalTeachers);
  console.log("Visible Teachers:", visibleTeachers);

  return (
    <StyledCommonWrapper>
      FavoritesPage
      {user ? (
        <>
          <h1>Favorites for {user.email}</h1>

          <TeacherPageWrapper>
            <TeachersList>
              {favoriteTeachers &&
                favoriteTeachers.map(
                  (teacher, index) =>
                    index < visibleTeachers && (
                      <div key={index}>
                        <Card teacher={teacher} />
                      </div>
                    )
                )}
            </TeachersList>
            {totalTeachers > visibleTeachers && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load more
              </LoadMoreButton>
            )}
          </TeacherPageWrapper>
        </>
      ) : (
        <p>Please log in to view this content</p>
      )}
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;
