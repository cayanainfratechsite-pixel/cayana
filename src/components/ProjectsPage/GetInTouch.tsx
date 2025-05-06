// components/GetInTouch.tsx
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Underline from '../Underline';
import { submitProjectEnquiry } from '@/api/projects/page'; 

interface GetInTouchProps {
  projectId: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ projectId }) => {
  // State variables for the form fields.
  // These will hold the values entered by the user.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  // State variable for the selected time.
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      category: "project", 
      projectId, 
      firstName,
      lastName,
      email,
      mobile,
      date,
      time: selectedTime, 
    };

    try {
      const response = await submitProjectEnquiry(data);
      if (response && response.data) {
        console.log("Response:", response.data);
      }
      alert("Your enquiry has been submitted successfully!");

      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setDate('');
      setSelectedTime('10:00 AM');
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("There was an error submitting your enquiry. Please try again later.");
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white p-8 rounded-sm shadow-lg"
        >
          <h1 className="text-lg text-center sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
            Enquiry Form
          </h1>
          <Underline />
          <p className="text-center text-gray-600 mb-6">
            We'd love to hear from you! Please fill out the form below and our team will reach out shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First Name, Last Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="firstName" className="block px-3 text-zinc-900 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block px-3 text-zinc-900 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block px-3 text-zinc-900 mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Mobile, Date, Selected Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="mobile" className="block px-3 text-zinc-900 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="date" className="block px-3 text-zinc-900 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="selectedTime" className="block px-3 text-zinc-900 mb-1">
                  Selected Time
                </label>
                <select
                  id="selectedTime"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
