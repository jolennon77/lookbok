import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import WeatherApp from "./component/WeatherApp";
import Header from "./component/Header";
import Register from "./component/Register";
import Login from "./component/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    return (
        <Router>
            <div className="App">
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} />
                <Routes>
                    <Route path="/" element={<WeatherApp />} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
                    <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
