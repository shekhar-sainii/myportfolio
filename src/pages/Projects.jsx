import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
    image: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/ced67751-275b-4945-9fdc-030b5e0cef45_rwc_1087x223x1124x880x640.jpg?h=6ef5b2317bada4606bc588f93e7d9da4",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API with modern UI and error handling.",
    tech: ["React", "Axios", "API"],
    github: "https://github.com/your-username/weather-app",
    demo: "https://weather-app.vercel.app",
    image: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/4eb56fdb-37f5-4d53-8114-e0fcd0ea0a22_rwc_581x127x555x434x640.jpg?h=b5c401f5177e16ee20e032f3381ffeaf",
  },
  {
    title: "Quiz App",
    description: "An interactive quiz application with score tracking and category filtering.",
    tech: ["React", "Context API", "CSS Modules"],
    github: "https://github.com/your-username/quiz-app",
    demo: "https://quiz-app.vercel.app",
    image: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/a531a371-325c-4fe6-8a32-7e2479759119_carw_202x158x640.jpg?h=acf0e0b3a33c84df690c57b5b366c2a7",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-[80px] max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-poppins">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4 text-indigo-600 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
