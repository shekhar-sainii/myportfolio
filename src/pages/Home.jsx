import React from "react";
import About from "./About";
import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
     {
      title: "Weather App",
      desc: "Live weather forecast using OpenWeatherMap API.",
      image: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
    },
    {
      title: "Clothes Website",
      desc: "Responsive personal clothes web with React and Tailwind CSS.",
      image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
    },
    {
      title: "Tender Info Site",
      desc: "API + XML parsing app that fetches RBI tenders and data.",
      image: "https://prospectdigital.co.in/wp-content/uploads/2018/11/mptenders.gov_.in_.png",
    },
    {
      title: "Quiz App",
      desc: "Multiple-choice quiz with scoring and category filtering.",
      image: "https://elements-resized.envatousercontent.com/elements-cover-images/da213823-49b2-440f-9342-db096a16e259?w=433&cf_fit=scale-down&q=85&format=auto&s=fc9b302366d7bd1b7dd09d3a074438deb0744a157e4970b490e9bfde3d1995a3",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 ">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 text-black">
        {/* 👤 Profile Image */}
        <img
          src={"assets/img2.jpeg"} // 🔁 replace with your image URL
          alt="Shekhar's Profile"
          className="mt-[80px] w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shekhar Saini</h1>
        <p className="text-lg md:text-xl mb-6">
          Full Stack Web Developer | React & Node Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={"/projects"}
            className="bg-black text-white font-semibold px-6 py-3 rounded hover:bg-black-100 transition"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="bg-transparent border border-black text-black font-semibold px-6 py-3 rounded hover:bg-white hover:text-indigo-700 transition"
          >
            Resume Download
          </a>


        </div>
      </section>

      {/* About Section */}
      <section id="about" >
        {/* <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 text-lg">
          I'm a passionate frontend developer with experience building
          responsive and accessible web apps using React, TypeScript, and
          Tailwind CSS. I love turning ideas into delightful user experiences.
        </p> */}
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

          {/* Carousel Wrapper */}
          <div className="relative w-full overflow-x-auto">
            <div className="flex w-max animate-scroll whitespace-nowrap gap-6 px-2 sm:px-0">
              {Array(2)
                .fill(projects)
                .flat()
                .map((project, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 min-w-[250px] sm:min-w-[300px] max-w-xs p-4 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm break-words whitespace-normal">
                      {project.desc}
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a project or want to work together? Drop me a message!
          </p>
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Say Hello
          </Link>

        </div>
      </section>


    </div>
  );
}
