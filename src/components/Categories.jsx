import React from 'react';
import Button from './ui/Button';
export const Categories = () => {
  const categories = [
    "All Categories",
    "WoW Gold",
    "Classic Leveling 💕",
    "Hot offers",
    "TWW 11.1.0",
    "Sex with all class",
    "Raids",
    "Mythic+ Dungeons"
  ];
  return (
    <section className="py-8 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};