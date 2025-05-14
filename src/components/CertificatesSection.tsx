import { CERTIFICATES } from "../constants";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
