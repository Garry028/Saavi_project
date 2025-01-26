import { useState, useRef, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styling for the toasts
import { Search, Users, Building2, Calendar, ChevronDown, Plus, Minus } from 'lucide-react';

const BookingForm = () => {
  // const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  // const [destination, setDestination] = useState('');
  // const [phone, setPhone] = useState('');
  // const [persons, setPersons] = useState<number | ''>('');
  // const [rooms, setRooms] = useState<number | ''>('');
  // // const [errors, setErrors] = useState<Record<string, string>>({});

  // const validateInputs = () => {
  //   const newErrors: Record<string, string> = {};

  //   if (!destination) newErrors.destination = 'Destination is required.';
  //   if (!phone || !/^\d{10}$/.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number.';
  //   if (!persons || persons <= 0) newErrors.persons = 'Enter a valid number of persons.';
  //   if (!rooms || rooms <= 0) newErrors.rooms = 'Enter a valid number of rooms.';
  //   if (!dateRange[0]) newErrors.startDate = 'Check-in date is required.';
  //   if (!dateRange[1]) newErrors.endDate = 'Check-out date is required.';
  //   if (dateRange[0] && dateRange[1] && dateRange[1] <= dateRange[0])
  //     newErrors.dateRange = 'Check-out date must be after check-in date.';

  //   // setErrors(newErrors);
  //   return newErrors;
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validateInputs();

  //   if (Object.keys(validationErrors).length > 0) {
  //     Object.values(validationErrors).forEach((error) =>
  //       toast.error(error, {
  //         autoClose: 5000,
  //         progress: undefined,
  //       })
  //     );
  //   } else {
  //     toast.success('Booking successful!', {
  //       autoClose: 5000,
  //       progress: undefined,
  //     });
  //     console.log({
  //       destination,
  //       phone,
  //       persons,
  //       rooms,
  //       startDate: dateRange[0],
  //       endDate: dateRange[1],
  //     });
  //   }


    const [destination, setDestination] = useState('');
    const [isDestinationOpen, setIsDestinationOpen] = useState(false);
    const [rooms, setRooms] = useState('1');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
  
    const destinations = ['Gurugram', 'Shimla', 'Manali', 'Rishikesh'];
    const destinationRef = useRef<HTMLDivElement>(null);
    const guestsRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
          setIsDestinationOpen(false);
        }
        if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
          setIsGuestsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
    };
  
    const updateGuests = (type: 'adult' | 'child', operation: 'increment' | 'decrement') => {
      if (type === 'adult') {
        if (operation === 'increment' && adults < 30) setAdults(adults + 1);
        if (operation === 'decrement' && adults > 1) setAdults(adults - 1);
      } else {
        if (operation === 'increment' && children < 30) setChildren(children + 1);
        if (operation === 'decrement' && children >= 1) setChildren(children - 1);
      }

  };

  // const inputClassName =
  //   'p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700 transition-all duration-300 hover:shadow-md w-full mx-8';

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
        <div className="container mx-auto px-4 mt-72 relative z-10">
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {/* Destination Dropdown */}
          <div className="relative" ref={destinationRef}>
            <label className="block text-sm font-medium text-gray-700 text-left mb-1">
              Destination
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <div
                onClick={() => setIsDestinationOpen(!isDestinationOpen)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
              >
                <span className={destination ? 'text-gray-900' : 'text-gray-900'}>
                  {destination || 'Location'}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              {isDestinationOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {destinations.map((dest) => (
                    <div
                      key={dest}
                      className="px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                      onClick={() => {
                        setDestination(dest);
                        setIsDestinationOpen(false);
                      }}
                    >
                      {dest}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Guests Dropdown */}
          <div className="relative" ref={guestsRef}>
  <label className="block text-sm font-medium text-gray-700 text-left mb-1">Guests</label>
  <div className="relative">
    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    <div
      onClick={() => setIsGuestsOpen(!isGuestsOpen)}
      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
    >
      <span className="text-gray-900">
        {adults + children} Guest{adults + children !== 1 ? "s" : ""}
      </span>
      <ChevronDown className="h-4 w-4 text-gray-400" />
    </div>
    {isGuestsOpen && (
      <div className="absolute top-full left-0  mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
        <div className="space-y-6">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Adults</span>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => updateGuests("adult", "decrement")}
                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
              >
                <Minus className="h-4 w-4 text-blue-600" />
              </button>
              <span className="w-10 text-center text-gray-700 font-medium">{adults}</span>
              <button
                type="button"
                onClick={() => updateGuests("adult", "increment")}
                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
              >
                <Plus className="h-4 w-4 text-blue-600" />
              </button>
            </div>
          </div>
          {/* Children */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Children</span>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => updateGuests("child", "decrement")}
                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
              >
                <Minus className="h-4 w-4 text-blue-600" />
              </button>
              <span className="w-10 text-center text-gray-700 font-medium">{children}</span>
              <button
                type="button"
                onClick={() => updateGuests("child", "increment")}
                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
              >
                <Plus className="h-4 w-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>


          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 text-left mb-1">
              Rooms
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 text-left mb-1">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 text-left mb-1">
              Check-out
            </label>
            <div className="relative ">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 text-left mb-1">
              &nbsp;
            </label>
            <button
              type="submit"
              className="w-full bg-red-700  hover:bg-blue-700 text-white font-semibold  px-6 rounded-lg transition duration-200 "
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
      </motion.div>

      {/* Toast Notifications */}
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  );
};

export default BookingForm;
