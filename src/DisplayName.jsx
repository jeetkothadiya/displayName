import React, { useState } from "react";

function DisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName){
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };

    return(
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input 
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input 
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            required
            />
          </div>
          <button>Submit</button>
        </form>
        {fullName && (
          <p>{fullName}</p>
        )
        }
      </div>
    );
}

export default DisplayName;
