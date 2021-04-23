import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  ADD_CONTACT,
  DELETE_CONTACT,
  LOAD_USER,
} from "../actions/types";
const initialState = {
  user_name: "",
  token: localStorage.getItem("token") || "",
  contacts: [],
  isAuthorised: false,
  msg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user_name: action.payload.name,
        isAuthorised: true,
        contacts: action.payload.contacts,
        msg: "",
      };
    case SIGNUP:
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        msg: "",
        user_name: action.payload.user.name,
        token: action.payload.token,
        contacts: action.payload.user.contacts,
        isAuthorised: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return initialState;
    case ERROR:
      console.log("in error");
      return {
        ...state,
        msg: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
