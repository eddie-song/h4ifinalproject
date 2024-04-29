import logo from './logo.svg';
import './EddieApp.css';

function App() {
  return (
    <div className="app">
      <div className="bio-container">
        <div className="text-container">
          <p className="main-text">
            Hi! I'm Eddie!
          </p>
          <p className="main-bio">
            I'm a freshman CS and Math double major and I am originally
            from Philly.
            <br></br>
            <br></br>
            One of my favorite shows is the anime called Vinland Saga.
            <br></br>
            <br></br>
            My favorite artists are AC/DC and Travis Scott.
            <br></br>
            <br></br>
            Some of my hobbies are powerlifting, watching tennis, and traveling.
            <br></br>
            <br></br>
            My favorite food is a traditional Chinese noodle dish known as re gan mian.
          </p>
        </div>
        <div className="image-container">
          <img src={require("./eddie_images/eddie-selfie.jpg")} className="image"></img>
        </div>
      </div>
      <div className="bio-images">
        <div className="artists">
          <p>My favorite rapper: TRAVIS SCOTT</p>
          <img src={require("./eddie_images/travis.JPG")}></img>
        </div>
        <div className="food">
          <p>My favorite food: re gan mian</p>
          <img src={require("./eddie_images/reganmian.jpg")}></img>
        </div>
        <div className="movie">
          <p>My favorite show: Vinland Saga</p>
          <img src={require("./eddie_images/vinlandsaga.jpg")}></img>
        </div>
        <div className="tennis">
          <p>Signature from Carlos Alcaraz</p>
          <img src={require("./eddie_images/tennis.jpg")}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
