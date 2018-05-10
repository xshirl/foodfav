\c foodfav_db;


INSERT INTO bars (name, location, image_url, rating, price)
VALUES ('Raise New York', '416 3rd Ave', 'https://s3-media1.fl.yelpcdn.com/bphoto/EQy5cu37S2TNNb-4kTLtMw/ls.jpg', 5, '$$'),
('The Dead Rabbit', '30 Water St', 'https://s3-media2.fl.yelpcdn.com/bphoto/7txsI-CAV_BW6IN4pf5WlQ/ls.jpg', 4, '$$'),
('Flatbush Zombie House', '734 Flatbush Ave', 'https://s3-media1.fl.yelpcdn.com/bphoto/eGSCRuKytQZJG35jIUX1pw/ls.jpg', 5, '$$'),
('The Commissioner', '247 5th Ave', 'https://s3-media3.fl.yelpcdn.com/bphoto/pw9cgbf0snFt_c9LDV4FXg/ls.jpg', 5, '$'),
('The Up & Up', '116 MacDougal St', 'https://s3-media3.fl.yelpcdn.com/bphoto/PjivAhOykU5fiHN2f_bFig/ls.jpg', 4, '$$'),
('Whiskey Tavern', '79 Baxter St', 'https://s3-media3.fl.yelpcdn.com/bphoto/P3eezkfdJ1cP3Z34T5Kmyg/ls.jpg', 5, '$$');

INSERT INTO users (email, pw_digest, username)
VALUES('xshirl@gmail.com', 'branch', 'xshirl');

INSERT INTO reviews (content, user_id, bar_id)
VALUES
    ('Very good food', 1, 1),
    ('Great drinks', 1, 2),
    ('Nice vibes', 1, 3),
    ('Great drinks', 1, 4),
    ('Awesome service', 1, 5);


INSERT INTO favs (user_id, bar_id)
VALUES (1, 1),
(1, 2);


