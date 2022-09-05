import React, { Component } from 'react'
import RatingStars from './RatingStars';
import styles from './Review.module.css';

// Class that renders an individual review
export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: props.rating,
          reviewedOn: props.reviewedOn,
          reviewedBy: props.reviewedBy,
          title: props.reviewTitle,
          content: props.reviewText
        };

    }

  render() {

    return (
      <div>
        <div className='container'>
          <div className='card'>
            <div className='row'>
              <div className='col-sm-4'>
                <span>Rated <RatingStars rating={this.state.rating} /></span>
                <div>by {this.state.reviewedBy}</div>
                <div>on {this.state.reviewedOn.toDateString()}</div>
              </div>
              <div className='col-sm-8'>
                <div id={styles['review-title']} className='row'>
                  {this.state.title}
                </div>
                <div id={styles['review-content']} className='row'>
                  {this.state.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
