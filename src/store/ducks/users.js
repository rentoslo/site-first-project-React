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
  loading: false,
  returnMessage: {
    message: ''
  },
};

// criamos typesUsers
export const typesUsers = {
  addUser: 'addUser',
  addUserSuccess: 'addUserSuccess',
  addUserError: 'addUserError',

  deleteUser: 'deleteUser',
  deleteUserSuccess: 'deleteUserSuccess',
  deleteUserError: 'deleteUserError',

  changeRiscado: 'changeRiscado',
  changeRiscadoSuccess: 'changeRiscadoSuccess',
  changeRiscadoError: 'changeRiscadoError',

  updateUser: 'updateUser',
  updateUserSuccess: 'updateUserSuccess',
  updateUserError: 'updateUserError',
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
  },

  updateUser: (id, name, email) => {
    return {
      type: typesUsers.updateUser,
      payload: {
        id,
        name,
        email,
      }
    }
  }

};

export const reducersUsers = (state = initialState, action) => {
  switch (action.type) {

    case typesUsers.addUserSuccess:
      return {
        users: [...state.users, {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          riscado: false,
        }],
        returnMessage: {
          message: "Sucesso"
        }
      };
    case typesUsers.addUserError: {
      return {
        ...state,
        returnMessage: {
          message: action.payload.message
        }
      }
    }

    case typesUsers.deleteUserSuccess:
      return {
        users: state.users.filter((user) => user.id !== action.payload.id),
        returnMessage: {
          message: "Excluído com sucesso"
        }
      };
    case typesUsers.deleteUserError:
      return {
        ...state,
        returnMessage: {
          message: action.payload.message
        }
      }

    case typesUsers.changeRiscadoSuccess:
      const verifica = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            riscado: !(user.riscado)
          };
        }
        return user;
      })
    case typesUsers.changeRiscadoError:
      return {
        users: verifica
      }

    case typesUsers.updateUserSuccess:
      return {
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              name: action.payload.name ? action.payload.name : user.name,
              email: action.payload.email ? action.payload.email : user.email,
            }
          }
          return user
        })
      }
    case typesUsers.updateUserError:
      return {
        ...state,
        returnMessage: {
          message: "Valor atualizado com sucesso"
        }
      }

    default:
      return state
  }
};