import React from 'react';
import Header from './Header';
import SearchBar from './Searchbar';
import BackgroundVideo from './Backgroundvideo'; // Import the BackgroundVideo component

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <BackgroundVideo /> {/* Use the BackgroundVideo component */}
      <SearchBar />
    </div>
  );
};

export default HomePage;