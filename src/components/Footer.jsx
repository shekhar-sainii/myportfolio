import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    useEffect(() => {
     window.scrollTo(0,0)
    }, [])
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-8 mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Shekhar Saini</h2>
            <p className="text-sm text-gray-400 mt-2">Frontend Developer & Learner</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-medium">
                        <Link
            to={"/about"}
            className="hover:text-white transition"
            >
            About
            </Link>            <Link
            to={"/projects"}
            className="hover:text-white transition"
            >
            Projects
            </Link>
            <Link
            to={"/contact"}
            className="hover:text-white transition"
            >
            Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl text-gray-400 justify-center">
            <a
              href="https://github.com/shekhar-sainii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shekhaar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shekharsaini2030@example.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shekhar — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
