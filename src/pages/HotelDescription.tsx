import  { useState } from 'react';
import { useParams } from 'react-router-dom';
// import {  BookingFormData } from '../types';
// import { useNavigate } from 'react-router-dom';
import { 
  // Calendar, 
  // Users, 
  // Building2, 
  MapPin, 
  // Wifi, 
  // Car, 
  // Tv, 
  // Coffee, 
  // UtensilsCrossed, 
  // Bath, 
  // Wind, 
  Star,
  // BedDouble,
  // Home,
  // Users2
} from 'lucide-react';

import {hotels} from '../lib/hotelContent'

// Dummy hotel data (Replace this with an API call if needed)
// const hotels: Hotel[] = [
//   { id: 1, name: "Grand Hotel", location: "New York", rating: 4.5, images: ["/hotel1.jpg"], price: 500, amenities: ["High-speed WiFi", "Free Parking", "Smart TV"], description: "A luxurious hotel in the heart of New York." },
//   { id: 2, name: "Beach Resort", location: "Miami", rating: 4.2, images: ["/hotel2.jpg"], price: 300, amenities: ["Coffee Maker", "Bathtub", "Air Conditioning"], description: "Relax and enjoy the beachside view." },
// ];

// const amenityIcons: Record<string, any> = {
//   'Free High-speed WiFi': Wifi,
//   'Free Private Parking': Car,
//   'Flat-screen TV for Entertainment': Tv,
//   'Coffee Maker': Coffee,
//   'Kitchen': UtensilsCrossed,
//   'Bathtub': Bath,
//   'Air Conditioning for a Comfortable Stay': Wind,
// };

export default function HotelDetail() {
  const { hotelId } = useParams();  // Get hotel ID from URL
  // const navigate = useNavigate();   // For back button navigation
  const hotel = hotels.find(h => h.id === hotelId);
  // const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  // const [bookingData, setBookingData] = useState<BookingFormData>({
  //   checkIn: '',
  //   checkOut: '',
  //   guests: 1,
  //   rooms: 1
  // });

  if (!hotel) return <p className="text-center text-red-600 text-xl mt-10">Hotel not found.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hotel?.bookingEngine) {
      window.location.href = hotel.bookingEngine; // Redirect to external URL in the same tab
    } else {
      console.warn("Booking engine not available for this hotel.");
    }
    
    // console.log('Booking submitted:', bookingData);
  };

  // Google Maps Embed URL
  // const getMapUrl = () => {
  //   const location = encodeURIComponent(hotel.location);
  //   return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location}`;
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MapPin className="text-red-700 h-5 w-5" />
              <h1 className="text-xl font-semibold">{hotel.name}</h1>
            </div>
            <button
              onClick={onBack}
              className="text-red-700 hover:text-red-800 font-medium"
            >
              Back to Hotels
            </button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="relative h-[30vh] overflow-hidden" >
        <img 
          src={hotel.images[selectedImage]} 
          alt={hotel.name}
          className="w-full h-full object-cover"
          style={{ 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 1,
            filter: 'contrast(1.2) brightness(0.4)',
            backgroundColor: 'rgba(0,0,0,0.7)'
        }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">{hotel.name}</h1>
            <div className="flex items-center text-white gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1" />
                <span>{hotel.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-4 gap-4">
          {hotel.images.map((image, index) => (
            <a
              key={index}
              onClick={() => setSelectedImage(index)}
              className={` ${
                selectedImage === index ? 'rounded-lg ring-2 ring-red-700' : ''
              }`}
            >
              <img 
                src={image} 
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
      

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About the Listing</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {hotel.description}
              </p>
            </div>

            {/* Quick Info */}
            {/* <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-6 w-6 text-red-700" />
                  <div>
                    <div className="font-semibold">Bedrooms</div>
                    <div className="text-gray-600">2</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-6 w-6 text-red-700" />
                  <div>
                    <div className="font-semibold">Property Type</div>
                    <div className="text-gray-600">Apartment</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="h-6 w-6 text-red-700" />
                  <div>
                    <div className="font-semibold">Max Guests</div>
                    <div className="text-gray-600">4</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Amenities */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {hotel.amenities.map((amenity, index) => {
                  // const Icon = amenityIcons[amenity] || Wind;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      {/* <Icon className="h-5 w-5 text-red-700" /> */}
                      <svg className="w-3.5 h-3.5 me-2 text-red-700 dark:text-red-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9 h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src={hotel.locationUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-red-700">₹{hotel.price}</span>
                    <span className="text-gray-600"> onwards /night</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center font-semibold text-red-700">
                      <Star className="h-4 w-4 mr-1" />
                      {hotel.rating}/5
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Dates */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                          min={bookingData.checkIn}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* Guests */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none bg-white"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  {/* Rooms */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        value={bookingData.rooms}
                        onChange={(e) => setBookingData({ ...bookingData, rooms: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none bg-white"
                      >
                        {[1, 2, 3].map(num => (
                          <option key={num} value={num}>{num} Room{num !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  {/* Price Breakdown */}
                  {/* <div className="border-t border-b border-gray-200 py-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>₹{hotel.price} x 1 night</span>
                      <span>₹{hotel.price}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service fee</span>
                      <span>₹{Math.round(hotel.price * 0.1)}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2">
                      <span>Total</span>
                      <span>₹{hotel.price + Math.round(hotel.price * 0.1)}</span>
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
