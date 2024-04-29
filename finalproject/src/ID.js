import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ID.css';
import './people.js';

function ID({ person, index }) {
  // This inline style will push the container to the right for even indexes 
  // and to the left for odd indexes
  const style = {
    backgroundColor: person.backgroundColor,
    flexDirection: person.direction === 'left' ? 'row' : 'row-reverse',
  };

  const navigate = useNavigate();

  const handleIDClick = () => {
    navigate(person.path);
  };

  return (
    <div style={style} className="container" onClick={handleIDClick}>
      <img id="image" src={person.image_src} alt={person.name} />
      <div>
        <p><b>Name:</b> {person.name}</p>
        <p><b>Role:</b> {person.role}</p>
      </div>
    </div>

    
  );
}

export default ID;
