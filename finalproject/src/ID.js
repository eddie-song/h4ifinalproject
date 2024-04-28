import './ID.css'

function ID ({person}) {

    const style = {
        backgroundColor: person.backgroundColor,
        flexDirection: person.direction === 'left' ? 'row' : 'row-reverse',
    };

    return(

        <div style={style} class="container">
            <img id="image" src={person.image_src} alt={person.name}/>

            <div>
                <p><b>Name:</b> {person.name}</p>
                <p><b>Role:</b> {person.role}</p>
            </div>

        </div>

    );
}

export default ID

//

import React from 'react';
import './ID.css';

function ID({ person, index }) {
  // Set the flex direction based on whether the index is odd or even
  const flexDirection = index % 2 === 0 ? 'row' : 'row-reverse';

  const containerStyle = {
    display: 'flex',
    flexDirection: flexDirection, // Apply the alternating flex direction
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '20px',
    // Apply other styles as needed
  };

  return (
    <div style={containerStyle}>
      <img id="image" src={person.image_src} alt={person.name} />
      <div>
        <p><b>Name:</b> {person.name}</p>
        <p><b>Role:</b> {person.role}</p>
      </div>
    </div>
  );
}

export default ID;
