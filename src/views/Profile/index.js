import React, {useState} from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// actions users
import { actionsUsers } from '../../store/ducks/users'

import Header from '../../components/header';

const Users = () => {
  const [toggle, setToggle] = useState(false);
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

          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td onDoubleClick={(e)=>setToggle(!toggle)}>{toggle ? <input value={ item.email } /> : item.email}</td>
                {/* <td onDoubleClick={(e)=>setToggle(!toggle)}>{toggle ? <input value={ item.email } /> : item.email}</td> */}
                <td onDoubleClick={(e)=>doubleClickEdit(item.id, item.name)}>{item.name}</td>
                <td onClick={(e) => changeRiscado(item.id)}>{item.riscado ? "verdadeiro" : "falso"}</td>
                <td><button onClick={(e) => handleDeleteUser(item.id)}>Excluir registro</button></td>
              </tr>
            )
          })}


        </table>


      </div>
    </div>
  )
};

export default Users;
