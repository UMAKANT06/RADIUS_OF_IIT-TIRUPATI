import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userCategory, setUserCategory] = useState('');
    const [error, setError] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUserCategoryChange = (e) => {
        setUserCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!userId || !password || !userName || !userCategory) {
            setError('Please fill in all the fields.');
            return;
        }

        // Clear any previous errors
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userId,
                    name: userName,
                    password,
                    userCategory,
                }),
            });

            if (response.ok) {
                // Assuming the server returns a success message
                const data = await response.json();
                console.log('Signup successful:', data.message);
                navigate('./App');
            } else {
                // Handle signup failure
                console.error('Signup failed. Please check your credentials.');
                setError('Signup failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('An error occurred during signup:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={handleUserIdChange} />
                </div>
                <div>
                    <label>User Name:</label>
                    <input type="text" value={userName} onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>User Category:</label>
                    <input type="text" value={userCategory} onChange={handleUserCategoryChange} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
