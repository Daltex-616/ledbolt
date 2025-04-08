import React from 'react';
import { Star } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex K.",
      role: "falopero",
      content: "Rapidos y confiables, me ayudaron a conseguir lo que queria",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Streamer",
      content: "precio calidad, lo mejor que hay!!",
      rating: 5
    },
    {
      name: "John D.",
      role: "Casual Player",
      content: "lo mejor que me paso en la vida",
      rating: 4
    }
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1a1f2c] border border-gray-800 hover:border-[#8b5cf6] transition-all duration-300 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex flex-col">
                <span className="font-semibold text-white">{testimonial.name}</span>
                <span className="text-sm text-gray-400">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};