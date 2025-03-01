"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { submitProjectEnquiry } from "@/api/projects/page"; // Adjust the path as needed

const StickyEnquiry: React.FC = () => {
  // State to control modal visibility
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  // Form field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  // Form submission handler that uses the API service
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    

    const data = {
      category: "project", // Fixed category
      projectId: "67b43790df2773c9320ccf1e", // Hard-coded project ID
      firstName,
      lastName,
      email,
      mobile,
      date,
      time: selectedTime,
    };

    try {
      const response = await submitProjectEnquiry(data);
      console.log("Response:", response?.data);
      alert("Your enquiry has been submitted successfully!");

      // Clear form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setDate("");
      setSelectedTime("10:00 AM");

      // Optionally close the modal after submission
      setIsFormOpen(false);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("There was an error submitting your enquiry. Please try again later.");
    }
  };

  return (
    <>
      {/* Sticky ENQUIRY Button */}
      <motion.button
        className="fixed -right-20 top-1/2 flex items-center justify-center bg-white border border-[#27262e] rounded-t-[20px] rounded-b-none cursor-pointer h-[40px] lg:h-[50px] w-[180px] lg:w-[200px] -translate-y-1/2 -rotate-90 transition-all duration-800 ease-[cubic-bezier(.45,.05,.55,.95)] z-50"
        onClick={() => setIsFormOpen(true)}
      >
        <span className="text-sm lg:text-lg font-medium text-zinc-950">ENQUIRY</span>
      </motion.button>

      {/* Enquiry Form Modal */}
      {isFormOpen && (
        <motion.div
          className="fixed right-0 bg-zinc-50 p-6 shadow-xl w-[420px] h-[67vh] z-50 rounded-sm overflow-y-auto"
          style={{ top: "calc((100% - 18rem) - 50vh)" }}
          initial={{ opacity: 0, x: 3000, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsFormOpen(false)}
          >
            &#10005;
          </button>
          <h2 className="text-xl font-medium uppercase text-center mb-4 text-zinc-950">
            Enquiry Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First and Last Name */}
            <div className="grid grid-cols-2 gap-4 my-2">
              <div className="relative z-0 w-full group mt-3">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder=" "
                  required
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full group mt-3">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder=" "
                  required
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email ID
              </label>
            </div>

            {/* Mobile */}
            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder=" "
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
              />
              <label
                htmlFor="mobile"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile No
              </label>
            </div>

            {/* Date */}
            <div className="relative z-0 w-full group">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder=" "
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
              />
              <label
                htmlFor="date"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>

            {/* Select Time */}
            <div className="relative z-0 w-full group">
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
              >
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
              <label
                htmlFor="time"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select Time
              </label>
            </div>

            

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default StickyEnquiry;
