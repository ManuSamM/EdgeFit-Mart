import './SignUp.css'
import Navbar from '../../Components/Navbar/Navbar'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            // Make a request to the sign-up endpoint on your server
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            // Check if the sign-up was successful
            if (response.ok) {
                console.log('Sign-up successful:', data.message);
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/signin');
            } else {
                console.error('Sign-up failed:', data.message);
            }
        } catch (error) {
            console.error('Error during sign-up:', error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className='sign-up-page'>
                <div className="container d-flex justify-content-center align-items-center pt-4">
                    <div className="card p-4 sign-up-card">
                        <h1 className="text-center signup-header"><b>Sign Up</b></h1>
                        <div className='d-flex justify-content-center pt-3'>
                            <div className="underline"></div>
                        </div>
                        <form className='pt-4'>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    placeholder='Name'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='mb-3 d-flex justify-content-center'>
                                <button type="button" className="sign-button-blue mb-3" onClick={handleSignUp}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className='mb-3 text-center'>
                            <p><b>Already have an account, then sign in 😀</b></p>
                        </div>
                        <form className='d-flex justify-content-center'>
                            <Link to='/signin' style={{ textDecoration: 'none' }}>
                                <button type="button" className="sign-button-violet">
                                    Sign In
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp