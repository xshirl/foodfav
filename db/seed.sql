\c foodfav_db;

DELETE FROM reviews;

INSERT INTO reviews (content, user_id)
VALUES
    ('Very good food', 1)