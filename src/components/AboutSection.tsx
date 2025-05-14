import { Briefcase, GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Who I Am</h3>
            </div>
            <p className="text-gray-600">
              I'm a dedicated software developer with a passion for
              cybersecurity and machine learning. I enjoy solving complex
              problems and creating innovative solutions that make a positive
              impact. My approach combines technical excellence with a focus on
              user experience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <div className="font-medium">B.Tech in Computer Science</div>
                <div>Vellore Institute of Technology, Bhopal</div>
                <div className="text-sm text-gray-500">2021 - 2025</div>
              </li>
              <li>
                <div className="font-medium">Higher Secondary Education</div>
                <div>L'ecole Chempaka</div>
                <div className="text-sm text-gray-500">2020 - 2022</div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Experience
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <div className="font-medium">Software Development Intern</div>
                <div>BLUESTOCKS</div>
                <div className="text-sm text-gray-500">May 2025</div>
                <div className="mt-1">
                  Working on developing a production-level IPO Web Application
                  and REST API using React.js, Tailwind CSS, Django REST
                  Framework, and PostgreSQL. Responsible for implementing IPO
                  listing features, API endpoints, and integrating document
                  downloads (RHP/DRHP).
                </div>
              </li>
              <li>
                <div className="font-medium">HR</div>
                <div>Factsome Tv</div>
                <div className="text-sm text-gray-500">
                  November 2022 - May 2023
                </div>
                <div className="mt-1">
                  Handled technical recruitment, managed intern onboarding, and
                  coordinated with development teams to align hiring with the
                  project needs.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
