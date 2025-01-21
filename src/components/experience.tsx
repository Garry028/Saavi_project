import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import image from '../../public/assets/adventureImage.png';

export default function ExperienceUnforgettable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full text-center font-serif text-red-700 mt-10">
      <div className="py-8 relative">
        <motion.h1 
          className="text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience Unforgettable
        </motion.h1>
      </div>
      <div className="relative flex justify-center items-center">
        <motion.img
          src={image}
          alt="Adventure"
          className="w-full h-[45vh] object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute top-[60%] transform -translate-y-1/2 w-full text-center">
          <motion.h2
            className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ADVENTURES
          </motion.h2>
          <motion.button
            className="mt-12 px-16 py-3 shadow-md bg-red-800 text-white rounded-lg text-lg hover:bg-red-900 transition ease-in-out duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Explore
          </motion.button>
        </div>
      </div>
    </div>
  );
};