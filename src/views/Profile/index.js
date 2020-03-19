import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// actions users
import { actionsUsers } from '../../store/ducks/users'

import Header from '../../components/header';

const Users = () => {
  const [idEmail, setIdEmail] = useState(null);
  const [idItem, setIdItem] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const returnMessage = useSelector(state => state.user.returnMessage.message);

  const handleDeleteUser = (id) => {
    dispatch(actionsUsers.deleteUser(id));
  }

  const changeRiscado = (id) => {
    // console.log(id)
    dispatch(actionsUsers.changeRiscado(id));
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

                  <td onDoubleClick={() => { idEmail === item.id ? setIdEmail("") : setIdEmail(item.id) }} >
                    {idEmail === item.id
                      ?
                      <input defaultValue={item.email} 
                      onKeyDown={(e)=>{
                        if (e.keyCode === 13){
                          dispatch(actionsUsers.updateUser(item.id, null, e.target.value))
                          setIdEmail(null)
                        }
                      }} />
                      : item.email}
                  </td>

                  <td onDoubleClick={() => { idItem === item.id ? setIdItem("") : setIdItem(item.id) }}>
                    {idItem === item.id
                      ?
                      <input
                        defaultValue={item.name}
                        onKeyDown={(e) => {
                          // if (apertou enter e nadamudou) {
                          //   setId(null)
                          // }
                          // console.log(e.keyCode, e.target.value)
                          //13 é o código que vem ao apertar a tecla ENTER
                          if (e.keyCode === 13) {
                            dispatch(actionsUsers.updateUser(item.id, e.target.value, null))
                            setIdItem(null)
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
        <h4> {returnMessage} </h4>
      </div>
    </div>
  )
};

export default Users;
