import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2c]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">LedBolt</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10"
              />
            </div>
            <Button variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Button variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full"
              />
            </div>
            <Button variant="ghost" className="w-full justify-start">Home</Button>
            <Button variant="ghost" className="w-full justify-start">Products</Button>
            <Button variant="ghost" className="w-full justify-start">About</Button>
            <Button variant="ghost" className="w-full justify-start">Contact</Button>
          </div>
        )}
      </div>
    </nav>
  );
};