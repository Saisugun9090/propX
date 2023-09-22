import React from 'react';
import HomePage from './Homepage';
import ContactUs from './ContactUs';
import BackgroundVideo from './Backgroundvideo';
import './App.css';
import PropertyListing from './Propertylisting';

function App() {
  return (
    <div className="app">
      <BackgroundVideo /> 
      <HomePage />
      <PropertyListing />
      <ContactUs /> {/* Add the ContactUs component */}
    </div>
  );
}

export default App;