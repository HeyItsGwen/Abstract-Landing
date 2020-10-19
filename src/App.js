import React from 'react';
import bugs from './images/bugs.jpg';
import finn from './images/finn.jpg';
import jake from './images/jake.jpg';
import glimmer from './images/glimmer.jpg';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Jumbotron />
        <About />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;

function Nav() {
  return (
    <nav id='navBar'>
      <ul class='d-flex flex-rowmed'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#reviews'>Reviews</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
}

function Socials() {
  return (
    <ul class='d-flex flex-row'>
      <li class='facebookLogo'><a href='https://www.facebook.com' target='blank'><i class="fab fa-facebook-square"></i></a></li>
      <li class='twitterLogo'><a href='https://www.twitter.com' target='blank'><i class="fab fa-twitter-square"></i></a></li>
      <li class='instagramLogo'><a href='https://www.instagram.com' target='blank'><i class="fab fa-instagram-square"></i></a></li>
    </ul>
  )
}

function Header() {
  return (
    <header class='d-flex row align-items-center flex-md-row flex-column'>
      <div class='col-lg-4 col-5 d-flex justify-content-center'>
        <Nav />
      </div>
      <div class='d-none col-lg-4 col-3 d-md-flex justify-content-center' id='centerLogo'>
        <i class="fab fa-drupal"></i>
      </div>     
      <div id='socials' class='col-lg-4 col-4 d-flex justify-content-center'>
        <Socials />
      </div>
    </header>
  )
}

function Jumbotron() {
  return (
    <div class='jumbotron'>
      <div id='box1' class='d-flex justify-content-center align-items-center'>
        <div class='jumboText d-flex'>
          <h1 class='align-self-center justify-content-end'>It's Your Brand!</h1>
          <p class='align-self-end'>Show it off to the world!</p>
        </div>
      </div>
      <div id='box2'></div>
    </div>
  )
}

function About() {
  return (
    <div id='about' class='d-flex flex-column align-items-center'>
      <h2>About Us</h2>
      <div class='row'>
        <div class='col-12 col-sm-6 d-flex'>
          <img class='imgleft' src={bugs} alt='bugs bunny'></img>
          <span>
            <h3>Name Here</h3>
            <p>Text info about the person here, that goes on for a while to make it longer</p>
          </span>
        </div>
        <div class='col-12 col-sm-6 d-flex'>
          <span>
            <h3 class='text-right'>Name Here</h3>
            <p class='text-right'>Text info about the person here, that goes on for a while to make it longer</p>
          </span>
          <img class='imgright' src={finn} alt='Finn adventure time'></img>
        </div>
      </div>
      <div class='row row2'>
      <div class='col-12 col-sm-6 d-flex'>
          <img class='imgleft' src={jake} alt='bugs bunny'></img>
          <span>
            <h3>Name Here</h3>
            <p>Text info about the person here, that goes on for a while to make it longer</p>
          </span>
        </div>
        <div class='col-12 col-sm-6 d-flex'>
          <span>
            <h3 class='text-right'>Name Here</h3>
            <p class='text-right'>Text info about the person here, that goes on for a while to make it longer</p>
          </span>
          <img class='imgright' src={glimmer} alt='Finn adventure time'></img>
        </div>
      </div>
      <p class='aboutBottomP'>Let people know what they should love about your team and what you do!</p>
    </div>
  )
}