import React, { Component } from 'react'
import star from './Symbol-Star-PNG.png';

// class that displays the rating stars (1-5)
export default class RatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    }
  }

  render() {

    let stars = [];
    for (let i=0;i<this.state.rating; i++) {
      stars.push(<img src={star} alt='1 star' width="20px" height="20px" key={i}/>);
    }

    return (
      <span>
        {stars}
      </span>
    )
  }
}
