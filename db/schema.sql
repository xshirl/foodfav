\c foodfav_db

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favs;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR(255),
    username VARCHAR(255),

);

CREATE TABLE favs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    rest_id TEXT
)

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id INTEGER REFERENCES users (id)
    rest_id TEXT
)


