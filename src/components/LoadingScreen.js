import React from "react";
import bgVid from "../assets/video/bday-opening.mp4";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <video autoPlay loop muted className="video">
        <source src={bgVid} type="video/mp4" />
      </video>
    </div>
  );
}

export default LoadingScreen;
