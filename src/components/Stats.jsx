import React from 'react';
import { Trophy, Shield, Clock } from 'lucide-react';
export const Stats = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Trophy },
    { label: "Secure Trades", value: "100K+", icon: Shield },
    { label: "Response Time", value: "< 5min", icon: Clock }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1f2c] to-[#2d1b4e]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center p-6 bg-[#1a1f2c]/50 rounded-lg border border-gray-800 hover:border-[#8b5cf6] transition-all duration-300">
                <Icon className="w-12 h-12 text-[#8b5cf6] mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};