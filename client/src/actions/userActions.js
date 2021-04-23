import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  ADD_CONTACT,
  DELETE_CONTACT,
  LOAD_USER,
} from "./types";
import axios from "axios";

//load user on refresh of page
export const loadUser = () => (dispatch, getState) => {
  axios
    .get("/api/userAuth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: LOAD_USER, payload: res.data }))
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data });
    });
};
//REGISTER/SIGN-UP NEW USER
export const register = (name, email, password) => (dispatch) => {
  //header
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //request body/data
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/api/users", body, config)
    .then((res) => dispatch({ type: SIGNUP, payload: res.data }))
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data });
    });
};

//LOGIN USER
export const login = (email, password) => (dispatch) => {
  //header
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //request body/data
  const body = JSON.stringify({ email, password });

  axios
    .post("api/userAuth", body, config)
    .then((res) => dispatch({ type: LOGIN, payload: res.data }))
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data });
    });
};

//LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

//ADD A NEW CONTACT TO CURRENT USER
export const addContact = (name, email) => (dispatch, getState) => {
  axios
    .post("/api/users/contacts", { name, email }, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    });
};

// DELETE A CONTACT FROM CURRENT USER
export const deleteContact = (id) => (dispatch, getState) => {
  axios.delete(`/api/users/contacts/${id}`, tokenConfig(getState)).then((res) =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    })
  );
};

//setup config/headers and token
export const tokenConfig = (getState) => {
  //get token from localStorage
  const token = getState().user.token;
  console.log("in tokenCOnfig", token, getState());
  //adding token to headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //if token, then add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
