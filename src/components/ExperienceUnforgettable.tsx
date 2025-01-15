import React from 'react';
import image from '../../public/assets/adventureImage.png';

const ExperienceUnforgettable: React.FC = () => {
  return (
    <div className="w-full text-center font-serif text-red-700 mt-10">
      <div className="py-8 relative">
        <h1 className="text-2xl font-bold tracking-wide">Experience Unforgettable</h1>
      </div>
      <div className="relative flex justify-center items-center">
        <img 
          src={image} 
          alt="Adventure" 
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute top-[60%] transform -translate-y-1/2 w-full text-center">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wider">ADVENTURES</h2>
          <button 
            className="mt-12 px-16 py-3 shadow-md bg-red-800 text-white rounded-lg text-lg hover:bg-red-900 transition ease-in-out duration-300"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceUnforgettable;
