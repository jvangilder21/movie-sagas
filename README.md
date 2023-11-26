
# Movie Sagas

This repository contains a simple web application that allows users to view a list of movies and their details. The application is built using React for the frontend, Redux for state management, and Express for the backend. The data is stored in a PostgreSQL database.

## Database

This file defines the structure of the PostgreSQL database. It includes the creation of tables for movies, genres, and a junction table to represent the many-to-many relationship between movies and genres. Additionally, some sample data for movies and genres is inserted into the tables.

## Description

The Movie Saga application has a Details component and a MovieList component. The Details component pulls all the details for each movie and the MovieList component has all the movies listed on the DOM for the Home page.

To run the application you must npm install, npm run server, and npm run client. Then you will load into the localhost and see the Movie List page displaying all the movies. When a movie is click on it will bring the user to the movie Details page where it lists the movie name, picture, genre, and description.

