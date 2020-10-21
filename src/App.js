import React from 'react';
import bugs from './images/bugs.jpg';
import finn from './images/finn.jpg';
import jake from './images/jake.jpg';
import glimmer from './images/glimmer.jpg';
import bubbles from './images/bubbles.jpg';
import deedee from './images/deedee.jpg';
import plank from './images/plank.png';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Jumbotron />
        <About />
        <Reviews />
        <Contact />
      </main>

      <footer>
        <Footer />
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
    <ul class='d-flex flex-row' id='socials'>
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

function Reviews() {
  return (
    <div id='reviews' class='d-flex flex-column align-items-center'>
      <div id='reviewTitle' class='align-self-end'>
        <h2>Reviews</h2>
      </div>
      <div class='reviewLeft row'>
        <div class='reviewImg col-12 col-sm-3 d-flex justify-content-center'>
          <img src={bubbles} alt='bubbles'></img>
        </div>
        <div class='col-12 col-sm-9 reviewText'>
          <h3>A. Realname</h3>
          <p class='text-left'>Let the world know what your favorite customers think about you, and your excellent brand, or product.</p>
          <small>25, F, Pittsburg.</small>
        </div>
      </div>
      <div class='reviewRight row'>
        <div class='col-12 col-sm-9 reviewText d-flex flex-column align-items-end'>
          <h3 class='text-right'>A. Realname</h3>
          <p class='text-right'>Show everyone that it's not just empty words, that people love you and are willing to tell others to love you too.</p>
          <small class='text-right align-self-end'>32, F, Smallsville</small>
        </div>
        <div class='col-12 col-sm-3 reviewImg d-flex justify-content-center'>
          <img src={deedee} alt='deedee'></img>
        </div>
      </div>
      <div class='reviewLeft row'>
        <div class='reviewImg col-12 col-sm-3 d-flex justify-content-center'>
          <img src={plank} alt='plank'></img>
        </div>
        <div class='col-12 col-sm-9 reviewText'>
          <h3>A. Realname</h3>
          <p class='text-left'>Push them towards your work by reinforcing that you, you company, and what you make are the right choice for them.</p>
          <small>???, ???, the Culdesac</small>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div id='contact' class='d-flex flex-column align-items-center'>
      <div id='contactTitle' class='align-self-start'>
        <h2>Contact Us</h2>
      </div>
      <div id='contactBoxes' class='row d-flex justify-content-around'>
        <div class='col-12 col-sm-5' id='contactSocial'>
          <h3>Our Social Media Pages</h3>
          <div id='bottomSocials' class='d-flex flex-column align-items-center'>
            <Socials />
          </div>
        </div>
        <div class='col-12 col-sm-5 d-flex flex-column align-items-end' id='contactForm'>
          <h3>Contact us directly!</h3>
          <p>Email us:</p>
          <p><a href='https://github.com/HeyItsGwen' target='blank'>YourBrand@email.com</a></p>
          <p class='topMargin'>Send us a message:</p>
          <form class='d-flex flex-column align-items-end'>
            <div class='form-group'>
              <label for="emailInput">Your Email:</label>
              <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp"></input>
              <small id="emailHelp" class="form-text text-muted">Your information is safe with us!</small>
            </div>
            <div class='form-group'>
              <label for="textInput">How can we help?</label>
              <input type="text" class="form-control" id="textInput"></input>
            </div>
            <button class='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <div id='footerDiv' class='d-flex flex-column align-items-center'>
      <p>Copyright <i class="fas fa-copyright"></i>Your Brand 2020.</p>
      <p><a class='text-center' href='https://github.com/HeyItsGwen'>YourBrand@email.com</a> | 1(800)555-1234</p>
      <p class='text-center'>Made with ♥ and <i class="fas fa-coffee"></i> by <a href='https://github.com/HeyItsGwen' target='blank'>Gwen</a></p>
    </div>
  )
}