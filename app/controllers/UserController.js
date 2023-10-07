const db = require("../models");
const Users = db.users;

module.exports = {
  async index(req, res) {
    res.send('list users')
  },

  async show(req, res) {
    res.send('find user')
  },

  async create(req, res) {
    res.send('create user')
  },

  async update(req, res) {
    res.send('update user')
  },

  async delete(req, res) {
    res.send('delete user')
  },
};