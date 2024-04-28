import React from "react";
import "./AvishiApp.css";

const App = () => {
  return (
    <>
      <title>About Me</title>
      <link rel="stylesheet" href="/style.css" />
      <h1>
        <center> Avishi Gupta </center>
      </h1>
      <h2>
        <center> About Me! </center>
      </h2>
      <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        Hi! My name is Avishi Gupta! I am a freshman Computer Science major. I
        am from Northern Virginia, and I moved to the US from India at the age
        of 10. I am super excited to be part of Hack4Impact this semester and
        the semesters going forward!
      </p>
      
      <h2>
        <center> My favorite movies! </center>
      </h2>

      <img src="./avishi_images/Interstellar.jpg" alt="Interstellar" />

      <img src="./avishi_images/White_chicks.jpg" alt="White Chicks" />

      <img src="./avishi_images/The hangover.jpg" alt="The Hangover" />

      <img src="./avishi_images/the social network.jpg" alt="The Social Network" />

      <h2>
        <center> My Hobbies! </center>
      </h2>

      <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        {" "}
        1. I love to read! I have read over 200 books in just a year!{" "}
      </p>

      <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        {" "}
        2. I love watching movies and tv shows!{" "}
      </p>

      <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        {" "}
        3. I also paint here and there, not too much to be considered amazing
        but I take inspiration off of Pinterest and paint!{" "}
      </p>

      <p style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
        {" "}
        4. I listen to music as well! Currently, my favorite artists/bands are
        The Weeknd, Kendrick Lamar, Lana Del Ray, The Driver Era, Pitbull, and
        Childish Gambino.{" "}
      </p>

      <h2>
        <center> My Favorite Shows! </center>
      </h2>

      <img src="./avishi_images/new girl.jpg" alt="New Girl" />

      <img src="./avishi_images/b99.jpg" alt="B99" />

      <img src="./avishi_images/alta.jpg" alt="ALTA" />

      <img src="./avishi_images/suits.jpg" alt="Suits" />
    </>
  );
};

export default App;
