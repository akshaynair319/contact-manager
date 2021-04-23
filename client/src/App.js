import React, { useEffect } from "react";
import store from "./store";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import UserPage from "./Pages/UserPage/UserPage";
import { loadUser } from "./actions/userActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
