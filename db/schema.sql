DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

\c movie_db;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    review TEXT NOT NULL,
    movie_id INTEGER NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE SET NULL
);