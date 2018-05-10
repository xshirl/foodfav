import { queryResult } from 'pg-promise';

const db =  require('../config/connection');

function getAll() {
    return queryPromise = db.any(`
    SELECT * FROM 
    `
    );
}

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