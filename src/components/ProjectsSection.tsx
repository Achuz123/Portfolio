import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link 
}: { 
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors flex items-center justify-center"
            aria-label={`View ${title} source code`}
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          View Project
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Here are some of my recent projects that showcase my skills and interests.
            Each project demonstrates different aspects of my technical abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.title}
              {...project}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Achuz123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Github size={20} className="mr-2" />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;