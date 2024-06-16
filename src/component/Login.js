import React, { useState } from 'react';
import axios from './api/axios';
import '../App.css';

// function Login({ setIsLoggedIn }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('/api/users/login', { username, password });
//             const { token, username } = response.data;
//             localStorage.setItem('token', token);
//             localStorage.setItem('username', username);
//             setIsLoggedIn(true);
//             alert('Login successful');
//         } catch (error) {
//             alert('Login failed');
//         }
//     };

    function Login({ setIsLoggedIn }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = async () => {
            try {
                const response = await axios.post('/api/users/login', { username, password });
                const { token, username: loggedInUsername } = response.data;  // 응답에서 token과 username을 추출
                localStorage.setItem('token', token);
                localStorage.setItem('username', loggedInUsername);
                setIsLoggedIn(true);
                alert('Login successful');
            } catch (error) {
                alert('Login failed');
            }
        };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;