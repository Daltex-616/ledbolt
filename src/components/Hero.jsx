import React from 'react';
export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1f2c] to-[#2d1b4e] text-white py-20 mt-16">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0fb952d6-d37c-4d55-83f8-fa3912f850bc.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mejores servicios
            <span className="block text-[#8b5cf6]">de todo retail</span>
          </h1>
        </div>
      </div>
    </section>
  );
};