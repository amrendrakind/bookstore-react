import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Categories from './pages/Categories'
import NotFound from './pages/NotFound'
import NavBar from './componenets/NavBar/NavBar'

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
