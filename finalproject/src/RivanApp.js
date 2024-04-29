import './RivanCSS.css';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>


<body>
    <div id = "header">
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
        <nav>
            <ul>
                <li><a href = "#header">Rivan Parikh</a></li>
            </ul>
            <ul>
                <li><a href = "#movies">Favorite Movies</a></li>
                <li><a href = "#hobbies">Hobbies</a></li>
                <li><a href = "#foods">Favorite Foods</a></li>
            </ul>
        </nav>
    </div>
    <div id  = "movies">
        <div class = "container">
            <ul>
                <li><img src = {require("./rivan_images/knives_out.jpeg")}/></li>
                <li><img src = {require("./rivan_images/harry_potter.jpeg")}/></li>
                <li><img src = {require("./rivan_images/spider_man.jpeg")}/></li>
            </ul>
        </div>
        <p>Here are images of some of my favorite movies. I have many more but 
                these are the ones I have enjoyed recently.
        </p>
    </div>
    <div id = "hobbies">
        <div class = "container">
            <ul>
                <li><img src={require("./rivan_images/gym.png")} width="200" height="300" alt ="gym"/></li>
                <li><img src = {require("./rivan_images/sports.jpeg")}/></li>
                <li><img src = {require("./rivan_images/spotify.png")}/></li>
            </ul>
        </div>
        <p>I enjoy working out, playing several different sports, listening to music
                and many more things in my free time.
        </p>
    </div>
    <div id = "foods">
        <div class = "container">
            <ul>
                <li><img src = {require("./rivan_images/burrito.jpeg")}/></li>
                <li><img src = {require("./rivan_images/chicken.jpeg")}/></li>
                <li><img src = {require("./rivan_images/pizza.jpeg")}/></li>
            </ul>
        </div>
        <p>I enjoy eating all types of cuisines but here are three of my favorite
                foods that I am always craving.
        </p>
    </div>   
</body>

</>
  );
}

export default App;