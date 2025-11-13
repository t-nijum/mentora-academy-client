import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddNewCourse = () => {
    const { user } = use(AuthContext)
    // console.log(user);
    const navigate = useNavigate();

    const handleAddNewCourse = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const description = form.description.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(instructor, title, email, category, image, price, duration, description, photo);

        const addNewCourse = {
            title: title,
            category: category,
            duration: duration,
            image: image,
            price: price,
            description: description,
            name: instructor,
            email: email,
            photo: photo,
        }
        fetch('http://localhost:3000/add_new_courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewCourse)
        })
            .then(res => res.json())
            .then(() => {
                      Swal.fire("Added!", "Course added successfully.", "success");
                      navigate("/myAddedCourses"); // redirect after update
                  });

        // const email = form.email.value;
        // const password = form.password.value;
        // // console.log(name, photo, email, password);
        // const terms = e.target.terms.checked;
    }
    return (
        <div className="max-w-3xl mb-5 mx-auto bg-base-200 p-8 rounded-lg shadow-md transition-colors duration-500">
            <h2 className="text-3xl font-bold text-center text-[#fcb500fa]  ">Add New Course!</h2>
            <p className="font-medium text-base-400 my-4 text-center  ">
                Please share course details carefully, including the <br /> Title, Image URL, Price, Duration, Category, and Description , isFeatured.
            </p>
            <form onSubmit={handleAddNewCourse} className="space-y-4">
                <label className="label">Course Title</label>
                <input required type="text" name="title" className="input input-bordered w-full" placeholder='Course Title' />
                <label className="label">Course Category</label>
                <input required type="text" name="category" className="input input-bordered w-full" placeholder='Course Category' />
                <label className="label">Course Duration</label>
                <input required type='text' name="duration" className="input input-bordered w-full" placeholder='Course Duration (Hours)' />

                <label className="label">Image URL</label>
                <input type="text" name="image" className="input input-bordered w-full" placeholder='Image URL' />

                <label className="label">Course Price</label>
                <input required type="text" name="price" className="input input-bordered w-full" placeholder='Course Price (USD)' />

                <label className="label">Is Course Featured</label>
                <input required type="text" name="featured" className="input input-bordered w-full" placeholder='Yes or No' />

                <label className="label">Course Description</label>
                <input required type="text" name="description" className="input input-bordered w-full" placeholder='Course Description' />
                {/* Name and Photo */}
                <label className="label">Instructor Name</label>
                <input required type="text" name="instructor" className="input input-bordered w-full" readOnly defaultValue={user?.displayName || ""} />
                <label className="label">Instructor Photo</label>
                <input required type="text" name="photo" className="input input-bordered w-full" readOnly defaultValue={user?.photoURL || ""} />
                <label className="label">Instructor Email</label>
                <input required type="email" name="email" className="input input-bordered w-full" readOnly defaultValue={user?.email || ""} />

                <button className="btn w-full bg-[#00d390] text-white font-bold text-lg">
                    Confirm to Add this Course
                </button>
            </form>
        </div>

    );
};

export default AddNewCourse;