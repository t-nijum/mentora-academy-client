import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axiosInstance from "../../api/axios";

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    image: "",
  });

  // 🔹 Fetch existing data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosInstance.get(`/add_new_courses/${id}`);
        setCourseData(res.data);
      } catch (error) {
        console.error("Error fetching course:", error);
        Swal.fire("Error", "Failed to fetch course data.", "error");
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.put(`/add_new_courses/${id}`, courseData);

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Course updated successfully.", "success");
        navigate("/myAddedCourses");
      } else {
        Swal.fire("No Changes", "No updates were made to the course.", "info");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      Swal.fire("Error", "Failed to update the course.", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-8 rounded-lg shadow-md mt-10 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#fcb500fa]">
        Update Course
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Course Title"
        />

        <textarea
          className="textarea textarea-bordered w-full"
          name="description"
          value={courseData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          className="input input-bordered w-full"
          name="price"
          value={courseData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          className="input input-bordered w-full"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
          placeholder="Duration"
        />

        <input
          className="input input-bordered w-full"
          name="category"
          value={courseData.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <input
          className="input input-bordered w-full"
          name="image"
          value={courseData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button className="btn w-full bg-[#00d390] text-white font-bold text-lg">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;