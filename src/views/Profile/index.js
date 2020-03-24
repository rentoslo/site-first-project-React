import React, { useState, useEffect } from 'react';

import { Form, Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// components
import Input from "../../components/Input"
import Header from '../../components/header';
// actions users
import { actionsUsers } from '../../store/ducks/users'

const Users = (props) => {
  const [idEmail, setIdEmail] = useState(null);
  const [idName, setidName] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const returnMessage = useSelector(state => state.user.returnMessage.message);
  const { handleSubmit } = props;

  // useEffect(() => {
  //   const { initialize } = props

  //   initialize({
  //     name: props.name,
  //     email: props.email
  //   })
  // }, [])

  const handleDeleteUser = (values) => {
    dispatch(actionsUsers.deleteUser(values));
  }

  const changeRiscado = (id) => {
    dispatch(actionsUsers.changeRiscado(id));
  }

  const handleSetName = (id, name) => {
    const { initialize } = props
    setidName(id)
    initialize({
      name
    })
  }

  const handleSetEmail = (id, email) => {
    const { initialize } = props
    setIdEmail(id)
    initialize({email})
  }

  return (
    <div>
      <Header />

      <Form onSubmit={handleSubmit(() => { })}>
        {
          users && users.map(user => {

            return (
              <div>
                <td style={{ textDecoration: (user.riscado ? 'underline' : "") }} onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    dispatch(actionsUsers.updateUser(user.id, e.target.value, null))
                    setidName(null)
                  }
                }}
                  onDoubleClick={() => { idName === user.id ? setidName("") : handleSetName(user.id, user.name) }}>
                  {idName === user.id
                    ?
                    <Field
                      //OBRIGATÓRIOS
                      name="name"
                      component={Input}
                      // PERSONALIZADOS
                      type="text"
                    />
                    : user.name}
                </td>

                <td onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    dispatch(actionsUsers.updateUser(user.id, null, e.target.value))
                    setIdEmail(null)
                  }
                }}
                  onDoubleClick={() => { idEmail === user.id ? setIdEmail("") : handleSetEmail(user.id, user.email) }}>

                  {idEmail === user.id ?
                    <Field
                      name="email"
                      component={Input}
                      type="text"
                    /> : user.email}

                </td>
                <button type="button" onClick={() => changeRiscado(user.id)}>Riscar</button>
                <button type="button" onClick={() => handleDeleteUser(user.id)}>Excluir</button>
              </div>

            )
          })
        }
      </Form>

      <h4> {returnMessage} </h4>
    </div>
  )
};

export default reduxForm({ form: 'editUser' })(Users)