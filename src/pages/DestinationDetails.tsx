
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-6 capitalize bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {id?.replace(/-/g, ' ')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>About this Destination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Experience the beauty and charm of {id?.replace(/-/g, ' ')}. This stunning destination 
                  offers a perfect blend of culture, adventure, and relaxation. Whether you're seeking 
                  thrilling activities or peaceful moments, you'll find it all here.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Highlights</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Beautiful scenic locations</li>
                    <li>Rich cultural heritage</li>
                    <li>Local cuisine experiences</li>
                    <li>Adventure activities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Card */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Plan Your Trip</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Starting from</p>
                <p className="text-3xl font-bold text-blue-600">$299</p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
              <Button className="w-full gap-2">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full gap-2">
                Download Guide
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-gray-600">March to October</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-gray-600">5-7 days recommended</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-50 to-white">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-gray-600">English, Local Language</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
