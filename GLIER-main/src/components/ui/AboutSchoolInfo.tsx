import { motion } from "framer-motion";

const AboutSchoolInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-[75%] mx-auto">
       <div
        className="bg-[#e6f4ea] rounded-2xl shadow-md p-8 transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl"
        
        >

          <h2 className="text-3xl font-bold text-center mb-4 text-black-900">
           

            About Our School
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            At <strong>GLIER Public School</strong>, we believe that education is a journey of growth,
            discovery, and transformation. Surrounded by nature and guided by strong values,
            our institution is dedicated to nurturing young minds through academic excellence,
            modern facilities, and a holistic approach to learning. We strive to create a safe,
            inclusive, and engaging environment where every child feels valued and inspired.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSchoolInfo;
