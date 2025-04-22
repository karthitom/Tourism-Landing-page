
import React from 'react';
import { User, Briefcase, Code, Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Unga Peram (Your Name)</h1>
          <p className="text-xl text-gray-600">Full Stack Developer | Tech Enthusiast</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4 bg-purple-50 p-4 rounded-lg">
            <User className="text-purple-600" />
            <div>
              <h3 className="font-semibold text-gray-800">About Me</h3>
              <p className="text-gray-600">Innovative developer who loves solving complex problems</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <Briefcase className="text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Experience</h3>
              <p className="text-gray-600">3+ years in web development</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg">
            <Code className="text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Skills</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-red-50 p-4 rounded-lg">
            <Mail className="text-red-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Contact</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
