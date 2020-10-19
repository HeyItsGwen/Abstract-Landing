import React from 'react';

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
    <header class='d-flex row align-items-center flex-sm-row flex-column'>
      <div class='col-4 d-flex justify-content-center'>
        {/* page links on the right */}
        <Nav />
      </div>
      <div class='d-none col-4 d-sm-flex justify-content-center' id='centerLogo'>
        {/* center logo that disappears on small */}
        <i class="fab fa-drupal"></i>
      </div>     
      <div id='socials' class='col-4 d-flex justify-content-center'>
        {/* something here, store links maybe */}
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
    </div>
  )
}