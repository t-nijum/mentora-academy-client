import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const leangthCheck = /^.{6,}$/;
    const caseCheck = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const charCheck = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        const terms = e.target.terms.checked;
        if (!leangthCheck.test(password)) {
            // console.log('Invalid Pass');
            setError('Password must be 6 character or longer')
            return;
        }
        else if (!caseCheck.test(password)) {
            // console.log('Invalid Pass');
            setError('Password must have at least one uppercase and one lower case character')
            return;
        }
        else if (!charCheck.test(password)) {
            console.log('Invalid Pass');
            setError('Password must contain at least one special character (e.g. ! @ # $ % ^ & *).')
            return;
        }
            setSuccess(false)
            setError('')
            if (!terms) {
                setError('Please accept our terms and conditions');
                return;
            }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // update user
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);

                        // An error occurred
                        // ...
                    });
                e.target.reset();
                navigate(location.state || '/')

            })
            .catch(error => {
                console.log(error);
                alert(error.message)
                // setError(error.message)

            })
    }

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = (event) => {
        event.preventDefault();
        setShowPass(!showPass);

    }
    return (
        <div className='mb-5'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mx-15"> Register Now!</h1>
                        {/* <p className="py-6 text-gray-600 text-center">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    {/* Name and Photo */}
                                    <label className="label">Name</label>
                                    <input required type="text" name="name" className="input" placeholder="Your Name" />
                                    <label className="label">Your Photo</label>
                                    <input required type="text" name="photo" className="input" placeholder="Photo URL" />
                                    {/* Email and Pass */}
                                    <label className="label">Email</label>
                                    <input required type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <div className="relative">
                                        <input type={showPass ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                                        <button
                                            onClick={handleShowPass}
                                            className="btn btn-xs absolute top-2 right-6">{showPass ? <FaEyeSlash /> : <FaEye />}</button>
                                    </div>

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <div>
                                        <label className="label">
                                            <input name="terms" type="checkbox" defaultChecked className="checkbox" />
                                            Accept terms and conditions.
                                        </label>
                                    </div>
                                    <button type="submit" className="btn w-full text-white bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">Register</button>
                                </fieldset>
                                {
                                    success && <p className="text-green-500 text-center font-bold">Account Created Successfully</p>
                                }
                                {
                                    error && <p className="text-red-500 text-center font-bold">{error}</p>
                                }
                            </form>
                            <p className='font-bold text-center'>Already have an account. <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;