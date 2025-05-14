import { Mail, MapPin, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-wide">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the methods below.
          </p>
        </div>

        {/* Sections Container: Contact Info, Connect With Me, Resume */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Contact Information Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-300 pb-3 max-w-max">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:achuthampi19@gmail.com"
                    className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
                  >
                    achuthampi19@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800 font-medium">+91 8590118872</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800 font-medium">
                    Trivandrum, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 tracking-wide">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="h-14 w-14 bg-white shadow-md rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
                >
                  {link.name === "LinkedIn" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {link.name === "GitHub" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  )}
                  {link.name === "LeetCode" && (
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Resume Download Section */}
          <div className="flex-1 bg-gradient-to-r  from-blue-600 to-blue-700 text-white rounded-xl  p-8 flex flex-col hover:shadow-md justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                Looking for new opportunities
              </h3>
              <p className="mb-6 leading-relaxed">
                I&apos;m currently open to freelance projects, full-time
                positions, and collaborations. Let&apos;s discuss how we can
                work together.
              </p>
            </div>
            <a
              href="src/components/ACHUTH B.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:text-blue-800 transition-colors duration-300 self-start"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
