import { Button } from "@/components/ui/button";

import HotelCarousel from "@/components/HotelCarousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/lib/content";
import { images } from "../../public/assets/export";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import WhyChooseSaavi from "@/components/whychoosesaavi";
import PerfectGateway from "@/components/perfectgateway";
// import ExperienceUnforgettable from "@/components/experienceUnforgettable";
import Experience from "../components/experienceUnforgettable";
import Testimonial from "@/components/testimonial";
import SaaviCards from "@/components/saaviCards";


function Facilities({ }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center font-serif text-red-700 mb-12">
          Our Facilities
        </h2>

        {/* Flexbox layout for the rows */}
        <div className="flex flex-col items-center gap-8">

          {/* First Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {content.facilities.slice(0, 3).map((facility, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Facility Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay with Facility Content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-300 px-4">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {content.facilities.slice(3).map((facility, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Facility Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay with Facility Content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-300 px-4">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}


export default function Home() {
  const [currentImage, setCurrentImage] = useState(images.Image_1);
  const imageArray = [images.Image_1, images.Image_2, images.Image_6, images.Image_4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageArray.length;
        return imageArray[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={currentImage}
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 animate-fade-up animate-delay-200">
            Welcome to {content.company.name}
          </h1>
          <p className="text-xl sm:text-lg md:text-2xl mb-8 animate-fade-up animate-delay-300 ">
            {content.company.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-x-4 sm:space-y-0 bg-opacity-0 p-8 rounded-lg">
            {/* Where to go */}
            <div className="flex flex-col w-full sm:w-64">
              <label
                htmlFor="destination"
                className="text-sm font-semibold text-white mb-2"
              >
                Where to go
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Enter destination"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white bg-opacity-50 placeholder-gray-700"
              />
            </div>

            {/* Arrival Date */}
            <div className="flex flex-col w-full sm:w-64">
              <label
                htmlFor="arrival-date"
                className="text-sm font-semibold text-white mb-2"
              >
                Select Arrival Date
              </label>
              <input
                type="date"
                id="arrival-date"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white bg-opacity-50"
              />
            </div>

            {/* Departure Date */}
            <div className="flex flex-col w-full sm:w-64">
              <label
                htmlFor="departure-date"
                className="text-sm font-semibold text-white mb-2"
              >
                Select Departure Date
              </label>
              <input
                type="date"
                id="departure-date"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white bg-opacity-50"
              />
            </div>

            {/* Search Button */}
            <div className="flexflex-col sm:items-end w-full sm:w-auto mt-10 sm:mt-0">
              <button className="text-white transition-colors w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>

          <Link to="/booking">
            <Button size="lg" className="animate-fade-up animate-delay-400 transform hover:scale-105 mt-4 sm:mt-0">
              Book Your Stay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>





      {/* Featured Hotels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-red-700 font-bold text-center mb-12 animate-slide-in-top">
            Experience Saavi Hospitality
          </h2>
          <HotelCarousel />
        </div>
      </section>


      <WhyChooseSaavi />

      {/* Our Facilities */}
      <Facilities />


      <div >
        {/* <OurStory /> */}
        {/* Our Story Section */}
        <section
          ref={storyRef}
          className={`py-20 bg-gray-50 transition-opacity duration-1000 ${storyInView ? "opacity-100" : "opacity-0"} transform ${storyInView ? "translate-y-0" : "translate-y-10"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center text-left">
                <h2 className="text-3xl font-serif font-bold mb-4 animate-slide-in-left">
                  Our Story
                </h2>
                <h3 className="text-2xl font-serif font-semibold text-red-700 mb-6 animate-slide-in-left animate-delay-200">
                  A Legacy of Luxury
                </h3>
                <p className="text-lg text-gray-600 mb-4 animate-slide-in-left animate-delay-400">
                  SAAVI HOTELS, a name synonymous with luxury and comfort, has been redefining the hospitality industry since [Year]. With a rich legacy and a commitment to excellence, we have established ourselves as a leading hotel chain in India.
                </p>
                <p className="text-lg text-gray-600 mb-4 animate-slide-in-left animate-delay-500">
                  Our journey began with a vision to create world-class accommodations that cater to the diverse needs of our guests. Over the years, we have expanded our footprint across various locations, each hotel a testament to our dedication to quality and innovation.
                </p>
                <p className="text-lg text-gray-600 animate-slide-in-left animate-delay-600">
                  We pride ourselves on offering exceptional hospitality, from the moment you step into our lobby to the time you check out. Our experienced staff is committed to providing personalized service and ensuring your stay is truly memorable.
                </p>
              </div>
              <div className="flex items-center justify-center animate-scale-up animate-delay-700">
                <img
                  src={images.Image_3}
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <PerfectGateway />

        <div >
          <Experience />
        </div>
        {/* <Guest /> */}
      </div>
      <Testimonial />
      <SaaviCards />
      {/* Upcoming Projects */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in-bottom">
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.upcomingProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p>Coming Soon - {project.openingDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
