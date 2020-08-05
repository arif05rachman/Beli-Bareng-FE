import {
  GET_LISTUSER,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DEL_USER,
} from "./action_types";

// get all user
export const getListUser = (url) => {
  return async dispatch => {
    const res = await fetch(url)
    const users = await res.json()
    dispatch({
      type: GET_LISTUSER,
      payload: {
        users
      }
    })
  }
}

// get user
export const getUser = (id) => ({
  type: GET_USER,
  payload: {
    id,
  },
});

// add user
export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});

// edit user
export const editUser = (user) => ({
  type: EDIT_USER,
  payload: {
    user,
  },
});

// delete user
export const deleteUser = (id) => ({
      type: DEL_USER,
      payload: {
        id,
      }
})
