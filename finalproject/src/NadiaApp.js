import './NadiaApp.css';
import './App.css';
import { Link } from 'react-router-dom';

function NadiaApp() {

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
        <h1 className="title">About Nadia Meyerovich</h1>
        <p className="descriptions">Hi! My name is Nadia Meyerovich. I am a sophomore double majoring in Computer Science and Criminology & Criminal Justice. Below are pictures of my family from Mexico because we love to travel. The dog on the right is my doggie, Luna!</p>

        <ul className="pics">
            <img className="pic" src={require("./nadia_images/IMG_3286.jpg")} alt="Me" height="20%" width="20%"/>
            <img className="pic" src={require("./nadia_images/IMG_0410.JPG")} alt="Family" height="20%" width="30%"/>
            <img className="pic" src={require("./nadia_images/Luna.jpg")} alt="Luna" height="20%" width="20%"/>
        </ul>

        <h2 className="header">Favorite Movies/Shows</h2>
        <p className="descriptions">I don't really have favorite movies, but these are some of the shows that I enjoy watching!</p>
        
        <div className="sections">

            <div className="item">
                <img className="pic" src={require("./nadia_images/GBBShow.jpg")} alt="Great British Baking Show" />
                <h3>Great British Baking Show</h3>
            </div>

            <div className="item">
                <img className="pic" src={require("./nadia_images/Office.jpg")} alt="The Office"/>
                <h3>The Office</h3>
            </div>

            <div className="item">
                <img className="pic" src={require("./nadia_images/Originals.jpg")} alt="The Originals" />
                <h3>The Originals</h3>
            </div>

        </div>

        <h2 className="header">Hobbies</h2>
        <p className="descriptions">I love baking, going to the gym, and painting in my free time. The pies on the left are my favorite key lime pie recipe that I made for Thanksgiving. The nine paintings on the right are just a few of mine that are hanging in my room.</p>
        
        <div className="sections">

            <div className="item">
                <img className="pic" src={require("./nadia_images/Baking.jpg")} alt="Baking" height="300px" width="250px"/>
                <h3>Baking</h3>
            </div>

            <div className="item">
                <img className="pic" src={require("./nadia_images/Gym.jpg")} alt="Gym" height="300px" width="300px"/>
                <h3>Gym</h3>
            </div>

            <div className="item">
                <img className="pic" src={require("./nadia_images/Painting.jpg")} alt="Painting" height="300px" width="250px"/>
                <h3>Painting</h3>
            </div>

        </div>

    </div>

  );

}

export default NadiaApp;
