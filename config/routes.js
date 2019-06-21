const axios = require('axios');

const { authenticate } = require('../auth/authenticate');
const Users = require('../users/users-model.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/users', authenticate, getUsers)
};

function register(req, res) {
  // implement user registration
}

function login(req, res) {
  // implement user login
}

function getUsers(req, res) {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(err => res.send(err))
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
