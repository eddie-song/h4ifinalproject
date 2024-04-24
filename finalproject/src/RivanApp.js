import './RivanCSS.css';

function App() {
  return (
    <>


<body>
    <div id = "header">
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
                <li><img src = {require("./images/knives_out.jpeg")}/></li>
                <li><img src = {require("./images/harry_potter.jpeg")}/></li>
                <li><img src = {require("./images/spider_man.jpeg")}/></li>
            </ul>
            <p>Here are images of some of my favorite movies. I have many more but 
                these are the ones I have enjoyed recently.
            </p>
        </div>
    </div>
    <div id = "hobbies">
        <div class = "container">
            <ul>
                <li><img src={require("./images/gym.png")} width="200" height="300" alt ="gym"/></li>
                <li><img src = {require("./images/sports.jpeg")}/></li>
                <li><img src = {require("./images/spotify.png")}/></li>
            </ul>
            <p>I enjoy working out, playing several different sports, listening to music
                and many more things in my free time.
            </p>
        </div>
    </div>
    <div id = "foods">
        <div class = "container">
            <ul>
                <li><img src = {require("./images/burrito.jpeg")}/></li>
                <li><img src = {require("./images/chicken.jpeg")}/></li>
                <li><img src = {require("./images/pizza.jpeg")}/></li>
            </ul>
            <p>I enjoy eating all types of cuisines but here are three of my favorite
                foods that I am always craving.
            </p>
        </div>
    </div>
        
</body>

</>
  );
}

export default App;