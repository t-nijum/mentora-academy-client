import React, { use } from 'react';


const TopCourses = ({topCoursesPromise}) => {

    const courses = use(topCoursesPromise)
    console.log(courses);
    
    
    return (
        <div>
            
        </div>
    );
};

export default TopCourses;