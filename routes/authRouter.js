const ar = require('express').Router();

ar.post('/register', (req,res) => {
    res.setEncoding(`Register new user with email ${req.body.email} and pw ${req.body.password}`);
});

ar.post('/login', (req,res) => {
    res.send(`Log in user with email ${req.body.email} and pw ${req.body.password}`);
});

module.exports = ar;