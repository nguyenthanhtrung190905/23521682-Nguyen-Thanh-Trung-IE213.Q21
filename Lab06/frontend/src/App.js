import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Gọi file MoviesList bạn đã tạo vào đây
import MoviesList from './components/movies-list'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Thanh Menu điều hướng phía trên */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 px-3">
          <Link to={"/movies"} className="navbar-brand">Movie Reviews</Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">Login</Link>
            </li>
          </div>
        </nav>

        {/* Nơi cấu hình đường dẫn để hiển thị giao diện tương ứng */}
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;