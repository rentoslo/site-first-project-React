import { takeLatest, put } from 'redux-saga/effects';

import { typesUsers } from '../ducks/users'

function* addUser(action) {
  const { type, payload } = action
  try {

    if (!payload.name) {
      throw 'nome obrigatorio'
    }

    yield put({ type: typesUsers.addUserSuccess, payload: {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }})
  } catch (error) {
    yield put({ type: typesUsers.addUserError, payload: {
      message: error
    }})
  }
}

function* deleteUser(action){
  const { type, payload } = action
  try {
    yield put({ type: typesUsers.deleteUserSuccess, payload: { id: payload.id, } })
  } catch (error) {
    yield put({ type: typesUsers.deleteUserError, payload: {
      message: error
    }})
  }
}

function* changeRiscado(action){
  const { type, payload } = action
  try {
    yield put({ type: typesUsers.changeRiscadoSuccess, payload: { id: payload.id, } })
  } catch (error) {
    yield put({ type: typesUsers.changeRiscadoError, payload: {
      message: error
    }})
  }
}

function* updateUser(action){
  const { type, payload } = action
  try {
    yield put({ type: typesUsers.updateUserSuccess, payload: {id: payload.id, name: payload.name, email: payload.email,}})
  } catch (error) {
    yield put({ type: typesUsers.updateUserError, payload: {
      message: error
    }})
  }
}


function* watcherUser() {
  yield takeLatest(typesUsers.addUser, addUser)
  yield takeLatest(typesUsers.deleteUser, deleteUser)
  yield takeLatest(typesUsers.changeRiscado, changeRiscado)
  yield takeLatest(typesUsers.updateUser, updateUser)
}

export default watcherUser;