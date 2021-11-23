const UserModel = require("../models/userModel");
const dao = require("../dao/userDAO");

class UserController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const id = req.params.id;

    this.dbConn
      .getUserByID(id)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((error) => {
        if(error = "error de servidor"){
          res.status(500).send(error);
        }
        
      });
  };

  index = (req, res) => {
    this.dbConn
      .getAllUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  save = (req, res) => {
    const { name, email, password } = req.body;

    const user = new UserModel(name, email, password);

    this.dbConn
      .saveUser(user)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  update = (req, res) => {
    const id = req.params.id;
    const content = req.body;

    this.dbConn
      .updateUser(id, content)
      .then((result) => {
        res.status(204).send();
      })
      .catch((error) => {
        res.send(error);
      });
  };

  remove = (req, res) => {
    const id = req.params.id;

    this.dbConn
      .deleteUser(id)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.send(error);
      });
  };
}

module.exports = new UserController(dao);
