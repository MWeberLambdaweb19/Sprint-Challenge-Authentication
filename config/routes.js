const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');
const Users = require('../users/users-model.js');
const tokenMaker = require('../auth/token-maker.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/users', authenticate, getUsers)
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
  .then(newUser => {
    const token = tokenMaker.generateToken(newUser);
    res.status(201).json({newUser, token});
  })
  .catch(error => {
    res.status(500).json(error);
  })
}

function login(req, res) {
  let {username, password} = req.body;
  console.log(req.body)
  Users.findBy({username})
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
    const token = tokenMaker.generateToken(user);
    res.status(200).json({
      message: `Welcome ${user.username}! You get a free token! Woo, free token.`,
      token
    });
    } else {
      res.status(401).json({message: "Looks like your username or password was wrong, please try again!"})
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
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
