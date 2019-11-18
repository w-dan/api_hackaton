/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

const User = require('../models/user');

function getUsers(req, res) {
  User.find({}, (error, users) => {
    if (error) return res.status(500).send(error);

    return res.status(200).send(users);
  });
}

function getUserByID(req, res) {
  const { userId } = req.params;

  User.findById(userId, (error, user) => {
    if (!user) return res.status(404).send({ message: 'User not found' });

    return res.status(200).send(user);
  });
}

function createUser(req, res) {
  const user = new User(req.body);

  user.save((error, newUser) => {
    if (error) return res.status(500).send({ message: `Error saving user ${error}` });

    return res.status(200).send(`User created: ${newUser}`);
  });
}

function replaceUser(req, res) {
  const { userId } = req.params;
  const { mail } = req.body;
  const { password } = req.body;
  const { phone } = req.body;
  const { name } = req.body;
  const { surname } = req.body;

  if (!mail || !password || !phone || !name || !surname) {
    return res.status(400).send({ message: 'Missing parameters' });
  }

  const userReplacement = req.body;

  User.findById(userId, (error, user) => {
    if (error) return res.status(404).send('User not found');

    user.replaceOne(userReplacement, (err) => {
      if (err) return res.status(500).send(err);

      return res.status(200).send({ message: 'User successfully updated' });
    });
  });
}

function editUser(req, res) {
  const { userId } = req.params;

  User.findByIdAndUpdate(userId, req.body, { new: true }, (err, user) => {
    if (!user) return res.status(404).send('User not found');
    if (err) return res.status(500).send(err);

    return res.status(200).send(`User successfully updated ${user}`);
  });
}

function deleteUser(req, res) {
  const { userId } = req.params;

  User.findOneAndDelete(userId, (error, user) => {
    if (error) return res.status(500).send(error);
    if (!user) return res.status(404).send('User not found');

    return res.status(200).send({ message: `User deleted succesfully ${user}` });
  });
}

function login(req, res) {
  const { mail } = req.params;
  const { password } = req.body;

  User.findOne({ mail }, (error, user) => {
    if (error) return res.status(404).send('User not found');

    if (password !== user.password) return res.status(200).send('Password is incorrect');

    return res.status(200).send({ message: 'Logged in successfully' });
  });
}

module.exports = {
  getUsers,
  getUserByID,
  createUser,
  replaceUser,
  editUser,
  deleteUser,
  login,
};
