"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { submitProjectEnquiry } from "@/api/projects/page";
import CloseIcon from '@mui/icons-material/Close';

interface StickyEnquiryProps {
  projectId: string;
  onSuccess: () => void;
  onClose: () => void;
}

const EnquiryModal: React.FC<StickyEnquiryProps> = ({ projectId, onSuccess, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = { category: "project", projectId, firstName, lastName, email, mobile, date, time: selectedTime };

    try {
      const response = await submitProjectEnquiry(data);
      if (response?.status === 201) {
        alert("Your enquiry has been submitted successfully!");
        setFirstName(""); setLastName(""); setEmail(""); setMobile(""); setDate(""); setSelectedTime("10:00 AM");
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("There was an error submitting your enquiry. Please try again later.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-white p-6 shadow-xl w-[420px] z-50 rounded-md overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition"
          onClick={onClose}
        >
          <CloseIcon fontSize="medium"/>
        </button>

        {/* Title */}
        <h2 className="text-xl font-medium uppercase text-center mb-4 text-zinc-950 mt-4">
          Enquiry Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative z-0 w-full group">
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder=" " required 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" 
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First Name
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder=" " required 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" 
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last Name
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="relative z-0 w-full group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " required 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" 
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email ID
            </label>
          </div>

          {/* Mobile Number */}
          <div className="relative z-0 w-full group">
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder=" " required 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" 
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Mobile No
            </label>
          </div>

          {/* Date */}
          <div className="relative z-0 w-full group">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" 
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Date
            </label>
          </div>

          {/* Time Selection */}
          <div className="relative z-0 w-full group">
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer mb-4" 
            >
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EnquiryModal;
