import './App.css';
import ID from './ID.js';
import people from './people.js';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1 id="header">Meet The Team</h1>
      <div id = "heading">
        <nav id = "navbar">
            <ul id = "list">
                <li><Link to = "/rivan">Rivan Parikh</Link></li>
                <li><Link to = "/eddie">Eddie Song</Link></li>
                <li><Link to = "/nadia">Nadia Meyerovich</Link></li>
                <li><Link to = "/avishi">Avishi Gupta</Link></li>
                <li><Link to = "/arjun">Arjun Mahendra</Link></li>
                <li><Link to = "/krishnan">Krishnan Tholkappian</Link></li>
            </ul>
        </nav>
      </div>
      
      <div id="container">
        {people.map((person, index) => (
            <ID class={index % 2 === 0 ? "id-left" : "id-right"} key = {index} person={person} />
        ))}
      </div>
      
    </div>
  );
}

export default App;