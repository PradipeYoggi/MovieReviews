import React, { Component } from 'react'
import Review from './Review';
import styles from './ReviewList.module.css';

// Class that renders the list of reviews
export default class ReviewList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = [];
    if (this.props.forMovie.movieReviews.reviews) {
      reviews = this.props.forMovie.movieReviews.reviews.map((review, index) => {
        return (
          <Review key={`${this.props.forMovie.id}_${index}`} 
                  rating={review.rating} reviewedOn={review.reviewedOn} 
                  reviewedBy={review.reviewer} reviewTitle={review.reviewTitle} 
                  reviewText={review.reviewText}/>
        );
      });
    }

    return (
      <div id='ReviewList'>
        <div className={styles.container + ' container'}>
          <h3>Reviews</h3>
          {reviews}
        </div>
      </div>
    )
  }
}
