import React, { useState, useEffect } from 'react';
import Pets from "./components/Pets";
import PetCatalog from './components/PetCatalog';
import Auth from './components/Auth'; // Import the Auth component

function App() {
  const [pets, setPets] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); 

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/pets')
      .then(response => response.json())
      .then(data => setPets(data));
  }, []);


  const handleLogin = () => {
    setLoggedIn(true);
  };


  const handleSignup = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      
      {loggedIn ? (
        <div>
          <Pets pets={pets} />
          <PetCatalog />
        </div>
      ) : (
        <Auth
          onLogin={handleLogin} 
          onSignup={handleSignup} 
        />
      )}
    </div>
  );
}

export default App;
