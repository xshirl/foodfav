\c foodfav_db;

DELETE FROM reviews;

INSERT INTO reviews (content, user_id, rest_id)
VALUES
    ('Very good food', 1, "X8ZS-dgiMIJvhwf9SaDnjw");


INSERT INTO favs (user_id, rest_id)
VALUES (1, "X8ZS-dgiMIJvhwf9SaDnjw"),
(1, "0CjK3esfpFcxIopebzjFxA"),
(2, 'Z_X0WvSmh9DUxBD9xhet9Q');

INSERT INTO users (email, pw_digest, username)
VALUES("xshirl@gmail.com", "branch", "xshirl"),
('x@gmail.com', 'eve', 'x');
