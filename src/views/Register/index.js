import React, { useState } from "react";

import { Form, Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux';

import PropType from "prop-types";

import Header from "../../components/header"
import Input from "../../components/Input"

// actions users
import { actionsUsers } from '../../store/ducks/users'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const Register = (props) => {
  const { handleSubmit } = props;

  const dispatch = useDispatch();

  const returnMessage = useSelector(state => state.user.returnMessage.message);

  const handleAddUser = (values) => {
    // console.log(values.name)
    dispatch(actionsUsers.addUser(values.name, values.email, values.password));
  }

  return (
    <div>
      <Header />

      <Form onSubmit={handleSubmit(values => handleAddUser(values))}>
        <Field
          //OBRIGATÓRIOS
          name="name"
          component={Input}
          // PERSONALIZADOS
          type="text"
          label="Name"
        />
        <Field
          name="email"
          component={Input}
          type="text"
          label="Email"
        />
        <Field
          name="password"
          component={Input}
          type="password"
          label="Password"
        />
        <button type="submit">Enviar</button>
      </Form>

      <h4> {returnMessage} </h4>
    </div>
  );

};

//Tipar as props usadas
Register.propTypes = {
};

export default reduxForm({ 
  form: 'register', 
  validate 
})(Register)