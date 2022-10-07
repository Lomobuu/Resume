import profile from './profile.jpg';
import './App.css';


import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaAngular,FaBootstrap,FaGitAlt,FaJsSquare,FaNodeJs,FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiAzuredevops, SiAzurepipelines, SiGithubactions, SiMicrosoftazure, SiTerraform, SiPowershell, SiMicrosoftsharepoint, SiCplusplus, SiMicrosoftoffice } from "react-icons/si";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };

    setInterval(function() {
    var time = (new Date() - new Date(946508601000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    document.getElementById("Age").innerHTML = (time).toFixed(7);
  }, 500);

  return (
    
    <div className="App" class="bg-dark h-100">

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 6,
                },
                repulse: {
                  distance: 100,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
      />  

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div class="container-fluid">
            <p class="navbar-brand">Simen Fossen</p>
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
      


      <div class="container ">
        <div class="row justify-content-md-center">
          <div class="col col-lg-4">
            <img src={profile} alt="profile" class="img-fluid rounded-circle"/>
          </div>
        </div>
      </div>


        <section>
        <div class="container">
            <div class="row text-dark justify-content-md-center text-center">
              <div class="col col-lg-7 border rounded bg-light opacity-75 mt-2" id="About">
                <h1>ABOUT ME</h1>
                <hr></hr>
                <p>
                Hi! Im Simen Fossen, a <span id="Age"></span> year-old DevOps Engineer
                </p>
                <p>
                 currently living in Stavanger, Norway.
                </p> 
                <p>
                I am a developer with beginner knowledge of front-end & back-end techniques. 
                My web apps, such as this one, are projects for me to learn more frontend and backend, while still advancing my primary proffession: <b>DevOps</b> 
                </p>
                <p>
                By using tools such as CI/CD to automate hosting and further development of the web apps.

                </p>
              </div>
              <div class="col col-lg-7 border rounded bg-light opacity-75 mt-5 pb-5" id="Skills">
                <h1>Skills</h1>
                <hr></hr>
                <h2>Programming Languages & Frameworks</h2>
                <hr></hr>
                <FaHtml5 size={100}/><FaCss3Alt size={100}/><FaJsSquare size={100}/><SiCplusplus size={100}/>
                <br></br>
                <FaAngular size={100}/><FaReact size={100}/><FaBootstrap size={100}/><FaNodeJs size={100}/><FaGitAlt size={100}/>
                <hr></hr>
                <h2>Key Competance</h2>
                <hr></hr>
                <h3>Azure Cloud Platform & Microsoft Office</h3>
                <SiMicrosoftazure size={100}/><SiAzuredevops size={100}/><SiPowershell size={100}/><SiMicrosoftoffice size={100}/><SiMicrosoftsharepoint size={100}/>
                <br></br>
                <h3>DevOps</h3>
                <SiMicrosoftazure size={100}/><SiTerraform size={100}/><SiGithubactions size={100}/><SiAzurepipelines size={100}/>
                <h3>Primary Skills</h3>
                <p>Communication</p>
                <div class="progress">
                  <div class="progress-bar w-100" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
                <p>Teamwork</p>
                <div class="progress">
                  <div class="progress-bar w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
                <p>Creative</p>
                <div class="progress">
                  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
                <p>Leadership</p>
                <div class="progress">
                  <div class="progress-bar w-75" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                  </div>
                </div>
              </div>
              <div class="col col-lg-7 border rounded bg-light opacity-75 mt-5" id="Contact">
              <h1>Contact ME :D</h1>
              <p>Email: <b>simen.fossen@lyse.net</b></p>
              </div>
            </div>
        </div>
        </section>


      <footer class="text-center text-light bg-dark mt-auto">
      <div>

            <SocialIcon url="https://github.com/Lomobuu" />
            <SocialIcon url="https://www.linkedin.com/in/simen-fossen-30a855202/" />
            <p class="copyright">&copy; Simen Fossen</p>
      </div>


      </footer>


      
    </div>
  );
}

export default App;
