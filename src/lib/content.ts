import { images } from "../../public/assets/export";
import foodImage from "../../public/assets/food.png";
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
      id: "golf-course-luxury",
      name: "Saavi Hotel Golf course",
      location: "Gurugram, Haryana, India",
      image: images.Image_1,
      description: "Combines luxury accommodations with a serene, well-maintained golf experience.",
      amenities: ["Scenic Views", "Bonfire", "Indoor Dining", "Luxury Suites"]
    },
    {
      id: 2,
      name: "Saavi Hotel Sector 46",
      location: "Gurugram, Haryana, India",
      image: images.F46,
      description: " Offers comfortable accommodations with modern amenities in a convenient and vibrant location.",
      amenities: ["Canal Views", "Bike Rentals", "Art Gallery", "Bonfire"]
    },
    {
      id: 3,
      name: "SAAVI HOTEL MEDICITY",
      location: "1527 Sector Road, 122018 Gurgaon,India",
      image: images.F45,
      description: "Provides cozy accommodations with modern facilities, ensuring a convenient and pleasant stay.",
      amenities: ["Golf Course", "Fine Dining", "Luxury Suites", "Infinity Pool"]
    },
    {
      id: 4,
      name: "Saavi Hotel Sector 10",
      location: "Gurugram, Haryana, India",
      image: images.F10,
      description: "Offers comfortable and well-equipped accommodations for a relaxing and convenient stay.",
      amenities: ["Conference Rooms", "Fitness Center", "24/7 Room Service", "Bonfire"]
    },
    {
      id: 'shimla-mountain-resort',
      name: "Hassan Valley By Saavi",
      location: "Shimla, Himachal Pradesh, India",
      image: images.Image_5,
      description: "A serene getaway nestled amidst picturesque landscapes, offering modern amenities and a tranquil escape in the heart of nature.",
      amenities: ["Eco-Cottages", "Trekking Assistance", "Bonfire Nights", "Organic Meals"]
    },
    {
      id: 6,
      name: "The SandalWood By Saavi Hotel",
      location: "Plot no 644, Islampur Colony,Sector 38,Gurugram, Haryana 122003",
      image: images.Image_6,
      description: " Offers a serene retreat with modern amenities, surrounded by the tranquil beauty of the Himalayan foothills and the Ganges River.",
      amenities: ["Wellness Center", "Luxury Rooms", "Multi-Cuisine Dining", "Bonfire"]
    },
    {
      id: 7,
      name: "Saavi Hotel Jibhi",
      location: "Jibhi,Himachal Pradesh, India",
      image: images.Fjb,
      description: "A charming retreat offering cozy accommodations, modern amenities, and stunning views of the lush Himalayan landscape.",
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
      description: "Gather around a warm bonfire under the open sky, creating unforgettable moments with loved ones.",
      image: bonfireImage // Replace with the relevant image from your assets
    },
    {
      title: "Guest Access",
      description: "Enjoy seamless access to all facilities, ensuring a memorable and hassle-free stay.",
      image: images.Image_7 // Replace with the relevant image from your assets
    },
    {
      title: "Relax",
      description: "Escape the hustle and find your peace in a serene and rejuvenating ambiance.",
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
  terms_and_conditions: [
    {
      title: 'Terms and Conditions',
      content: `Terms and Conditions for Saavi Hotel

Welcome to Saavi Hotel. By accessing or using our services, including making reservations, checking in, and utilizing hotel facilities, you agree to comply with the following terms and conditions. Please read them carefully.

Reservation Policy

Reservations can be made via our official website, phone, or authorized third-party platforms.
A valid credit card is required to secure a booking.
Cancellation policies vary depending on the booking type. Guests are advised to refer to their specific reservation details for cancellation timelines and fees.
No-shows and late cancellations may result in a penalty charge, including but not limited to the cost of the first night’s stay.
Check-in/Check-out Policy

Check-in time begins at 2:00 PM. Early check-in is subject to availability and may incur additional charges.
Check-out time is by 12:00 PM. Late check-outs may be subject to additional fees if they exceed one hour beyond the stated check-out time.
Payment Terms

Payment for the stay is due at the time of check-in or as specified in the reservation agreement.
Accepted payment methods include credit/debit cards and cash (subject to hotel discretion).
All applicable taxes and service charges will be added to the final bill and may vary based on local regulations.
Guest Responsibilities

Guests are required to maintain appropriate conduct while on hotel property, adhering to all hotel policies, rules, and regulations.
Saavi Hotel reserves the right to refuse service to any guest displaying disruptive or illegal behavior, including but not limited to intoxication, noise disturbances, or property damage.
Privacy and Data Protection

Personal information collected during the reservation process or during the stay will be stored and processed in accordance with applicable privacy laws and Saavi Hotel’s privacy policy.
The hotel will not disclose any personal data without the consent of the guest, unless required by law or in relation to the provision of services.
Liability

Saavi Hotel is not liable for any loss, damage, or injury to guests or their property, except in cases of negligence on the part of the hotel.
The hotel does not assume responsibility for personal items left in guest rooms or common areas. Guests are encouraged to use in-room safes or lockers for valuable items.
Hotel Amenities and Services

Access to certain hotel amenities such as the pool, gym, and restaurant may be subject to additional charges and availability.
The hotel reserves the right to alter or suspend certain services or amenities due to maintenance, local regulations, or unforeseen circumstances.
Force Majeure

Saavi Hotel shall not be held responsible for failure or delay in the performance of any obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, or governmental restrictions.
Amendments to Terms and Conditions

Saavi Hotel reserves the right to update or modify these terms and conditions at any time. All updates will be published on our website and will apply to any bookings or services made thereafter.
By proceeding with a reservation or stay, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or require further clarification, please contact our guest services team.`
    }
  ],
};
