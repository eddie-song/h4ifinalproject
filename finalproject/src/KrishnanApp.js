import React from 'react';
import './KrishnanApp.css'; 
import linkedinLogo from './krishnan_images/linkedin_logo.png';
import githubLogo from './krishnan_images/github_logo.png';
import instagramLogo from './krishnan_images/instagram_logo.png';
import letterboxdLogo from './krishnan_images/letterboxd_logo.png';
import officePoster from './krishnan_images/the_office.jpeg';
import vinnaithandiPoster from './krishnan_images/vinnaithandi_varuvaya.jpeg';
import parksRecPoster from './krishnan_images/parks_and_rec.jpg';
import superDeluxePoster from './krishnan_images/super_deluxe.jpg';
import screamPoster from './krishnan_images/scream.jpg';
import bangaloreDaysPoster from './krishnan_images/bangalore_days.jpg';
import flick2 from './krishnan_images/2420F500-DB39-473B-9C4F-7FD865943DCA_1_105_c.jpeg';
import flick4 from './krishnan_images/785E7F70-CA86-4AAB-BDFE-B098603DF27B_1_105_c.jpeg';
import flick5 from './krishnan_images/7913F27F-5D79-4FB5-95AC-496FF474A067_1_201_a.jpeg';
import flick6 from './krishnan_images/B0DD078E-E03A-449E-A6C9-B0691F1DC5B6_1_105_c.jpeg';
import flick7 from './krishnan_images/EFF08D7F-9CB5-424C-BFAF-D1D9501A26B4_1_105_c.jpeg';
import flick8 from './krishnan_images/F6559D49-5F24-4F1C-80A1-3392A4FF291B_1_102_o.jpeg';
import flick9 from './krishnan_images/BC324C73-9454-4957-8AAE-0278F63D2E17_1_105_c.jpeg';
import flick10 from './krishnan_images/34520205-EA81-4921-87DB-AE819B345DE7_1_105_c.jpeg';
import flick11 from './krishnan_images/01HS52FCTS56WE2JFJQ5Z42NN3-low-res-branded-.jpeg';
import flick12 from './krishnan_images/729F5F4A-C483-493E-B894-D22ADA2DF6CF_1_105_c.jpeg';
import flick13 from './krishnan_images/D762745D-3C40-4EB2-ADF7-D86819C43D96_1_105_c.jpeg';
import flick14 from './krishnan_images/99F00249-66C7-4F10-A731-B0F32AEC9054_1_105_c.jpeg';
import flick15 from './krishnan_images/1B78773D-E4FA-4D53-94B9-BDDF0678BA99_1_105_c.jpeg';
import flick16 from './krishnan_images/CAC4A3FF-47CB-4271-A9F8-0149AEFF0FF8_1_105_c.jpeg';
import flick17 from './krishnan_images/A3A6E60D-1173-4E63-8382-D0BB8DC12A8B_1_105_c.jpeg';
import flick18 from './krishnan_images/F580C3BD-8B04-48A9-9DBC-9CE344EB60B7_1_105_c.jpeg';

const friend_pics = [flick9, flick10, flick11, flick12, flick5, flick13, flick14, flick18];
const platforms = [
  {link: "https://www.linkedin.com/in/krishnanthol/", pic: linkedinLogo}, 
  {link: "https://www.github.com/in/krishnanthol/", pic: githubLogo},
  {link: "https://www.instagram.com/in/krishnan.thol/", pic: instagramLogo},
  {link: "https://letterboxd.com/krishnant/films/", pic: letterboxdLogo}
];
const media_pics = [officePoster, vinnaithandiPoster, parksRecPoster, superDeluxePoster, screamPoster, bangaloreDaysPoster];

function App() {
  return (
    <div style={
      { backgroundColor: 'rgb(185, 205, 251)' }
      }>
      <center>
        <h1 className="title">Krishnan Tholkappian 💁🏽‍♂️</h1>
        <hr className="solid_line" />
        <p className="heading">
          socially conscious cs major (nonprofit leadership and step minors) with a passion for people and tech!
        </p>
      </center>

      <div className="socials_container">
        {platforms.map (platform =>
          <div>
            <a href={platform.link} target="_blank" rel="noopener noreferrer">
              <img src={platform.pic} className="icon"/>
            </a>
          </div>
        )}

      </div>

      <br />
      <hr className="solid_line" />

      <center>
        <p className="heading"><u>friends 🫂</u></p>
      </center>

      <div className="flicks_container">
        {friend_pics.map(pic => 
          <div>
            <img src={pic} className="flick_horizontal"/>
          </div>)}
      </div>

      <br />
      <hr className="solid_line" />

      <center>
        <p className="heading">
          <u>movies and tv shows 🎬</u>
        </p>
      </center>
      <div className="media_container">
        {media_pics.map(pic =>
          <div>
            <img src={pic} className="poster"/>
          </div>
        )}
      </div>

      <br />
      <hr className="solid_line" />

      <center>
        <p className="heading">
          <u>hobbies 🧍🏽‍♂️</u>
        </p>
      </center>
      <div className="hobbies_container">
        <div className="hobby1">
          <center>
            <p className="heading">watching movies</p>
            <p>i've seen 432 movies in around 7 languages!</p>
          </center>
        </div>
        <div className="hobby2">
          <center>
            <p className="heading">photography</p>
            <p>
              check out my{' '}
              <a href="https://vsco.co/krishnaan/gallery" target="_blank" rel="noopener noreferrer">
                "portfolio"
              </a>
            </p>
          </center>
        </div>
        <div className="hobby3">
          <center>
            <p className="heading">volunteering</p>
            <p>
              i've provided{' '}
              <a href="https://code4tomorrow.org" target="_blank" rel="noopener noreferrer">
                free coding education
              </a>{' '}
              to 4000+ students in 20+ countries.
            </p>
          </center>
        </div>
      </div>

      <br />
      <hr className="solid_line" />

      <center>
        <p className="heading">
          <u>photogaphy 📸</u>
        </p>
        <div className="flicks_container">
          <div>
            <img src={flick2} className="flick_vertical" alt="Flick 2" />
          </div>
          <div>
            <img src={flick4} className="flick_horizontal" alt="Flick 4" />
          </div>
          <div>
            <img src={flick6} className="flick_vertical" alt="Flick 6" />
          </div>
          <div>
            <img src={flick7} className="flick_vertical" alt="Flick 7" />
          </div>
          <div>
            <img src={flick8} className="flick_horizontal" alt="Flick 8" />
          </div>
          <div>
            <img src={flick15} className="flick_horizontal" alt="Flick 8" />
          </div>
          <div>
            <img src={flick16} className="flick_horizontal" alt="Flick 8" />
          </div>
          <div>
            <img src={flick17} className="flick_vertical" alt="Flick 8" />
          </div>
        </div>

        <br />
        <br />
        <p>
          <u>thanks for visiting ✨</u>
        </p>
        <br />
      </center>
    </div>
  );
}

export default App;