import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styling for the toasts

const BookingForm = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [destination, setDestination] = useState('');
  const [phone, setPhone] = useState('');
  const [persons, setPersons] = useState<number | ''>('');
  const [rooms, setRooms] = useState<number | ''>('');
  // const [errors, setErrors] = useState<Record<string, string>>({});

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};

    if (!destination) newErrors.destination = 'Destination is required.';
    if (!phone || !/^\d{10}$/.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!persons || persons <= 0) newErrors.persons = 'Enter a valid number of persons.';
    if (!rooms || rooms <= 0) newErrors.rooms = 'Enter a valid number of rooms.';
    if (!dateRange[0]) newErrors.startDate = 'Check-in date is required.';
    if (!dateRange[1]) newErrors.endDate = 'Check-out date is required.';
    if (dateRange[0] && dateRange[1] && dateRange[1] <= dateRange[0])
      newErrors.dateRange = 'Check-out date must be after check-in date.';

    // setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) =>
        toast.error(error, {
          autoClose: 5000,
          progress: undefined,
        })
      );
    } else {
      toast.success('Booking successful!', {
        autoClose: 5000,
        progress: undefined,
      });
      console.log({
        destination,
        phone,
        persons,
        rooms,
        startDate: dateRange[0],
        endDate: dateRange[1],
      });
    }
  };

  const inputClassName =
    'p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700 transition-all duration-300 hover:shadow-md w-full mx-8';

  return (
    <>
      <motion.div
        className="relative text-center text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-nowrap justify-between items-center space-x-2 mt-20 pt-20"
        >
          {/* Destination */}
          <motion.div className="flex flex-col w-[15%]">
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={`${inputClassName} appearance-none`}
            >
              <option value="" disabled>
                Select City
              </option>
              <option value="Gurugram">Gurugram</option>
              <option value="Shimla">Shimla</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Manali">Manali</option>
            </select>
            {/* {errors.destination && <span className="text-red-500 text-xs">{errors.destination}</span>} */}
          </motion.div>

          {/* Phone */}
          <motion.div className="flex flex-col w-[15%]">
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClassName}
            />
            {/* {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>} */}
          </motion.div>

          {/* Number of Persons */}
          <motion.div className="flex flex-col w-[12%]">
            <input
              type="number"
              id="persons"
              placeholder="No. of persons"
              value={persons}
              min={1}
              onChange={(e) => setPersons(Number(e.target.value))}
              className={inputClassName}
            />
            {/* {errors.persons && <span className="text-red-500 text-xs">{errors.persons}</span>} */}
          </motion.div>

          {/* Number of Rooms */}
          <motion.div className="flex flex-col w-[12%]">
            <input
              type="number"
              id="rooms"
              placeholder="No. of rooms"
              value={rooms}
              min={1}
              onChange={(e) => setRooms(Number(e.target.value))}
              className={inputClassName}
            />
            {/* {errors.rooms && <span className="text-red-500 text-xs">{errors.rooms}</span>} */}
          </motion.div>

          {/* Range Date Picker */}
          <motion.div className="flex flex-col w-[30%]">
            <DatePicker
              selected={dateRange[0]}
              onChange={(dates: [Date | null, Date | null]) => setDateRange(dates)}
              startDate={dateRange[0]}
              endDate={dateRange[1]}
              minDate={new Date()}
              selectsRange
              className="p-2 text-sm border rounded-md text-gray-700 shadow-sm -mx-20 w-64 focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700 transition-all duration-300 hover:shadow-md"
              placeholderText="Select date range"
            />
            {/* {errors.dateRange && <span className="text-red-500 text-xs">{errors.dateRange}</span>} */}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="flex flex-col w-[10%]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="text-white bg-red-700 hover:bg-red-600 transition-all duration-300 w-full text-sm rounded-md p-2 hover:shadow-lg"
            >
              Book Now
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default BookingForm;
