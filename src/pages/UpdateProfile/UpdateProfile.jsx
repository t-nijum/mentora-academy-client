import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, modifyUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    modifyUser(name, photoURL)
      .then(() => {
        toast("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="flex justify-center items-center md:min-h-screen my-5 md:bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-center text-[#b413e1] mb-6">
          Update Profile Information
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#b413e1]"
          placeholder="Enter your name"
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">
          Photo URL
        </label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#b413e1]"
          placeholder="Enter your photo URL"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#b413e1] text-white font-semibold py-2 rounded-lg hover:bg-[#9a10c6] transition"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
