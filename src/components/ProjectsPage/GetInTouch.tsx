// components/GetInTouch.tsx
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Underline from '../Underline';

const GetInTouch: React.FC = () => {
  // Helper to determine the default time slot based on current hour
  const getDefaultTimeSlot = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 10) return '10 AM';
    if (hour < 12) return '10 AM';
    if (hour < 14) return '12 PM';
    if (hour < 17) return '2 PM';
    return '5 PM';
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(getDefaultTimeSlot());
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the Privacy Policy');
      return;
    }
    // Process form submission (e.g., send data to an API)
    console.log({ firstName, lastName, email, mobile, date, selectedDate });
    // Clear form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setDate('');
    setSelectedDate(getDefaultTimeSlot());
    setAgreed(false);
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
            {/* Row 1: First Name, Last Name, Email ID */}
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

            {/* Row 2: Mobile Number, Date, Selected Date */}
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
                <label htmlFor="selectedDate" className="block px-3 text-zinc-900 mb-1">
                  Selected Date
                </label>
                <select
                  id="selectedDate"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="10 AM">10.00 AM</option>
                  <option value="12 PM">12.00 PM</option>
                  <option value="2 PM">02.00 PM</option>
                  <option value="5 PM">05.00 PM</option>
                </select>
              </div>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center">
              <input 
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-gray-700">
                I agree to the{' '}
                Our team is dedicated to providing you with the best service. Your inquiry is important to us, and we will respond as soon as possible.
                <a href="/privacy-policy" className="underline text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </label>
            </div>

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
