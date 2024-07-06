import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './SignIn.css'

function SignIn({setUser}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleSignIn = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/signin', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email,
    //                 password,
    //             }),
    //         });

    //         if (response.ok) {
    //             const { token, user } = await response.json();
    //             setUser(user); //added
    //             const userId = user._id;

    //             // Save the token in localStorage or sessionStorage
    //             localStorage.setItem('token', token);
    //             localStorage.setItem('userId', userId); // Store the userId in localStorage
                
    //             console.log('Sign-in successful');
    //             setEmail('');
    //             setPassword('');
    //             navigate('/');

    //         } else {
    //             alert('Please check if the email and password are correct');
    //             console.error('Sign-in failed');
    //         }
    //     } catch (error) {
    //         console.error('Error during sign-in:', error);
    //     }
    // };
    const handleSignIn = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
            credentials: 'include', // Include credentials (cookies) in the request
          });
    
          if (response.ok) {
            const { user } = await response.json();
            setUser(user); // Set the user state
            console.log('Sign-in successful');
            setEmail('');
            setPassword('');
            navigate('/');
          } else {
            alert('Please check if the email and password are correct');
            console.error('Sign-in failed');
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
        }
      };
    return (
        <>
            <Navbar />
            <div className='sign-in-page'>
                <div className="container d-flex justify-content-center align-items-center pt-4">
                    <div className="card p-4 sign-in-card">
                        <h1 className="text-center signin-header"><b>Sign In</b></h1>
                        <div className='d-flex justify-content-center pt-3'>
                            <div className="signin-underline"></div>
                        </div>
                        <form className='pt-4'>
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
                                <button type="button" className="sign-button-blue mb-3" onClick={handleSignIn}>
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className='mb-3 text-center'>
                            <p><b>Don&apos;t have an account!, then create one 😀</b></p>
                        </div>
                        <form className='d-flex justify-content-center'>
                            <Link to='/signup' style={{ textDecoration: 'none' }}>
                                <button type="button" className="sign-button-violet">
                                    Sign Up
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn