import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="top-buttons">
        <button className="grey-button">About Us</button>
        <button className="grey-button">Buildings</button>
        <button className="grey-button">Sites</button>
      </div>
      <div className="logo">
      <img src="./logo.gif" alt="Logo" style={{ width: '100px', height: '50px' }} />
      </div>
      <div className="action-buttons">
        <button className="teal-button">Purchase</button>
        <button className="teal-button">Rent</button>
        <button className="teal-button">Sell</button>
      </div>
    </header>
  );
};

export default Header;