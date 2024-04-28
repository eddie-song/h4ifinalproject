import './App.css';
import ID from './ID.js';
import people from './people.js';
import { Link } from 'react-router-dom';

function App() {
  const handleClick = (personName) => {
    if(personName === 'Rivan Parikh'){
      <Link to = "/rivan"></Link>
    } else if (personName === 'Eddie Song'){
      <Link to = "/eddie"></Link>
    } else if (personName === 'Nadia Meyerovich'){
      <Link to = "/nadia"></Link>
    } else if (personName === 'Krishnan Tholkappian'){
      <Link to = "/krishnan"></Link>
    } else if (personName === 'Arjun Mahendra'){
      <Link to = "/arjun"></Link>
    } else if (personName === 'Avishi Gupta'){
      <Link to = "/avishi"></Link>
    } else{
      console.log("incorrect click");
    }
  }

  return (
    <div>
      <h1 id="header">Meet The Team</h1>

      <div id="container">
        {people.map((person, index) => (
          /*<div onClick={() => handleClick(person.name)}>*/
            <ID key = {index} class={index % 2 === 0 ? "id-left" : "id-right"} person={person} />
          /*</div>*/
        ))}
      </div>
    </div>
  );
}

export default App;