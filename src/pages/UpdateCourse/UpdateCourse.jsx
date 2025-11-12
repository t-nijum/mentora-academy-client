import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCourse = () => {
  const { id } = useParams(); // get course id from URL
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    image: ""
  });

  // 🔹 Fetch existing data
  useEffect(() => {
    fetch(`http://localhost:3000/add_new_courses/${id}`)
      .then(res => res.json())
      .then(data => setCourseData(data));
  }, [id]);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // 🔹 Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/add_new_courses/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Course updated successfully.", "success");
          navigate("/myAddedCourses"); // redirect after update
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Update Course</h2>

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
