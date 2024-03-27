import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { StyledCommonWrapper } from "../styles/CommonStyled";

const FavoritesPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  console.log(user);

  return (
    <StyledCommonWrapper>
      FavoritesPage
      {user ? (
        <h1>Favorites for {user.email}</h1>
      ) : (
        <p>Please log in to view this content</p>
      )}
    </StyledCommonWrapper>
  );
};

export default FavoritesPage;
