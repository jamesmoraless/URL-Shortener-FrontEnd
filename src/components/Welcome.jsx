//Preview Image of the shortener 
import React, {useState, useEffect} from 'react';
import "./welcome.css";
import projectImage from '../assets/urlShortener IMG.png'; // Import the project image


export default function Welcome(props) {
    const handleLoginBtn = () => {
        try {
          //get redirected to register
          props.history.push('/login');

        } catch (err) {
          console.log('Button Failed:', err);
        }
      };
    const handleRegisterBtn = () => {
        try {
          //get redirected to register
          props.history.push('/register');

        } catch (err) {
          console.log('Button Failed:', err);
        }
      };

      
    return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to My URL Shortener</h1>
      <p className="intro-text">This is a URL shortener project that helps you create 
      shorter URLs for easy sharing and improved user experience.</p>
      <img className='project-image' src={projectImage} alt="Example of the Url Shortener"/>
      <div className="about-me-box">
        <h2>About Me and My Project</h2>
        <p>Hi! My name is James Morales and I am a Software Engineering student with a passion for 
            creating web applications that have a purpose tied to making my life and the lives of 
            others easier. In this full-stack web application, I used a "PERN" stack back-end
            which includes <b>Postgresql</b> for creating my database, <b>SQL</b> to interact 
            with the database, <b>Express.js</b> to build my API, and <b>Node.js</b> to XXX. For 
            the front-end I used <b>React</b> as my JS framework and good ol <b>Javascript</b>, 
            <b>HTML</b> and <b>CSS</b>.</p> <br></br><br></br>
            <p>
                If you would like to try this out, feel free to register, login and then start using 
                the shortener. If you already have an account, simply login. 
            </p>
      </div>
      <div className="button-group">
        <button className="button register-button" onClick={handleRegisterBtn}>
            Register Now
        </button>
        <button className="button login-button" onClick={handleLoginBtn}>
            Login Now
        </button>
        
      </div>

      <div className="foot-container">
    <a className="word" href='https://github.com/jamesmoraless' target='_blank'>GitHub</a>
    <a className="word" href='https://jamesmoraless.github.io' target='_blank'>Personal Website</a>
    <a className="word" href='https://www.linkedin.com/in/james-morales-470a161b2/' target='_blank'>LinkedIn</a>
    </div>

    </div>
        
      );
    };
    