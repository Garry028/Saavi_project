// import React from "react";
import Card1 from "../../public/assets/whyChooseSaaviCard1.png";
import Card2 from "../../public/assets/whyChooseSaaviCard2.png";
import Card3 from "../../public/assets/whyChooseSaaviCard3.png";
import background_Image from "../../public/assets/whyChooseSaaviBackground.png";

function WhyChooseSaavi() {
  const features = [
    {
      title: "Personalized Service",
      description:
        "Our dedicated staff is committed to providing personalized service, ensuring your stay is comfortable and enjoyable.",
      imgSrc: Card1,
    },
    {
      title: "Pristine Cleanliness",
      description:
        "We prioritize cleanliness and hygiene, maintaining the highest standards of sanitation.",
      imgSrc: Card2,
    },
    {
      title: "Luxurious Comfort",
      description:
        "Relax in our luxurious rooms, designed for ultimate comfort and relaxation.",
      imgSrc: Card3,
    },
  ];

  return (
    <div className="relative text-center text-black mt-6">
      {/* Header Section */}
      <header>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
          Why Choose Saavi?
        </h1>
        <p className="text-base sm:text-lg font-serif text-red-700">
          Luxurious accommodations, world-class service, and prime locations.
        </p>
      </header>

      {/* Features Section */}
      <div className="relative pb-12 z-10">
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 px-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg shadow-[0px_-10px_0px_rgba(157,13,13,1)] w-full sm:w-1/3 lg:w-1/4 p-5 text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg mt-4"
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-red-700 text-lg font-semibold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Background Image */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 bg-center bg-cover -z-10"
          style={{ backgroundImage: `url(${background_Image})` }}
        ></div>
      </div>
    </div>
  );
}

export default WhyChooseSaavi;
