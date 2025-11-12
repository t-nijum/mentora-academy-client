import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const AddNewCourse = () => {
    const { user } = use(AuthContext)
    // console.log(user);

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
        console.log(instructor,title,email, category, image, price, duration, description, photo);

        const addNewCourse = {
            title: title,
            category: category,
            duration : duration,
            image: image,
            price: price,
            description : description,
            name: instructor,
            email: email,
            photo: photo,
        }
        fetch('http://localhost:3000/add_new_courses',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewCourse)
        })
            .then(res=> res.json())
            .then(data=>{
                console.log('after adding new course', data);
                
            })

        // const email = form.email.value;
        // const password = form.password.value;
        // // console.log(name, photo, email, password);
        // const terms = e.target.terms.checked;
    }
    return (
        <div className='mb-5'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Adding Your New Course!</h1>
                        <p className="py-6 font-bold text-gray-600 text-center">
                            Share your knowledge by creating a new course. Fill in the course details carefully, including the title, image URL, price, duration, category, and description , isFeatured.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleAddNewCourse}>
                                <fieldset className="fieldset">
                                    <button className="btn btn-neutral font-bold text-xl text-black border-[#13d7e1] bg-[#b413e1 bg-[#13e1aa]">Course Information</button>
                                    <label className="label">Course Title</label>
                                    <input required type="text" name="title" className="input" placeholder='Course Title' />

                                    <label className="label">Course Category</label>
                                    <input required type="text" name="category" className="input" placeholder='Course Category' />
                                    <label className="label">Course Duration</label>
                                    <input required type='text' name="duration" className="input" placeholder='Course Duration (Hours)' />

                                    <label className="label">Image URL</label>
                                    <input type="text" name="image" className="input" placeholder='Image URL' />

                                    <label className="label">Course Price</label>
                                    <input required type="text" name="price" className="input" placeholder='Course Price (USD)' />

                                    <label className="label">Course Description</label>
                                    <input required type="text" name="description" className="input" placeholder='Course Description' />
                                    {/* Name and Photo */}
                                    <label className="label">Instructor Name</label>
                                    <input required type="text" name="instructor" className="input" readOnly defaultValue={user?.displayName || ""}  />
                                    <label className="label">Instructor Photo</label>
                                    <input required type="text" name="photo" className="input" readOnly defaultValue={user?.photoURL || ""} />
                                    <label className="label">Instructor Email</label>
                                    <input required type="email" name="email" className="input" readOnly defaultValue={user?.email || ""} />

                                    

                                    <button type="submit" className="btn btn-neutral font-bold text-2xl text-black mt-4 border-[#2be113] bg-[#b413e1 bg-[#1de113]">Confirm Add Course</button>


                                </fieldset>

                            </form>
                            <p className='font-bold text-center'>Already have an account. <Link to='/login' className="text-blue-700 font-bold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCourse;