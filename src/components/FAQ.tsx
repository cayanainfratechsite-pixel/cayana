// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";

// interface FAQItem {
//   id: number;
//   question: string;
//   answer: string;
//   category: string;
// }

// const FAQ: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string>("all");

//   const faqData: FAQItem[] = [
//     {
//       id: 1,
//       question: "What types of properties does Cayana Infratech offer?",
//       answer: "We specialize in luxury residential apartments, eco-friendly housing complexes, and premium commercial spaces. Our projects range from 2-3 BHK apartments to large commercial developments, all designed with modern amenities and sustainable features.",
//       category: "properties"
//     },
//     {
//       id: 2,
//       question: "What is the typical timeline for project completion?",
//       answer: "Our project timelines vary based on scope and size. Residential projects typically take 24-36 months from groundbreaking to possession, while commercial projects may take 18-30 months. We maintain strict adherence to our promised delivery schedules.",
//       category: "timeline"
//     },
//     {
//       id: 3,
//       question: "Do you offer financing assistance or payment plans?",
//       answer: "Yes, we provide flexible payment plans and work with leading banks and financial institutions to offer home loans at competitive rates. We also have tie-ups with various lenders to facilitate easy financing options for our customers.",
//       category: "financing"
//     },
//     {
//       id: 4,
//       question: "What amenities are typically included in your projects?",
//       answer: "Our projects feature world-class amenities including swimming pools, fitness centers, landscaped gardens, 24/7 security, power backup, parking facilities, children's play areas, community halls, and modern elevators. Specific amenities vary by project.",
//       category: "amenities"
//     },
//     {
//       id: 5,
//       question: "Are your projects approved by local authorities?",
//       answer: "Absolutely. All our projects have necessary approvals from local development authorities, environmental clearances, and comply with all regulatory requirements. We ensure complete legal compliance before launching any project.",
//       category: "legal"
//     },
//     {
//       id: 6,
//       question: "What is your approach to sustainable construction?",
//       answer: "We prioritize eco-friendly construction practices including rainwater harvesting, solar power integration, energy-efficient designs, waste management systems, and green building materials. Many of our projects aim for green building certifications.",
//       category: "sustainability"
//     },
//     {
//       id: 7,
//       question: "Can I customize my apartment layout or interiors?",
//       answer: "Yes, we offer customization options for layouts and interiors within structural limitations. Our design team works closely with customers to accommodate specific requirements while maintaining the project's overall architectural integrity.",
//       category: "customization"
//     },
//     {
//       id: 8,
//       question: "What is your policy on possession and handover?",
//       answer: "We provide a comprehensive handover process including quality checks, documentation, warranty information, and maintenance guidelines. Possession is granted only after all amenities are completed and safety certifications are obtained.",
//       category: "possession"
//     }
//   ];

//   const categories = [
//     { key: "all", label: "All Questions" },
//     { key: "properties", label: "Properties" },
//     { key: "timeline", label: "Timeline" },
//     { key: "financing", label: "Financing" },
//     { key: "amenities", label: "Amenities" },
//     { key: "legal", label: "Legal" },
//     { key: "sustainability", label: "Sustainability" },
//     { key: "customization", label: "Customization" },
//     { key: "possession", label: "Possession" }
//   ];

//   const filteredFAQs = activeCategory === "all" 
//     ? faqData 
//     : faqData.filter(faq => faq.category === activeCategory);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
//             <HelpCircle className="w-8 h-8 text-blue-600" />
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Frequently Asked{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
//               Questions
//             </span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Find answers to common questions about our projects, services, and processes. 
//             Can not find what you are looking for? Feel free to contact us directly.
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-4 sm:space-y-6"
//             >
//               {filteredFAQs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
//                     activeIndex === index ? "shadow-lg shadow-blue-600/10 border-blue-200" : "hover:shadow-md"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
//                   >
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4 leading-relaxed">
//                         {faq.question}
//                       </h3>
//                       <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
//                         activeIndex === index 
//                           ? "bg-blue-600 text-white rotate-180" 
//                           : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
//                       }`}>
//                         <ChevronDown className="w-5 h-5" />
//                       </div>
//                     </div>
//                   </button>
                  
//                   <AnimatePresence>
//                     {activeIndex === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 sm:px-8 pb-6 sm:pb-8">
//                           <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
//                           <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQ;


import React from 'react'

const FAQ = () => {
  return (
    <div>FAQ</div>
  )
}

export default FAQ