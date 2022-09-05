import React, { Component } from 'react'
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  addNewReview = review => {
    this.setState(() => this.props.theMovie.movieReviews.reviews.push(review));
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <ReviewForm onNewReview={this.addNewReview}/>
        </div>
        <div><br></br></div>
        <div className="row">
          <ReviewList forMovie={this.props.theMovie}/>          
        </div>
      </div>
    )
  }
}
