import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
    const { user} = use(AuthContext);
    return (
        <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-md text-center mb-5 bg-base-100 border border-base-200 transition-colors duration-500">
            <title>Mentora-My Profile</title>
            <img
                src={`${user ? user.photoURL : '/user.png'}`}
                alt="My Photo"
                className="w-24 h-24 mx-auto rounded-full border-2 border-[#b413e1]"
            />
            <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
            <p className="text-gray-500 mb-6">{user?.email}</p>

            <Link to="/update-profile">
                <button className="btn text-white bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                    Update Information
                </button>
            </Link>
        </div>
    );
};

export default MyProfile;
