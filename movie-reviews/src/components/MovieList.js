import React, { Component } from 'react';
import Movie from './Movie.js';
import TopGun from './Top Gun Maverick.png';
import SpiderMan1 from './Spider-Man - Far From Home.png';
import SpiderMan2 from './Spider-Man - 2017.png';
import BootstrapCarousel from './BootstrapCarousel'

export default class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentMovie: 0
    }

    this.state.movies = [
      {
        id: 1,
        image: TopGun,
        caption: 'Top Gun Maverick',
        movieReviews: {
          reviews: []
        }
      },
      {
        id: 2,
        image: SpiderMan1,
        caption: 'Spider-Man - Far From Home',
        movieReviews: {
          reviews: []
        }
      },
      {
        id: 3,
        image: SpiderMan2,
        caption: 'Spider-Man - 2017',
        movieReviews: {
          reviews: []
        }
      }
    ];
  }

  movieSelectionChanged = (selectedMovie) => {
    this.setState(() => this.state.currentMovie = selectedMovie);
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <BootstrapCarousel id='movies1' items={this.state.movies} onSelectionChanged={this.movieSelectionChanged}/>
          </div>
          <div className="col-lg-6">
            <Movie theMovie={this.state.movies[this.state.currentMovie]}></Movie>
          </div>
        </div>
      </div>
    )
  }
}
