import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  useEffect(() => {
    document.title = "Gideon - My Portfolio Website";
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
