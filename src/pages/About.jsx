import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mt-[80px] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I'm <span className="font-semibold text-indigo-600">Shekhar</span>, a passionate Frontend Developer with a love for clean UI, performance, and modern web technologies. I specialize in building fast, accessible, and responsive websites using tools like React, Tailwind CSS, and JavaScript.
          </p>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Whether it's creating intuitive user interfaces or collaborating on team projects, I’m always eager to learn, build, and improve. Outside of coding, I enjoy reading tech blogs and contributing to open-source.
          </p>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind CSS", "Git", "HTML", "CSS", "REST API"].map((skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Optional Button */}
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
