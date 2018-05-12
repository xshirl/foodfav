const users = require('../models/users');
const reviews = require('../models/reviews');

// (email, pw_digest, username)

const userSeeds = [
    {email: 'email@ga.co', pw_digest: 'password', username: 'email'},
    {email: 'email2@ga.co', pw_digest: 'password', username: 'email2'}
];

// content TEXT,
// rating INTEGER,
// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
// rest_id INTEGER REFERENCES rest(id)
const reviewSeeds = [
    {
        content: 'food is good',
        rating: ,
        user_id: 0,
        rest_id: 0
    },
    {
        content: 'food sucks',
        rating: ,
        user_id: 1,
        rest_id: 1
    }
]

Promise.all(userSeeds.map(user.register))
    .then(users => {
        return Promise.all(reviewSeeds.map((reviewSeed, indx) => quote.create({
            ...reviewSeed,
            creator_id: users[indx % 3].id
        })))
    })
    .then(reviews => console.log(reviews))