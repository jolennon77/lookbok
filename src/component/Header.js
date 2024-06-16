import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header({ isLoggedIn, setIsLoggedIn, username }) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
    };

    return (
        <header className="App-header">
            <>&nbsp;</>
            <div className="logo">Lookbok</div>
            {isLoggedIn ? (
                <div className="header-name">
                    <span>{username}유저</span>
                    <button className="header-buttons" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="header-buttons">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;
