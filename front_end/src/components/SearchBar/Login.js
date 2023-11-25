import React, { useState } from 'react';
import styles from './Login_signup.css';
// import { useNavigate } from 'react-router-dom';

const Login = ({ onSignupClick, onLoginSuccess }) => {
    // const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignupClick = async (e) => {
        try {
            // navigate('/Signup');
            onSignupClick();
        } catch (error) {
            console.error('Signup failed. Please check your credentials.');
            setError('Signup failed. Please check your credentials and try again.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!userId || !password) {
            setError('Please enter both user ID and password.');
            return;
        }

        // Clear any previous errors
        setError('');

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId, password }),
            });

            if (response.ok) {
                // Assuming the server returns an authentication token
                const data = await response.json();
                const authToken = data.token;

                // Now you can handle the successful login, e.g., redirect to another page
                console.log('Login successful. Auth Token:', authToken);
                // navigate('/App');
                onLoginSuccess();
            } else {
                // Handle authentication failure
                console.error('Login failed. Please check your credentials.');
                setError('Invalid user ID or password. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <div className="Heading">
                <img src="https://iittp.ac.in/icissconf/images/iit-tirupati_Logo.png" alt="IIT logo" />
                <h1>RADIUS OF IIT TIRUPATI</h1>
            </div>
            <div className="container">
                <div className="loginBody">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>User ID:</label>
                            <input type="text" value={userId} onChange={handleUserIdChange}  placeholder="8 characters only (e.g. AB01C234)" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                    </form>
                </div>
                <img src="../assets/webpage.png" alt="Webpage image" />
            </div>
            <span>Don't have an account? <p onClick={handleSignupClick}>Sign Up</p></span>
        </div>
    );
};

export default Login;