import React from 'react';
import { Mail, Github, Twitter, Facebook } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-[#1a1f2c] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Your trusted partner for in-game services and digital goods since 2010.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};