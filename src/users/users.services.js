const userControllers = require("./users.controllers");

const getAll = (req, res) => {
  const data = userControllers.getAllUsers();
  res.status(200).json({ items: data.length, users: data });
};

const getById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.getUserById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `El usuario con el id: ${id} no existe` });
  }
};

const createById = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing data" });
  } else if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.password ||
    !data.birthday_date
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      field: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        password: "string",
        birthday_date: "YYYY/MM/DD"
      },
    });
  } else {
    const response = userControllers.createUser(data);
    return res
      .status(201)
      .json({ message: `User created succesfully with id ${response.id}` });
  }
};



const deleteById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.deleteUser(id);
  if (data) {
    return res.status(204).json();
  } else {
    return res.status(400).json({ message: "Invalid Id" });
  }
};

const editUserById = (req, res)=>{
  const id = req.params.id
  const data = req.body

  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing data" });
  } else if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.birthday_date ||
    !data.is_active
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      field: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        birthday_date: "DD/MM/YYYY",
        is_active: 'boolean'
      },
    });
  } else{
    const response = userControllers.editUser(id, data);
    return res.status(200).json({user: response})
  }

}

module.exports = {
  getAll,
  getById,
  createById,
  deleteById,
  editUserById
};
