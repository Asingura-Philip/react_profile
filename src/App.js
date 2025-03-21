import React, { useState } from 'react';
import {Route,Router} from 'react-router-dom'
import {Intro, Content, PersonalDetails,ContactSection,Links,Table} from './components/components';
import Login from './pages/login';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <button id="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      
      <Intro/>
      <PersonalDetails/>
      <Content/>
      <Table/>
      <Links/>
      <ContactSection/>
    </div>
  );
}



// credentials stored in datafile
// login page for profile
// year,semeseter,all courseunits
// bonus for having text fields
export default App;
