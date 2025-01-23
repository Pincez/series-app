import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieNavbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGrid from './components/CardGrid';
import AdminPanel from './Pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <MovieNavbar />

    <div>
      <h1 className="text-center my-4">Movie Collection</h1>
      <CardGrid />
    </div>


      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/movies" element={<h1>Movies Page</h1>} />
        <Route path="/series" element={<h1>Series Page</h1>} />
        <Route path="/kdrama" element={<h1>Kdrama Page</h1>} />
        <Route path="/requests" element={<h1>Requests Page</h1>} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
