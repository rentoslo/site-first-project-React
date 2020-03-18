import React, {useState} from "react";

import PropType from "prop-types";
import axios from "axios";

import Header from "../../components/header"

const addUserAxios = (name, email, password)=>{
  axios({
    method: 'post', // verbo http
    url: 'http://localhost:3333/users/create', // url
    data: {
      name, 
      email,
      password
    }
  })
  .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  })

}

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(name);

  return <div>
    <Header />
    <b>Register New User</b><br/>
      <b>Username:</b><input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Username" name="name" required/><br/>
      <b>Email:</b><input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email" name="email" required/><br/>
      <b>Password:</b><input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" name="password" required/><br/>
      <button onClick={()=> addUserAxios(name, email, password)} >Add New User</button>
     </div>;

};

//Tipar as props usadas
Register.propTypes = {
};

export default Register;