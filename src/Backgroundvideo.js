import React from 'react';
import './App.css'; // Import CSS for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="bgvideo.mp4" type="video/mp4" />
        <source src="background.webm" type="video/webm" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;