import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignupClick = async(e) => {
        try{
            navigate('/Signup');
        }catch(error){
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
            const response = await fetch('http://localhost:3000/api/users/login', {
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
                history.push('./App');
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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={handleUserIdChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={handleSignupClick}>Signup</button></p>
        </div>
    );
};

export default Login;