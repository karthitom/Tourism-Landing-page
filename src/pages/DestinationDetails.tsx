
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          Back to Home
        </Button>
        <h1 className="text-4xl font-bold mb-6 capitalize">{id?.replace(/-/g, ' ')}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Detailed information about this destination coming soon...
          </p>
          <Button className="gap-2">
            Book Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
