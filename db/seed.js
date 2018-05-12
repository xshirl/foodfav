const user = require('../models/user');
const reviews = require('../models/reviews');

const userSeeds = [
    {email: 'email@ga.co', password: 'password'},
    {email: 'email2@ga.co', password: 'password'}
];

const reviewSeeds = [
    {
        content: 'food is good',
        user_id: 0,
        bar_id: 0
    },
    {
        content: 'food sucks',
        user_id: 1,
        bar_id: 1
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