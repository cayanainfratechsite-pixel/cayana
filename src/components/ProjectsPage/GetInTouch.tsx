// components/GetInTouch.tsx
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Underline from '../Underline';

const GetInTouch: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the Privacy Policy');
      return;
    }
    // Process form submission (e.g., send data to an API)
    console.log({ name, mobile, email });
    // Clear form fields after submission
    setName('');
    setMobile('');
    setEmail('');
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
          Get In Touch
        </h1>       
        <Underline  />  
         <p className="text-center text-gray-600 mb-6">
            We'd love to hear from you! Please fill out the form below and our team will reach out shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Landscape layout: fields arranged horizontally on medium+ screens */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="name" className="block px-3 text-zinc-900 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
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
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
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
                  className="w-full px-3 py-2 border-b-2 text-zinc-900 border-zinc-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
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
                I agree to the{' '} Our team is dedicated to providing you with the best service. Your inquiry is important to us, and we will respond as soon as possible.
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
          {/* Additional subcontent */}
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
