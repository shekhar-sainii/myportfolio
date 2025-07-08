import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Profile() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-100 to-white py-10 px-4">
      <div className="mt-[80px] max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-indigo-600 mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Shekhar</h1>
        <p className="text-indigo-600 font-medium text-sm sm:text-base">
          Frontend Developer
        </p>

        {/* Bio */}
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
          I build responsive, modern interfaces using React, Tailwind CSS, and clean design principles. Let’s create something amazing together.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-xl sm:text-2xl text-gray-600">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shekhar@example.com"
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 hover:text-white transition text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
