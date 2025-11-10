import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { loginUser, forgetPassword, signInWithGoogle } = use(AuthContext)
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        loginUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                // ---For store user name, email and photoUrl from signin with google
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in the database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })
                // -----user detailed stored in Mongo db
                navigate(`${location.state ? location.state : '/'}`)
                setSuccess(true)
                toast('Login Successfully!')

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)

            })
    }
    // To take email for email field also need to add ref={emailRef}
    const emailRef = useRef();

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(() => {
                toast('Password reset email sent')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = (event) => {
        event.preventDefault();
        setShowPass(!showPass);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                // console.log(result.user);
                // ---For store user name, email and photoUrl from signin with google
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                // create user in the database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })
                // -----user detailed stored in Mongo db

                navigate(location?.state?.from || "/"); // fallback if no redirect path
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
            });
    }

    return (
        <div className="hero mb-5 pt-20 max-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-5xl pt-10 font-bold">Login Now!</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input required ref={emailRef} name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input required type={showPass ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                                <button
                                    onClick={handleShowPass}
                                    className="btn btn-xs absolute top-2 right-6">{showPass ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                            <div >
                                <a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn btn-neutral mt-4 border-[#b413e1] bg-[#b413e1]">Login</button>
                        </fieldset>
                        {
                            success && <p className='text-green-500 font-bold'>Login Successfully!</p>
                        }

                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='font-bold text-center'>Don´t Have An Account? <Link to='/register' className="text-red-400  font-bold ">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;