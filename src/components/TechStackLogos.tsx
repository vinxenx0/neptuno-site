
import React from 'react';

const TechStackLogos: React.FC = () => {
  const techLogos = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/fastapi/fastapi/docs/en/docs/img/favicon.png' }, 
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postgres', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'NextJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ];

  return (
    <div className="mt-8 w-full">
      <div className="text-center text-sm font-medium text-gray-400">Construido con tecnologías de nivel empresarial</div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70">
        {techLogos.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-center">
            <img src={tech.logo} alt={tech.name} className="h-8 w-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="mt-1 text-xs text-gray-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackLogos;
