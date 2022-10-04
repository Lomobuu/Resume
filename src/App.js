import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" class="bg-dark">
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
        <section id="About">
        <div class="d-flex justify-content-center">
          <h1 class="text-light d-flex justify-content-center">ABOUT ME</h1>
                <p class="d-flex justify-content-center">
                    Hey, I'm Onkar Shaligram, a 19-year-old undergrad, currently living in Bhopal (MP), India. Originally from Pune (MH), India.
                </p>

                <p>
                   I am a programmer with intermidiate knowledge of front-end & back-end techniques. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, as you learn faster and much more. As the saying goes: 'Two heads are better than one.!!'.
                </p>

                <p >
                    I will be earning a degree in Bachelor of Technology in Computer Science from VIT Bhopal University probably in 2023.
                </p>

                <p class="content__para">If you wish to connect with me, then find me at
                    <a href="https://twitter.com/shaligram-onkar">Twitter</a>,
                    <a href="https://www.linkedin.com/in/onkar-shaligram-a9799b190/" t > Linkedin</a> and also on
                    <a href="https://github.com/onkar-shaligram">Github</a>.
                </p>
              </div>
        </section>

      <footer class="bg-dark"> /* simple footer content */</footer>
    </div>
  );
}

export default App;
