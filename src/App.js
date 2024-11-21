import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h2>Welcome to My Website</h2>
        <p>This is a simple homepage built with React.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
