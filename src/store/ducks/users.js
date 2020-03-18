// Aqui passamos o estado inicial da nossa variável (user: lista de usuários)
const initialState = {
  users: [
    {
      id: Math.random(),
      name: "Renato",
      email: "ren@jhjhj",
      password: "12345",
      riscado: false
    },
    {
      id: Math.random(),
      name: "Renato2",
      email: "ren@jhjhj2",
      password: "123452",
      riscado: false
    }
    ,
    {
      id: Math.random(),
      name: "Renato3",
      email: "ren@jhjhj2",
      password: "123452",
      riscado: false
    },
    {
      id: Math.random(),
      name: "Renato5",
      email: "ren@jhjhj2",
      password: "123452",
      riscado: false
    }

  ],
  // loading: false,
  // error: false,
};

// criamos typesUsers
export const typesUsers = {
  addUser: 'addUser',
  deleteUser: 'deleteUser',
  changeRiscado: 'changeRiscado',
};

export const actionsUsers = {

  addUser: (name, email, password) => {
    return {
      type: typesUsers.addUser,
      payload: {
        id: Math.random(),
        name: name,
        email,
        password,
        riscado: false
      }
    }
  },

  deleteUser: (id) => {
    return {
      type: typesUsers.deleteUser,
      payload: { id }
    }
  },

  changeRiscado: (id) => {
    return {
      type: typesUsers.changeRiscado,
      payload: { id }
    }
  }

};

export const reducersUsers = (state = initialState, action) => {
  switch (action.type) {

    case typesUsers.addUser:
      return {
        users: [...state.users, {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          riscado: false
        }]
      };

    case typesUsers.deleteUser:
      return {
        users: state.users.filter((user) => user.id !== action.payload.id)
      };

    case typesUsers.changeRiscado:
      const verifica = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            riscado: !(user.riscado)
          };
        } 
        return user;
      })
      return {
        users: verifica
      }




    default:
      return state
  }
};