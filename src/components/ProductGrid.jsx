import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './ui/Button';
export const ProductGrid = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Game Package",
      description: "Fast response and delivery",
      price: 89.99,
      image: "https://imgs.search.brave.com/9mohU_QkcMkRHoGqjcfFFq_BtRh3iEf4cGav_P5iwCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vp/SGZLQ0pHUVlGQ0VZ/UDJJUEFiQlZlTlJk/MTZNSEVJTjJNUzIt/a0h6OWUzRnVGVzVk/Q1ROcmNDaVpoY0Nm/NFgzQlR0TUo1MnFy/eHU5TDVHOWxSU0FL/c3BrbEpKUk9pUm9r/WXhIX3FvZ1FfYWw5/eTFKLTlEck0tR1Mx/bTdJR1lrcFZZbjNJ/a1RPX0REMzNxQzBl/WkJZMmZZOGZqT011/b0lOakF1UUNjdG05/Y0Q2LTN0Qy1Jb0RC/VTdfenhvMHMvdzMy/MC1oMzIwL2dhbGx5/d2l4LmpwZw",
      rating: 4.5,
      tag: "Hot Offer!",
      features: [
        "Fast response and delivery",
        "Safe and reliable trades",
        "Any amount on any server"
      ]
    },
    {
      id: 2,
      name: "Mythic+ Bundle",
      description: "Complete achievements",
      price: 149.99,
      image: "https://cdn.altertime.es/9b4fb79b-d8bf-46a6-ae38-9441037d942e.png",
      rating: 4.8,
      tag: "Christmas Sale",
      features: [
        "Get 625-639 ilvl gear",
        "Complete FoS achievements",
        "Premium support included"
      ]
    },
    {
      id: 3,
      name: "Raid Package",
      description: "Full raid clear",
      price: 79.99,
      image: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/ka/KACBVIYAK0OJ1607030380736.jpg",
      rating: 4.2,
      tag: "Hot Offer!",
      features: [
        "Get 3rd run for FREE",
        "Raid with your friends",
        "Save your money"
      ]
    },
    {
      id: 4,
      name: "Special Bundle",
      description: "All-inclusive package",
      price: 199.99,
      image: "https://wow.zamimg.com/uploads/blog/images/43600-special-warcraft-story-for-shadow-priests-xalatath-notices-you.jpg",
      rating: 4.7,
      tag: "Hot Offer!",
      features: [
        "Bonus runs",
        "Varying key difficulty",
        "Comes with 3 free traders"
      ]
    }
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-[#1a1f2c] rounded-lg border border-gray-800 hover:border-[#8b5cf6] transition-all duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#8b5cf6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-sm">From</span>
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                  </div>
                  <Button className="w-full">View offer</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};