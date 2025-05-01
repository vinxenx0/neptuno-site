
import React, { ReactNode } from 'react';

interface FeaturesProps {
  children?: ReactNode;
}

const Features: React.FC<FeaturesProps> = ({ children }) => {
  return (
    <section id="features" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características de Neptuno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Funcionalidades avanzadas que impulsan tu producto y mejoran la experiencia de tus usuarios.
          </p>
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default Features;
