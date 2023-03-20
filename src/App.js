import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Characteristic";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading time for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 6750);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
