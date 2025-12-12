import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "../Underline";

interface Amenity {
  name: string;
  icon: string;
  _id: string;
}

interface ProjectSectionProps {
  amenities: Amenity[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ amenities }) => {
  return (
    <div className="py-8 px-4 sm:px-8 text-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
        Amenities
      </h1>
      <Underline />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6">
        {amenities.map((amenity) => (
          <motion.div
            key={amenity._id}
            className="relative flex flex-col  items-center justify-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={amenity.icon}
              alt={amenity.name}
              width={600}
              height={400}
              className="object-contain w-auto h-16 sm:h-18 md:h-20"
              />
            <h3 className="text-xs sm:text-sm px-4 py-2  text-zinc-900 mt-5">
              {amenity.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;




// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Underline from "../Underline";

// interface Amenity {
//   name: string;
//   icon: string;
//   _id: string;
// }

// interface ProjectSectionProps {
//   amenities: Amenity[];
// }

// const ProjectSection: React.FC<ProjectSectionProps> = ({ amenities }) => {
//   return (
//     <div className="py-8 px-4 sm:px-8 text-center">
//       <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
//         Amenities
//       </h1>
//       <Underline />
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6">
//         {amenities.map((amenity) => (
//           <motion.div
//             key={amenity._id}
//             className="relative flex flex-col items-center justify-center text-center"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Image
//               src={amenity.icon}
//               alt={amenity.name}
//               width={600}
//               height={400}
//               className="object-contain w-auto h-16 md:h-20"
//             />
//             <h3 className="text-xs sm:text-sm px-4 py-2 text-zinc-900 mt-5">
//               {amenity.name}
//             </h3>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectSection;

