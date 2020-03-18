import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// actions users
import { actionsUsers } from '../../store/ducks/users'

import Header from '../../components/header';

const Users = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const handleDeleteUser = (id) => {
    dispatch(actionsUsers.deleteUser(id));
  }

  const changeRiscado = (id) => {
    // console.log(id)
    dispatch(actionsUsers.changeRiscado(id));
  }

  const doubleClickEdit = (id, item) => {
    console.log("id"); console.log(id)
    console.log("item"); console.log(item)
  }

  return (
    <div>
      <Header />
      <h1> Lista de usuários </h1>
      <div >

        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>EMAIL</th>
              <th>NAME</th>
              <th>RISCAR</th>
              <th>EXCLUIR</th>
            </tr>
          </thead>
          <tbody>

            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <td >{item.id}</td>
                  <td >{item.email}</td>
                  <td onDoubleClick={() => { id === item.id ? setId("") : setId(item.id) }}>
                    {id === item.id
                      ?
                      <input
                        defaultValue={item.name}
                        onKeyDown={(e) => {
                          // if (apertou enter e nadamudou) {
                          //   setId(null)
                          // }
                          // console.log(e.keyCode, e.target.value)
                          if (e.keyCode === 13) {
                            dispatch(actionsUsers.updateUser(item.id, e.target.value, null))
                            setId(null)
                          }
                        }}
                      />
                      : item.name}
                  </td>
                  <td onClick={(e) => changeRiscado(item.id)}>{item.riscado ? "verdadeiro" : "falso"}</td>
                  <td><button onClick={(e) => handleDeleteUser(item.id)}>Excluir registro</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  )
};

export default Users;
