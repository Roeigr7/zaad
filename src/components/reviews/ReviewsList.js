import React, { Fragment } from "react";
import ReviewItem from "./ReviewItem";

export const ReviewsList = ({reviews}) => {
  return (
    <Fragment>
      {reviews&&reviews.map(review => {
        return <ReviewItem key={review.id} {...review} />;
      })}
    </Fragment>
  );
};

export default ReviewsList ;
