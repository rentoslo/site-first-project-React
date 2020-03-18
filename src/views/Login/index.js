import React from "react";
import PropType from "prop-types";

import Header from "../../components/header"

const Login = () => {
  return <div>
    <Header />
    
    <b>Login</b><br/>
      <b>Username:</b><input type="text" placeholder="Username" name="name" required/><br/>
      <b>Password:</b><input type="password" placeholder="Password" name="password" required/><br/>
      <button>Login</button>
     </div>;
};

//Tipar as props usadas
Login.propTypes = {
};

export default Login;