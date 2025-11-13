import React, { use } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { Link, Links } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { TbLogin2 } from 'react-icons/tb';
import { toast } from 'react-toastify';
import ThemeToggle from '../../pages/ThemeToggle/ThemeToggle';

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

    const links =
        <>
            <Link to='/'><li className='ml-4 md:text-3xl font-bold text-[#FF8811]'>Home</li></Link>
            <Link to='/courses'><li className='ml-4 md:text-3xl font-bold text-[#FF8811] '>Courses</li></Link>

            {user && (
                <div className="dropdown dropdown-hover ">
                    <label tabIndex={0} className="cursor-pointer ml-4 md:text-3xl font-bold text-[#FF8811]">Dashboard</label>

                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 md:text-lg font-semibold text-[#FF8811]">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/enrolled-courses">Enrolled Courses</Link></li>
                        <li><Link to="/addNewCourses">Add New Course</Link></li>
                        <li><Link to="/myAddedCourses">My Added Courses</Link></li>
                    </ul>
                </div>
            )}
        </>
    return (
        <div className='Navbar parent bg-[#f9f9f9] text-gray-800 shadow'>
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
                <div className="navbar-end">
                    <nav className="flex mr-2 justify-between items-center rounded-full shadow-md">
                        <ThemeToggle />
                    </nav>
                    <Link to='/profile'>
                        <img className={`mr-1 ${user ? 'w-12 h-12 rounded-full text-center' : 'w-12 h-12 rounded-full border-2 text-black'}`} src={`${user ? user.photoURL : '/user.png'}`} alt="User" />
                    </Link>
                    <div>
                        {
                            user ? <Link to='/login'><button onClick={handleLogout} className="btn text-white bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]"><BiLogOut /> Logout</button></Link> : <Link to='/login'><button className="btn text-white bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]"> <TbLogin2 />Login</button></Link>
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