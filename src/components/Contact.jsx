import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

return (
  <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* LEFT SIDE - Contact Info Card */}
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out for collaborations, freelance work, or just a friendly hello!
        </p>

        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <span className="font-semibold">📧 Email:</span>
            <a href="mailto:shekharsingh7900@gmail.com" className="text-indigo-700 hover:underline">
              shekharsingh7900@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">📱 Phone:</span>
            <a href="tel:+919876543210" className="text-indigo-700 hover:underline">
              +91 75007-98556
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">💼 LinkedIn:</span>
            <a href="https://linkedin.com/in/shekhaar" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">
              linkedin.com/in/shekhaar
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">🐙 GitHub:</span>
            <a href="https://github.com/shekhar-sainii" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">
              github.com/shekhar-sainii
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Contact Form */}
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-2.5 rounded-md hover:bg-[#a86b32] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

}
