import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1469474968028-56623f02e42e")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Welcome to Travo</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Discover breathtaking destinations and create unforgettable memories</p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg gap-4 rounded-full bg-purple-600 hover:bg-purple-700"
          >
            Start Your Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                <Button 
                  variant="secondary"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => navigate(`/destination/${destination.name.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">Join thousands of travelers who choose Travo for their unforgettable journeys</p>
          <Button 
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg rounded-full bg-white text-purple-600 hover:bg-gray-100"
          >
            Plan Your Trip Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const destinations = [
  {
    name: "Mountain Paradise",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
  },
  {
    name: "Tropical Beach",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    name: "Historic City",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
  }
];

export default Index;
