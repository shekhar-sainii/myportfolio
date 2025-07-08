import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Clothes Website",
    description: "A responsive personal portfolio built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
    image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
  },
  {
    title: "Weather Website",
    description: "A weather forecasting app using OpenWeatherMap API with modern UI and error handling.",
    tech: ["React", "Axios", "API"],
    github: "https://github.com/your-username/weather-app",
    demo: "https://weather-app.vercel.app",
    image: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
  },
  {
    title: "Quiz Website",
    description: "An interactive quiz application with score tracking and category filtering.",
    tech: ["React", "Context API", "CSS Modules"],
    github: "https://github.com/your-username/quiz-app",
    demo: "https://quiz-app.vercel.app",
    image: "https://elements-resized.envatousercontent.com/elements-cover-images/da213823-49b2-440f-9342-db096a16e259?w=433&cf_fit=scale-down&q=85&format=auto&s=fc9b302366d7bd1b7dd09d3a074438deb0744a157e4970b490e9bfde3d1995a3",
  },
    {
    title: "Tender Website",
    description: "An interactive quiz application with score tracking and category filtering.",
    tech: ["React", "Context API", "CSS Modules"],
    github: "https://github.com/your-username/quiz-app",
    demo: "https://quiz-app.vercel.app",
    image: "https://prospectdigital.co.in/wp-content/uploads/2018/11/mptenders.gov_.in_.png",
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
