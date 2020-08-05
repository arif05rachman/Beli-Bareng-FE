import {
  GET_LISTUSER,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DEL_USER,
} from "../actions/action_types";

const defaultState = {
  users: [],
  user: {},
  id: 11
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LISTUSER:
      let users = action.payload.users;
      return { ...state, users: users };
    case GET_USER:
      let user = state.users.filter((item) => item.id === action.payload.id);
      return { ...state, user: user[0] };
    case ADD_USER:
      action.payload.user.id = state.id;
      state.id++;
      let newUsers = state.users.concat(action.payload.user);
      return { ...state, users: newUsers };
    case EDIT_USER:
      let delEditUser = state.users.filter(
        (item) => item.id !== action.payload.user.id
      );
      let editUsers = delEditUser.concat(action.payload.user);
      return { ...state, users: editUsers };
    case DEL_USER:
      let delUsers = state.users.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, users: delUsers };
    default:
      return state;
  }
}

export default userReducer