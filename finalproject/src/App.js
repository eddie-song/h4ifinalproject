import './App.css';
import ID from './ID.js';
import people from './people.js';

function App() {

  return (
    <div>
      <h1 id="header">Meet The Team</h1>

      <div id="container">

        {people.map((person, index) => (
          <ID class={index % 2 === 0 ? "id-left" : "id-right"} key={index} person={person} />
        ))}

      </div>
    </div>
  );
}

export default App;
