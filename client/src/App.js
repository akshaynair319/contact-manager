import React from "react";
import AddUser from "./Components/AddUser/AddUser";
import Persons from "./Components/Persons/Persons";
import store from "./store";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <AddUser />
        <Persons />
      </div>
    </Provider>
  );
}

export default App;
