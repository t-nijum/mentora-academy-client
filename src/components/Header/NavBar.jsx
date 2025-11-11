import React, { use } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { Link, Links } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { TbLogin2 } from 'react-icons/tb';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, logout } = use(AuthContext);

    const handleLogout = () => {
        // console.log('logout');
        logout().then(() => {
            toast('Logged out successfully!')
            // Sign-out successful.
        }).catch(error => {
            console.log(error);
            alert(error.message)
            // setError(error.message)

        })

    }

    const links = <>
        <Link to='/'><li className='ml-4 md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]'>Home</li></Link>
        <Link to='/courses'><li className='ml-4 md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0] '>Courses</li></Link>
        <Link to='/installed'><li className='ml-4 md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]'>Enrolled</li> </Link>
        {/* Private route when user is login then show this */}
        {
            user && <>
                <Link to='/profile'><li className='ml-4 md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]'>Profile</li> </Link>
            </>
        }
    </>
    return (
        <div className='Navbar parent'>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex justify-between items-center md:ml-10'>
                        <Link to='/'>
                            <img className='h-[50px] w-[50px] rounded-full mr-2' src="/logo.png" alt="Logo" />
                        </Link>
                        <p className="font-bold ml-2 md:ml-2 md:text-4xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                            Mentora
                        </span>{" "}</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* ---- */}
                {/* Dashboard Dropdown */}
                <div className="dropdown dropdown-hover ">
                    <label tabIndex={0} className="cursor-pointer ml-4 md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]">
                        Dashboard
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 md:text-lg font-bold text-[#b413e1] "
                    >
                        <Link to='/profile'>Profile</Link>
                        <Link to="/dashboard/enrolled">Enrolled Courses</Link>
                        <Link to="/dashboard/add-course">Add New Course</Link>
                        <Link to="/dashboard/my-courses">My Added Courses</Link>
                    </ul>
                </div>
                {/* ------ */}
                <div className="navbar-end">
                    <Link to='/profile'>
                        <img className={`mr-1 ${user ? 'w-12 h-12 rounded-full text-center border-2 text-[#b413e1]' : 'w-12 h-12 rounded-full border-2 text-black'}`} src={`${user ? user.photoURL : '/user.png'}`} alt="User" />
                    </Link>
                    <div>
                        {
                            user ? <Link to='/login'><a onClick={handleLogout} className="btn text-white bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]" href=""><BiLogOut /> Logout</a></Link> : <Link to='/login'><a className="btn text-white bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]" href=""> <TbLogin2 />Login</a></Link>
                        }
                    </div>
                </div>

            </div>
            <div className=' mt-2 text-center font-bold text-2xl text-[#b413e1] '>
                {user ? user.name : ''}
            </div>
        </div>
    );
};

export default NavBar;