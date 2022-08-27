import React, { Component } from "react";

class ReviewsClass extends Component {
  constructor(props) {
    super();
    this.state = { reviews: [] };
  }

  key = "uVvIeZxssRmiAWNpOQMZTTZgxjZ7eu7O";
  url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${this.key}`;

  fetchReviews = async () => {
    try {
      const data = await fetch(this.url);
      const resp = await data.json();
      this.setState({ reviews: resp.results });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchReviews();
  }
  render() {
    return (
      <>
        {this.state.reviews.map((item, index) => {
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
}

export default ReviewsClass;
