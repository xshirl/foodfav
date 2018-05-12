\c foodfav_db

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favs;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS rest CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR(255),
    username VARCHAR(255)

);

CREATE TABLE rest (
    id SERIAL PRIMARY KEY,
    name TEXT,
    location TEXT,
    image_url TEXT,
    rating INTEGER,
    price TEXT
);

CREATE TABLE favs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    bar_id INTEGER REFERENCES bars(id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    rating INTEGER,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    rest_id INTEGER REFERENCES rest(id)
);



