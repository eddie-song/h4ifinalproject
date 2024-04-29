import './App.css';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="about-me">
      <nav id = "navbar">
        <ul id = "list">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/rivan">Rivan Parikh</Link></li>
          <li><Link to = "/eddie">Edward Song</Link></li>
          <li><Link to = "/nadia">Nadia Meyerovich</Link></li>
          <li><Link to = "/avishi">Avishi Gupta</Link></li>
          <li><Link to = "/arjun">Arjun Mahendra</Link></li>
          <li><Link to = "/krishnan">Krishnan Tholkappian</Link></li>
        </ul>
      </nav>
      <h1 className="title">About Me - Arjun Mahendra</h1>
      <p className="descriptions">Hi! My name is Arjun Mahendra. I am a freshman majoring in Computer Science from California. I enjoy spending time with friends and family, being physically active, watching sports, and listening to music.</p>

      <ul className="pics">
        <img className="pic" src={require("./family.png")} alt="Family" style={{width: "20%", height: "auto"}} />
        <img className="pic" src={require("./HS.png")} alt="High-school Friends" style={{width: "30%", height: "auto"}} />
        <img className="pic" src={require("./college.png")} alt="College Friends" style={{width: "20%", height: "auto"}} />
      </ul>

      <h2 className="header">Interests</h2>
      <p className="descriptions">Here are some of the activities and interests I enjoy.</p>
      
      <div className="sections">
        <div className="item">
          <img className="pic" src={require("./pogba.jpeg")} alt="Playing Sports"/>
          <h3>Sports</h3>
        </div>

        <div className="item">
          <img className="pic" src={require("./future.jpeg")} alt="Listening to Music" />
          <h3>Music</h3>
        </div>
      </div>
    </div>
  );
}
export default App;
