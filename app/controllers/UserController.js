const db = require("../models");
const User = db.users;

const validateUser = (req) => {
  if (!req.body.name) {
    return "O nome do Usuário é obrigatório!";
  } else if (!req.body.email) {
    return "O email do Usuário é obrigatório!";
  } else if (!req.body.senha) {
    return "A senha do Usuário é obrigatória!";
  }

  return false;
}

module.exports = {
  // Create and Save a new User
  async create(req, res) {

    // Validation of required fields
    const invalid = validateUser(req);

    if (invalid) {
      res.status(400).send({
        error: invalid
      });

      return
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      senha: req.body.senha,
      phone: req.body.phone,
      address: req.body.address,
    };

    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao cadastrar o Usuário."
        });

      });
  },

  // Find all Users from the database
  async findAll(req, res) {
    User.findAll({
      order: [
        ['name', 'ASC'],
      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Oocorreu algum erro ao buscar os Usuárioes."
        });
      });
  },

  // Find one Employe by name by the params the request
  async findOneByName(req, res) {
    const name = req.params.name;

    User.findOne({ where: { name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao buscao Usuário com nome=" + name
        });
      });
  },

  // Find one Employe by id by the params in the request
  async findOne(req, res) {
    const id = req.params.id;

    User.findOne(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao buscao Usuário com id=" + id
        });
      });
  },

  // Validate a User by the id in the request
  async validate(req, res) {
    const id = req.params.id;

    User.update({ valid: req.body.valid }, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Validação de Usuário feita com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível fazer a validação do Usuário com id=${id}. Talvez o Usuário não tenha sido encontrado ou req.body está em branco!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao fazer a validação do Usuário com id=" + id
        });
      });
  },

  // Update a User by the id in the request
  async update(req, res) {
    const id = req.params.id;

    // Validation of required fields
    const invalid = validateUser(req);

    if (invalid) {
      res.status(400).send({
        error: invalid
      });

      return
    }

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Usuário atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível atualizar o Usuário com id=${id}. Talvez o Usuário não tenha sido encontrado ou req.body está em branco!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar Usuário com id=" + id
        });
      });
  },

  // Delete a User with the specified id in the request
  async delete(req, res) {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O Usuário foi removido com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível apagar o Usuário com id=${id}. Talvez o Usuário não tenha sido encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível excluir o Usuário com id" + id
        });
      });
  },
};