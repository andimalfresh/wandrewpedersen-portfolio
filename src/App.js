import React, { Component } from 'react';
import './App.css';
import About from "./components/About"
import Linkage from "./components/Linkage"
import Mavbar from "./components/Mavbar"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mavbar />
        </header>
          <About />
          <Resume />
          <Linkage />
          <Footer />
      </div>
    );
  }
}

export default App;
