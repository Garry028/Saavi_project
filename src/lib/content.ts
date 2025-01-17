import { images } from "../../public/assets/export";
import foodImage from "../../public/assets/food.png";
// import roomImage from "../../public/assets/roomImage.png";
import bonfireImage from "../../public/assets/bonfire.png";
// import guestAccessImage from "../../public/assets/guestAccess.png";
import adventureImage from "../../public/assets/advanterus.png";



export const content = {
  company: {
    name: "Saavi",
    description: "Experience luxury and comfort at our world-class hotels and resorts.",
    contact: {
      address: "123 Luxury Avenue",
      city: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "info@luxstay.com"
    }
  },
  hotels: [
    {
      id: 1,
      name: "Hassan Valley Retreat Shimla",
      location: "Shimla, India",
      image: images.Image_1,
      description: "Experience the tranquility of Shimla's lush valleys and unmatched hospitality.",
      amenities: ["Scenic Views", "Spa", "Indoor Dining", "Luxury Suites"]
    },
    {
      id: 2,
      name: "Oester Pearl Saavi Hotel",
      location: "Gurugram, Haryana, India",
      image: images.Image_2,
      description: "A contemporary hotel offering luxury in the heart of Gurugram.",
      amenities: ["Canal Views", "Bike Rentals", "Art Gallery", "Luxury Spa"]
    },
    {
      id: 3,
      name: "Saavi Hotel Golf Club",
      location: "Bangalore, India",
      image: images.Image_3,
      description: "A golfer's paradise with premium facilities and lush green landscapes.",
      amenities: ["Golf Course", "Fine Dining", "Luxury Suites", "Infinity Pool"]
    },
    {
      id: 4,
      name: "Saavi Hotel Huda City Center",
      location: "Gurgaon, India",
      image: images.Image_4,
      description: "Conveniently located near Huda City Center, ideal for business and leisure stays.",
      amenities: ["Conference Rooms", "Fitness Center", "24/7 Room Service", "Spa"]
    },
    {
      id: 5,
      name: "Saavi Hotel Jibhi",
      location: "Jibhi, Himachal Pradesh, India",
      image: images.Image_5,
      description: "Reconnect with nature at our eco-friendly retreat in the Himalayas.",
      amenities: ["Eco-Cottages", "Trekking Assistance", "Bonfire Nights", "Organic Meals"]
    },
    {
      id: 6,
      name: "Saavi Hotel Medicity",
      location: "Gurgaon, India",
      image: images.Image_6,
      description: "Located in the heart of Gurgaon's medical hub, ideal for wellness stays.",
      amenities: ["Wellness Center", "Luxury Rooms", "Multi-Cuisine Dining", "Spa Services"]
    },
    {
      id: 7,
      name: "Saavi Hotel Sector 10",
      location: "Chandigarh, India",
      image: images.Image_7,
      description: "A contemporary hotel offering luxury in the heart of Chandigarh.",
      amenities: ["Banquet Halls", "Spa & Salon", "Outdoor Pool", "Kids' Play Area"]
    },
    {
      id: 8,
      name: "Saavi Hotel Sector 46",
      location: "Chandigarh, India",
      image: images.Image_8,
      description: "A luxurious haven located in Sector 46, Chandigarh.",
      amenities: ["Boutique Rooms", "Fine Dining", "Fitness Center", "24/7 Concierge"]
    },
    {
      id: 9,
      name: "Sandlewood Saavi Hotel",
      location: "Goa, India",
      image: images.Image_4,
      description: "An exquisite beachside property offering the best of Goan hospitality.",
      amenities: ["Beachfront", "Poolside Bar", "Live Entertainment", "Seafood Specialties"]
    }
  ],
  upcomingProjects: [
    {
      id: 1,
      name: "Saavi Hotel Gurgaon",
      location: "Gurgaon, Delhi",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      description: "A new level of luxury in the heart of Gurgaon.",
      openingDate: "2025"
    },
    {
      id: 2,
      name: "Saavi Hotel Goa",
      location: "Goa, India",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
      description: "Elegant suites with stunning views.",
      openingDate: "2025"
    }
  ],
  features: [
    {
      title: "5-Star Service",
      description: "Experience world-class hospitality with our dedicated staff."
    },
    {
      title: "Luxury Amenities",
      description: "Indulge in premium facilities and services at all our properties."
    },
    {
      title: "Prime Locations",
      description: "Discover our carefully selected destinations worldwide."
    }
  ],
  facilities: [
    {
      title: "Food",
      description: "Indulge in a variety of cuisines prepared with love and care for a memorable dining experience.",
      image: foodImage // Replace with the relevant image from your assets
    },
    {
      title: "Rooms",
      description: "Relax in our comfortable, well-furnished rooms designed to offer you a homely ambiance.",
      image: images.Image_14 // Replace with the relevant image from your assets
    },
    {
      title: "Bonfire",
      description: "We serve all food and drinks, ensuring freshness, cleanliness, and a delightful taste experience.",
      image: bonfireImage // Replace with the relevant image from your assets
    },
    {
      title: "Guest Access",
      description: "Enjoy seamless guest access with modern facilities and top-notch hospitality.",
      image: images.Image_7 // Replace with the relevant image from your assets
    },
    {
      title: "Adventure",
      description: "Experience thrilling adventures, including trekking, camping, and more.",
      image: adventureImage // Replace with the relevant image from your assets
    }
  ],
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Hotels', href: '/hotels' },
    { name: 'Book Now', href: '/booking' },
    { name: 'Banquet & Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ]
};
