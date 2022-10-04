import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Simen Fossen</a>
          </div>
          <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Socials">Socials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Contact">Contact me!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="Https://www.fozzen.com">Climbing Hobby</a>
          </li>
        </ul>
        </nav>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome.
        </p>

      </header>
    </div>
  );
}

export default App;
