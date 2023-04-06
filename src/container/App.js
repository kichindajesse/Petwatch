import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Pets from "../pages/Pets";
import NewRecipe from "../pages/NewRecipe";

const API_URL = "http://localhost:3000/pets";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    // fetch pets data
    getAPIData().then((data) => {
      setPets(data);
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <Pets pets={pets} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
