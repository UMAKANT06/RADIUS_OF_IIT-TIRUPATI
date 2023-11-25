import React, { useState } from 'react';
import styles from './Login_signup.css';
// import { useNavigate } from 'react-router-dom';

const Signup = ({ onLoginClick, onSignupSuccess}) => {
    // const navigate = useNavigate();
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

    const handleLoginClick = async (e) => {
        try {
            // navigate('/Login');
            onLoginClick();
        } catch (error) {
            console.error('Login failed. Please check your credentials.');
            setError('Login failed. Please check your credentials and try again.');
        }
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
            const response = await fetch('/api/users', {
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
                // navigate('./App');
                onSignupSuccess();
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
            <div className="Heading2">
                <img src="https://iittp.ac.in/icissconf/images/iit-tirupati_Logo.png" alt="IIT logo" />
                <h1>RADIUS OF IIT TIRUPATI</h1>
            </div>
            <div className="container">
                <div className="signupBody">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>User ID:</label>
                            <input type="text" value={userId} onChange={handleUserIdChange} placeholder="8 characters only (e.g. AB01C234)"/>
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
                            <select className="userCat" value={userCategory} onChange={handleUserCategoryChange}>
                                <option value="">Select User Category</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Signup</button>
                    </form>
                </div>
                <img src="../assets/webpage.png" alt="Webpage image" />
            </div>
            <p className="footer">Alredy have an account? .<span onClick={handleLoginClick}>Log In</span></p>
        </div>
    );
};

export default Signup;
