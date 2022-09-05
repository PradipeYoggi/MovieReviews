import React, { Component } from 'react'
import styles from './ReviewForm.module.css';

export default class ReviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      reviewTitle: null,
      reviewText: null,
      reviewer: null
    }

    this.ratingInput = null;
    this.reviewTitleInput = null;
    this.reviewTextInput = null;
    this.reviewerInput = null;
  }

  // ref callbacks
  setRatingInput = (element) => {
    this.ratingInput = element;
  }

  setReviewTitleInput = (element) => {
    this.reviewTitleInput = element;
  }

  setReviewTextInput = (element) => {
    this.reviewTextInput = element;
  }

  setReviewerInput = (element) => {
    this.reviewerInput = element;
  }

  // submit event handler
  handleSubmit = (event) => {
    event.preventDefault();

    // process only if inputs are valid and complete (checks for required fields and valid rating value)
    if ((this.ratingInput.value > 0 && this.ratingInput.value<= 5) &&
        this.reviewTitleInput.value.trim() != '' &&
        this.reviewerInput.value.trim() != '')
    {
      let newReview =       
      {
        rating: this.ratingInput.value, 
        reviewTitle: this.reviewTitleInput.value,
        reviewText: this.reviewTextInput.value,
        reviewer: this.reviewerInput.value,
        reviewedOn: new Date()
      };
  
      // reset input fields
      this.ratingInput.value = null;
      this.reviewTitleInput.value = "";
      this.reviewTextInput.value = "";
      this.reviewerInput.value = "";
  
      this.props.onNewReview(newReview);  
    }
  }

  // focus out hanlder for Rating input field
  onRatingInputBlur = (event) => {

    // sets values to 1 or 5 if out of bounds
    if (this.ratingInput.value <= 0) {
      this.ratingInput.value = 1
    }
    else if (this.ratingInput.value > 5) {
      this.ratingInput.value = 5;
    }
  }

  render() {
    // render the form
    return (
      <div className='review-form'>
        <div className={styles.container + ' container'}>
          <div className="row">
            <div id={styles['review-column']} className="col-sm">
              <h3>New Review</h3>
              <form className="form-group">
                <div className={styles['form-floating'] + ' form-floating'}>
                  <input type="number" className="form-control" id="rating" placeholder="Rating" min="1" max="5" required={true} ref={this.setRatingInput} onBlur={this.onRatingInputBlur} />
                  <label htmlFor="rating">Rating</label>
                </div>
                <div className={styles['form-floating'] + ' form-floating'}>
                  <input type="text" className="form-control" id="title" placeholder="Review Title" required={true} ref={this.setReviewTitleInput} />
                  <label htmlFor="title">Review Title</label>
                </div>
                <div className={styles['form-floating']}>
                  <textarea className={styles['form-floating'] + ' form-control'} id="review-text" placeholder="Review Text" rows="5" ref={this.setReviewTextInput} />
                </div>
                <div className={styles['form-floating'] + ' form-floating'}>
                  <input type="text" className="form-control" id="reviewer-name" placeholder="Reviewer" required={true} ref={this.setReviewerInput} />
                  <label htmlFor="reviewer-name">Reviewer</label>
                </div>
                <button id={styles['submit']} onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
