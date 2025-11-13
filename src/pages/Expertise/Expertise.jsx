import React from "react";
import { motion } from "framer-motion";

const expertiseData = [
  { id: 1, name: "John Doe", sector: "Web Development", experience: "5 Years", image: "/expert1.png" },
  { id: 2, name: "Jane Smith", sector: "Data Science", experience: "4 Years", image: "/expert2.png" },
  { id: 3, name: "Mike Lee", sector: "UI/UX Design", experience: "6 Years", image: "/expert3.png" },
  { id: 4, name: "Sara Khan", sector: "Digital Marketing", experience: "3 Years", image: "/expert5.png" },
  { id: 5, name: "Alex Brown", sector: "Cyber Security", experience: "5 Years", image: "/expert4.png" },
  { id: 6, name: "Emma Wilson", sector: "AI & ML", experience: "4 Years", image: "/expert6.png" },
];

const Expertise = () => {
  return (
    <section className="overflow-hidden bg-base-100 pt-5 transition-colors duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FF8811]">
          Meet Our <span className="text-indigo-600">Expertise</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Learn from our expert instructors with years of experience in their fields.
        </p>
      </div>

      <motion.div
        className="flex space-x-8 px-4 md:px-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {expertiseData.concat(expertiseData).map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg w-60 flex-shrink-0 text-center mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover rounded-full border-2 border-indigo-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{expert.name}</h3>
            <p className="text-indigo-600 font-medium mb-1">{expert.sector}</p>
            <p className="text-gray-500 text-sm">{expert.experience}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
