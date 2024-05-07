// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import LandingPage from './pages/landingPage'; // Import the LandingPage component

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
