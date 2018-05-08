\c foodfav_db

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favs;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR(255),
    username VARCHAR(255),
    favs_id INTEGER REFERENCES favs (id),
    review_id INTEGER REFERENCES reviews (id)
);

CREATE TABLE favs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    name VARCHAR(255),
    -- figure out how to reference from Yelp API
    -- image_url TEXT
    -- rest_id INTEGER REFERENCES
)

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id INTEGER REFERENCES users (id)
    -- need Yelp API
    -- rest_id INTEGER REFERENCES
)