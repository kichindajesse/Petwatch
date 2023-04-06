import React, { useState } from 'react';

function Pets(props) {
  const [showNewPetForm, setShowNewPetForm] = useState(false);

  const handleAddPetClick = () => {
    setShowNewPetForm(true);
  };

  const handleNewPetCancel = () => {
    setShowNewPetForm(false);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Pets Available</h1>
      <div className="row">
        {props.pets.map((pet) => {
          return (
            <div key={pet.id} className="col-md-4 mt-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{pet.name}</h2>
                  <p className="card-text">Name: {pet.name}</p>
                  <p className="card-text">Breed: {pet.breed}</p>
                  <img src={pet.url} alt={pet.name} className="card-img-top" style={{ width: '300px', height: '300px' }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {!showNewPetForm && (
        <button className="btn btn-primary mt-5" onClick={handleAddPetClick}>
          Add New Pet
        </button>
      )}
      
    </div>
  );
}

export default Pets;
