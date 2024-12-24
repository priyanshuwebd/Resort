import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Navbar from './Components/Navbar';
import "./App.css";




function App() {
  return (
    <Router>
      <Navbar /> {/* Moved Navbar inside Router */}
      <Routes>
        <Route path='/' element={<Home />} /> {/* Corrected Home component usage */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
