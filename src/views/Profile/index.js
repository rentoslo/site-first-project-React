import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import axios from "axios";

import Header from "../../components/header"
import Loading from '../../components/loading'

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [recarregar, setRecarregar] = useState(false);
  const [listaCarregada, setListaCarregada] = useState(false);

  useEffect(() => {
    axios({
      method: 'get', // verbo http
      url: 'http://localhost:3333/users/', // url
    })
      .then(response => {
        setUsers(response.data)
        setListaCarregada(true)
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      
  }, [recarregar]);

  // useEffect( ()=> {
  //   console.log("Sei La")
  // })

  useEffect( ()=> {
    return () =>{ console.log('Componente desmontado') }
  },[])

  // useEffect( ()=> {
  //   console.log("Lista Recarregada")
  // },[recarregar]);

  const zerarLista = () => {
    setUsers([]);
  }
  const recarregarLista = () => {
    setListaCarregada(false) 
    setRecarregar(!recarregar)
  }

  console.log(listaCarregada)

  return <div>
    <Header />
    <button onClick={zerarLista}>Zerar Lista</button>
    <button onClick={recarregarLista}>recarregar</button>
    { !listaCarregada ? <Loading /> : ''}
    
    {users.map((item) => {
      return <div key={item.id}><li>{item.name}</li>
        <li>{item.email}</li></div>
    })}
  </div>;
};

Profile.propTypes = {
  name: PropType.string,
  email: PropType.string,
};

export default Profile;