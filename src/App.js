//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import Navbar from './components/Navbar';
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
//import {BrowserRouter as Router} from 'react-router-dom';

// TODO: add a browser router (react router dom) so we can navigate to different pages on our porftolio -> About, contact, projects, etc
// knowing which pages we want to be able to navigate to will allow us to create the components for each page
function App() {
  const [section, setSection] = useState("Profile");

  function renderSection(s) {
      switch(s) {

        case "Profile":   return <Profile />;
        case "Contact":   return <Contact />;
        case "Portfolio": return <Portfolio />;
        case "Resume":  return <Resume />;

        default:      return <h1>No Section match</h1>;
      }
    }
  
  return (
   
      <div className="App">
        <header className="App-header">
          <Navbar section={section} setSection={setSection}>Navbar</Navbar>
        </header>
        
        { renderSection(section) }

        <footer className="App-header">
        <Footer>Footer</Footer>
        </footer>
      </div>
    
  );
}

export default App;
