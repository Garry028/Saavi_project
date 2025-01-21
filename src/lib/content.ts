import { images } from "../../public/assets/export";
import foodImage from "../../public/assets/food.jpeg";
// import roomImage from "../../public/assets/roomImage.png";
import bonfireImage from "../../public/assets/bonfire.png";
// import guestAccessImage from "../../public/assets/guestAccess.png";
import adventureImage from "../../public/assets/advanterus.jpeg";
// import BanqAndEvents from "@/pages/banqAndEvents";
import bnq1 from "../../public/assets/bnq1.jpeg";
import bnq2 from "../../public/assets/bnq2.jpeg";
import bnq3 from "../../public/assets/bnq3.jpeg";
import bnq4 from "../../public/assets/bnq4.jpeg";
import bnq5 from "../../public/assets/bnq5.jpeg";
import bnq6 from "../../public/assets/bnq6.jpeg";


export const content = {
  company: {
    name: "Saavi",
    description: "Experience luxury and comfort at our world-class hotels and resorts.",
    contact: {
      address: "545,Sector 43,Golf course Road,",
      city: "Gurugram, Haryana 122003",
      phone: "9999575044, 7290006773",
      email: "sales@saavigroups.com"
    }
  },
  hotels: [
    {
      id: 1,
      name: "Saavi Hotel Golf course",
      location: "Gurugram, Haryana, India",
      image: images.Image_1,
      description: "Experience the tranquility of Shimla's lush valleys and unmatched hospitality.",
      amenities: ["Scenic Views", "Bonfire", "Indoor Dining", "Luxury Suites"]
    },
    {
      id: 2,
      name: "Saavi Hotel Sector 46",
      location: "Gurugram, Haryana, India",
      image: images.Image_2,
      description: "A contemporary hotel offering luxury in the heart of Gurugram.",
      amenities: ["Canal Views", "Bike Rentals", "Art Gallery", "Bonfire"]
    },
    {
      id: 3,
      name: "Saavi Hotel Sector 45",
      location: "Gurugram, Haryana, India",
      image: images.Image_3,
      description: "A golfer's paradise with premium facilities and lush green landscapes.",
      amenities: ["Golf Course", "Fine Dining", "Luxury Suites", "Infinity Pool"]
    },
    {
      id: 4,
      name: "Saavi Hotel Sector 10",
      location: "Gurugram, Haryana, India",
      image: images.Image_4,
      description: "Conveniently located near Huda City Center, ideal for business and leisure stays.",
      amenities: ["Conference Rooms", "Fitness Center", "24/7 Room Service", "Bonfire"]
    },
    {
      id: 5,
      name: "Hassan Valley By Saavi",
      location: "Shimla, Himachal Pradesh, India",
      image: images.Image_5,
      description: "Reconnect with nature at our eco-friendly retreat in the Himalayas.",
      amenities: ["Eco-Cottages", "Trekking Assistance", "Bonfire Nights", "Organic Meals"]
    },
    {
      id: 6,
      name: "Saavi Hotel and Resorts",
      location: "Rishikesh,Uttrakhand, India",
      image: images.Image_6,
      description: "Located in the heart of Gurgaon's medical hub, ideal for wellness stays.",
      amenities: ["Wellness Center", "Luxury Rooms", "Multi-Cuisine Dining", "Bonfire"]
    },
    {
      id: 7,
      name: "Saavi Hotel Jibhi",
      location: "Manali,Himachal Pradesh, India",
      image: images.Image_7,
      description: "A contemporary hotel offering luxury in the heart of Chandigarh.",
      amenities: ["Banquet Halls", "Bonfire", "Outdoor Pool", "Kids' Play Area"]
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
      title: "Relax",
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
  ],
  banqAndEvents: {

    description1: "Our Banquet hall has a video conferencing facility at Saavi hotels, Gurgram. It has a lavish decor and provides a traditional touch with an opulent environment that is ideal for hosting any form of event.",
    description2: "Host events like receptions, parties, or even business meetings in this elegant hall that comes well-equipped with a projector , A/C, Wi-Fi, and audiovisual system.",
    description3: "Book your stay at one of the best Gurugram hotel near Golf course road during your grand event at our state of the art event venue.",
    images: [
      {
        url: bnq1,
        title: "Luxury Suite"
      },
      {
        url: bnq2,
        title: "Swimming Pool"
      },
      {
        url: bnq3,
        title: "Hotel Exterior"
      },
      {
        url: bnq4,
        title: "Restaurant"
      },
      {
        url: bnq5,
        title: "Spa"
      },
      {
        url: bnq6,
        title: "Hotel Room"
      },
    ]
  },
  team: [
    {
      name: 'Deepak Dangi',
      role: 'Founder & CEO',
      description: 'Mr. Deepak Dangi completed his education in IT (B.Sc IT) and Post Graduation in Management (MBA). With 12 years of industry experience, he founded Saavi Events and Entertainment in 2019, which now operates over five hotels in India.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Vijay B. Aggarwal',
      role: 'Managing Director',
      description: 'Dr. Vijay B. Aggarwal is a pioneer in computer science education in India, with a Ph.D. from the University of Illinois and over 40 years of experience. He has been leading IT education programs and managing large teams.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Manasvi Dutta',
      role: 'Co-Founder',
      description: 'With 10 years of experience in event management and a strong academic background, Manasvi Dutta is a proven leader with expertise in art, decor, and comprehensive training for high standards in service delivery.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Deepak Redhu',
      role: 'Account Head',
      description: 'With a decade of experience in finance, Mr. Redhu ensures cash flow management and oversees fundraising plans. He has previously worked with IndusInd Bank and L&T Finance.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Saurav Singh',
      role: 'Sales Head',
      description: 'A hotel management graduate with 20+ years of experience, Saurav Singh specializes in budgeting, marketing, and leadership, driving revenue growth for Saavi Hotels.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Shipra Singh',
      role: 'Operations Manager',
      description: 'With over 10 years of experience, Shipra Singh ensures top-tier hospitality and operational excellence, grooming talent and delivering outstanding results for Saavi Hotels.',
      imageSrc: 'https://via.placeholder.com/150',
    },
  ],
};
