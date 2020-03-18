import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import PropType from "prop-types";

import Header from "../../components/header"

// actions users
import { actionsUsers } from '../../store/ducks/users'

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(name);

  const handleAddUser = () => {
    // const id = Math.random();
    dispatch(actionsUsers.addUser(name, email, password));
  }

  return (
    <div>
      <Header />
      <b>Register New User</b><br />
      <b>Username:</b><input onChange={(e) =>setName(e.target.value)} type="text" placeholder="Username" name="name" required /><br />
      <b>Email:</b><input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email" required /><br />
      <b>Password:</b><input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required /><br />
      <button onClick={handleAddUser } >Add New User</button>
    </div>
  );

};

//Tipar as props usadas
Register.propTypes = {
};

export default Register;