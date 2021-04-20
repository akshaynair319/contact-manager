import React from "react";
import AddUser from "./Components/AddUser/AddUser";
import Persons from "./Components/Persons/Persons";
import store from "./store";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import UserPage from "./Pages/UserPage/UserPage";
function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <UserPage />
        <AddUser />
        <Persons />
      </div>
    </Provider>
  );
}

export default App;
