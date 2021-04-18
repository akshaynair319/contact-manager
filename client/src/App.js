import React from "react";
import AddUser from "./Components/AddUser/AddUser";
import Persons from "./Components/Persons/Persons";
import store from "./store";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Home />
        {/* <AddUser />
        <Persons /> */}
      </div>
    </Provider>
  );
}

export default App;
