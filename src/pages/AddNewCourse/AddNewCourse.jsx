import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axios"; 
import { AuthContext } from "../../provider/AuthProvider";

const AddNewCourse = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddNewCourse = async (e) => {
        e.preventDefault();

        const form = e.target;

        const addNewCourse = {
            title: form.title.value,
            category: form.category.value,
            duration: form.duration.value,
            image: form.image.value,
            price: form.price.value,
            description: form.description.value,
            name: form.instructor.value,
            email: form.email.value,
            photo: form.photo.value,
            featured: form.featured.value, 
        };

        try {
            await axiosInstance.post("/add_new_courses", addNewCourse);

            Swal.fire("Added!", "Course added successfully.", "success");
            navigate("/myAddedCourses");
        } catch (error) {
            console.error("Error adding course:", error);
            Swal.fire("Error", "Failed to add course. Please try again.", "error");
        }
    };

    return (
        <div className="max-w-3xl mb-5 mx-auto bg-base-200 p-8 rounded-lg shadow-md transition-colors duration-500">
            <title>Add New Course</title>
            <h2 className="text-3xl font-bold text-center text-[#fcb500fa]">
                Add New Course!
            </h2>
            <p className="font-medium text-base-400 my-4 text-center">
                Please share course details carefully, including the <br /> Title, Image
                URL, Price, Duration, Category, and Description.
            </p>

            <form onSubmit={handleAddNewCourse} className="space-y-4">
                <label className="label">Course Title</label>
                <input
                    required
                    type="text"
                    name="title"
                    className="input input-bordered w-full"
                    placeholder="Course Title"
                />

                <label className="label">Course Category</label>
                <input
                    required
                    type="text"
                    name="category"
                    className="input input-bordered w-full"
                    placeholder="Course Category"
                />

                <label className="label">Course Duration</label>
                <input
                    required
                    type="text"
                    name="duration"
                    className="input input-bordered w-full"
                    placeholder="Course Duration (Hours)"
                />

                <label className="label">Image URL</label>
                <input
                    type="text"
                    name="image"
                    className="input input-bordered w-full"
                    placeholder="Image URL"
                />

                <label className="label">Course Price</label>
                <input
                    required
                    type="text"
                    name="price"
                    className="input input-bordered w-full"
                    placeholder="Course Price (USD)"
                />

                <label className="label">Is Course Featured</label>
                <input
                    required
                    type="text"
                    name="featured"
                    className="input input-bordered w-full"
                    placeholder="Yes or No"
                />

                <label className="label">Course Description</label>
                <input
                    required
                    type="text"
                    name="description"
                    className="input input-bordered w-full"
                    placeholder="Course Description"
                />

                <label className="label">Instructor Name</label>
                <input
                    required
                    type="text"
                    name="instructor"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={user?.displayName || ""}
                />

                <label className="label">Instructor Photo</label>
                <input
                    required
                    type="text"
                    name="photo"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={user?.photoURL || ""}
                />

                <label className="label">Instructor Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={user?.email || ""}
                />

                <button className="btn w-full bg-[#00d390] text-white font-bold text-lg">
                    Confirm to Add this Course
                </button>
            </form>
        </div>
    );
};

export default AddNewCourse;