const db = require("../models");
const Employee = db.employees;

const validateEmployee = (req) => {
  if (!req.body.name) {
    return "O nome do Colaborador é obrigatório!";
  } else if (!req.body.email) {
    return "O email do Colaborador é obrigatório!";
  } else if (!req.body.cpf) {
    return "O CPF do Colaborador é obrigatório!";
  } else if (!req.body.skills) {
    return "As habilidades do Colaborador são obrigatórias!";
  }

  return false;
}

module.exports = {
  // Create and Save a new Employee
  async create(req, res) {

    // Validation of required fields
    const invalid = validateEmployee(req);

    if (invalid) {
      res.status(400).send({
        error: invalid
      });

      return
    }

    // Validation of unique CPF
    if (await Employee.findOne({ where: { cpf: req.body.cpf } })) {
      res.status(400).send({
        error: "Colaborador com o CPF informado já foi cadastrado!"
      });

      return
    }

    const employee = {
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      phone: req.body.phone,
      skills: req.body.skills,
    };

    Employee.create(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao cadastrar o Colaborador."
        });

      });
  },

  // Find all Employees from the database
  async findAll(req, res) {
    Employee.findAll({
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
            err.message || "Oocorreu algum erro ao buscar os Colaboradores."
        });
      });
  },

  // Find one Employe by name by the params the request
  async findOneByName(req, res) {
    const name = req.params.name;

    Employee.findOne({ where: { name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao buscao Colaborador com nome=" + name
        });
      });
  },

  // Find one Employe by id by the params in the request
  async findOne(req, res) {
    const id = req.params.id;

    Employee.findOne(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao buscao Colaborador com id=" + id
        });
      });
  },

  // Validate a Employee by the id in the request
  async validate(req, res) {
    const id = req.params.id;

    Employee.update({ valid: req.body.valid }, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Validação de Colaborador feita com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível fazer a validação do Colaborador com id=${id}. Talvez o Colaborador não tenha sido encontrado ou req.body está em branco!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao fazer a validação do Colaborador com id=" + id
        });
      });
  },

  // Update a Employee by the id in the request
  async update(req, res) {
    const id = req.params.id;

    // Validation of required fields
    const invalid = validateEmployee(req);

    if (invalid) {
      res.status(400).send({
        error: invalid
      });

      return
    }

    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Colaborador atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível atualizar o Colaborador com id=${id}. Talvez o Colaborador não tenha sido encontrado ou req.body está em branco!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar Colaborador com id=" + id
        });
      });
  },

  // Delete a Employee with the specified id in the request
  async delete(req, res) {
    const id = req.params.id;

    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O Colaborador foi removido com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível apagar o Colaborador com id=${id}. Talvez o Colaborador não tenha sido encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível excluir o Colaborador com id" + id
        });
      });
  },
};