import {useState} from 'react'
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <div className="background-img">
      <header className="header">
        <h1 className="title">Start Bootstrap</h1>
        <nav className="nav-bar">
          <p className="nav-item">SERVICES</p>
          <p className="nav-item">PORTFOLIO</p>
          <p className="nav-item">ABOUT</p>
          <p className="nav-item">TEAM</p>
          <p className="nav-item">CONTACT</p>
        </nav>
        <div id="ham" className="hamburger">MENU
        <img onClick={toggleMenu}
        src="https://images-ext-1.discordapp.net/external/3HZMjd05toDMjiJ808Eo2EPXHH5AHUUuDGJWs0RQUy8/https/upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/768px-Hamburger_icon_white.svg.png?width=465&height=465" className="hamburger"/>
        <nav className={`mobile-nav ${isMenuOpen ? null : "mobile-nav-hide"}`}>
          <p className="mobile-nav-item">SERVICES</p>
          <p className="mobile-nav-item">PORTFOLIO</p>
          <p className="mobile-nav-item">ABOUT</p>
          <p className="mobile-nav-item">TEAM</p>
          <p className="mobile-nav-item">CONTACT</p>
          </nav>
        </div>
      </header>
      <body className="center-2">
        <p id="center" className="small-text">Welcome To Our Studio!</p>
        <p id="center" className="big-text">IT'S NICE TO MEET YOU</p>
        <div id="center" className="yellow-box">TELL ME MORE</div>
      </body>
    </div>
      <footer>
        <h1 className="footer-text">SERVICES</h1>
        <p className="footer-text, lorem">Lorem ipsum dolor sit amet consectetur.</p>
      </footer>
      </div>
  );
}

export default App;
