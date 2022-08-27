import React, { useState, useEffect } from "react";

function ReviewsFunc() {
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    const key = "uVvIeZxssRmiAWNpOQMZTTZgxjZ7eu7O";
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${key}`;

    try {
      const data = await fetch(url);
      const resp = await data.json();
      setReviews(resp.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      {reviews.map((item, index) => {
        const { display_title, critics_pick, byline, headline } = item;
        return (
          <div key={index}>
            <h3>Byline: {byline}</h3>
            <h3>Critics Pick: {critics_pick}</h3>
            <h3>Title: {display_title}</h3>
            <h3>Headline: {headline}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ReviewsFunc;
