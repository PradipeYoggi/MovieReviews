# MovieReviews

This web app presents a list of movies and allows inputting of reviews 
and seeing the list of previously input reviews along side the movie shown in the carousel.

The hierarchy of components are:

App
    MoviesList
        Movie
            ReviewForm
            ReviewList
                Review
                    RatingStars

App -- The application class

MoviesList -- The class that holds a list of movies for presentation to the user
Movie -- The class that holds information about a movie and the reviews associated with it
ReviewForm -- The class that presents the review input form for storing into the review list
Review -- The class that presents an individual review
RatingStars -- The class that presents the ratings in stars

How the code is structured

The data structure is held in the MoviesList component in it's state and passed down the hierarchy
as is relevant for use in each component.

It is possible to have structured things such that the data model is separated from the presentation layer,
but for the purposes of this program (primarily a learning exercise) this wasn't done. That may be another
exercise for another day after Redux has been mastered.



