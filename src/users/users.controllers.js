const uuid = require("uuid");

const usersDB = [
  {
    "id": "75e63e2c-7b60-4fb7-bcbf-309257f06235",
    "first_name": "Ada",
    "last_name": "George",
    "email": "example@example.com",
    "password": "hola",
    "birthday_date": "DD/MM/YYYY",
    "is_active": true
  }
];

const getAllUsers = () => {
  return usersDB;
};

const getUserById = (id) => {
  const data = usersDB.filter((item) => item.id === id);
  return data.length ? data[0] : false;
  //? select * from users where id = id
};

const createUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    first_name: data.first_name,
    last_name: data.last_name, 
    email: data.email,
    password: data.password,
    birthday_date: data.birthday_date, 
    is_active: true,
  };
  usersDB.push(newUser)
  return newUser 
};

const editUser = (id, data) =>{
  const index = usersDB.findIndex(item=> item.id === id)
  if(index !== -1){
    usersDB[index]={
      id,
      first_name: data.first_name, 
      last_name: data.last_name, 
      email: data.email, 
      password: usersDB[index].password, 
      birthday_date: data.birthday_date, 
      is_active: data.is_active, 
    }
    return usersDB[index]
  } else{
   return createUser(data)
  }

}

const deleteUser = (id)=>{
  const index = usersDB.findIndex(user=> user.id === id)
  if(index !== -1){
    usersDB.splice(index, 1)
    return true
  }else{
    return false
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser
}