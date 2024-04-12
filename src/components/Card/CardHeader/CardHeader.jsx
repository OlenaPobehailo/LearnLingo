import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import { auth } from "../../../../firebase-config";
import BookIcon from "../../../assets/icons/book-open.svg?react";
import StarIcon from "../../../assets/icons/star.svg?react";

import { FavoriteButton, Info, Item, Text, Wrapper } from "./CardHeader.styled";
import HeartIcon from "../../../components/HeartIcon/HeartIcon";

const CardHeader = ({ teacher }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const favorites = JSON.parse(localStorage.getItem(userId)) || [];

      setIsFavorite(
        favorites.some(
          (favorite) =>
            favorite.name === teacher.name &&
            favorite.surname === teacher.surname
        )
      );
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsFavorite(false);
      }
    });

    return () => unsubscribe();
  }, [teacher, user]);

  const handleFavoriteClick = () => {
    if (!user) {
      toast("This functionality is available only to authorized users", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const userId = user.uid;
    setIsFavorite(!isFavorite);

    const favorites = JSON.parse(localStorage.getItem(userId)) || [];

    const updatedFavorites = isFavorite
      ? favorites.filter(
          (favorite) =>
            favorite.name !== teacher.name ||
            favorite.surname !== teacher.surname
        )
      : [...favorites, teacher];

    localStorage.setItem(userId, JSON.stringify(updatedFavorites));
  };

  return (
    <Wrapper>
      <Text>Languages</Text>
      <Info>
        <Item>
          <BookIcon />
          Lessons online
        </Item>
        <Item>Lessons done: {teacher.lessons_done}</Item>
        <Item>
          <StarIcon />
          Rating: {teacher.rating}
        </Item>
        <Item>
          Price / 1 hour: <span>{teacher.price_per_hour}$</span>
        </Item>
        <FavoriteButton onClick={handleFavoriteClick}>
          <HeartIcon
            stroke={isFavorite ? "#F4C550" : "#121417"}
            fill={isFavorite ? "#F4C550" : "none"}
          />
        </FavoriteButton>
      </Info>
    </Wrapper>
  );
};

export default CardHeader;

CardHeader.propTypes = {
  teacher: PropTypes.object,
};
