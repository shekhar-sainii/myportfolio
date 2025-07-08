import React from "react";
import About from "./About";
import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      title: "Portfolio",
      desc: "Responsive personal portfolio with React and Tailwind CSS.",
      image: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/083ae9bb-f0ba-4c9b-9ce4-963eaf1be678_rwc_58x194x1499x1174x640.jpg?h=a3bedca3f9a9eca583e14abbcd942c98",
    },
    {
      title: "RBI Info Site",
      desc: "API + XML parsing app that fetches RBI tenders and data.",
      image: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/ead99073-eb3f-4a9d-a7ee-08b219b60660_carw_202x158x640.jpg?h=49fb71d9bdf9f366c6d893e936c38312",
    },
    {
      title: "Quiz App",
      desc: "Multiple-choice quiz with scoring and category filtering.",
      image: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/7bf18416-34cc-4738-be38-515395f42512_carw_202x158x640.jpg?h=db2558216bf5fea182fbb6fd9789b1e0",
    },
    {
      title: "Weather App",
      desc: "Live weather forecast using OpenWeatherMap API.",
      image: "https://pro2-bar-s3-cdn-cf5.myportfolio.com/598e7543d77ac2401458bb2a07e7c8b8/6ac3326f-9307-4753-8e0d-8b770e310b9a_carw_202x158x640.jpg?h=7ffc7de11489a000671ce6819f78ab1f",
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
      <section id="contact" className="py-16 px-4 bg-gray-50">
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
