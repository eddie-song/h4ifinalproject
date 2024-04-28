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
  // Determine the side of the frame based on the index
  const alignment = index % 2 === 0 ? 'left' : 'right';

  // You can add more styling conditions based on the alignment if needed
  const style = {
    backgroundColor: person.backgroundColor,
    alignSelf: alignment === 'left' ? 'flex-start' : 'flex-end',
  };

  return (
    <div style={style} className={`profile ${alignment}`}>
      <img className="profile-image" src={person.image_src} alt={person.name} />
      <div className="profile-info">
        <p><b>Name:</b> {person.name}</p>
        <p><b>Role:</b> {person.role}</p>
      </div>
    </div>
  );
}

export default ID;
