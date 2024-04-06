import PropTypes from "prop-types";
import StarIcon from "../../../assets/icons/star.svg?react";
import {
  ReviewComment,
  Reviewer,
  ReviewerAvatar,
  ReviewerName,
  ReviewerRating,
} from "./Review.styled";

const Review = ({ review }) => {
  return (
    <>
      <Reviewer>
        <ReviewerAvatar src="" alt="" />
        <div>
          <ReviewerName>{review.reviewer_name}</ReviewerName>
          <ReviewerRating>
            <StarIcon />
            {review.reviewer_rating.toFixed(1)}
          </ReviewerRating>
        </div>
      </Reviewer>
      <ReviewComment>{review.comment}</ReviewComment>
    </>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string,
    reviewer_rating: PropTypes.number,
    comment: PropTypes.string,
  }),
};
