import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  return (
    <div className="relative text-center text-white">
      <div className="flex flex-nowrap justify-between items-center space-x-2 mt-72">
        
        {/* Destination */}
        <div className="flex flex-col w-[15%]">
          <input
            type="text"
            id="destination"
            placeholder="Enter City"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
          />
        </div>

        {/* Phone No. */}
        <div className="flex flex-col w-[15%]">
          <input
            type="tel"
            id="phone"
            placeholder="Enter Phone Number"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
          />
        </div>

        {/* Number of Persons */}
        <div className="flex flex-col w-[12%]">
          <input
            type="number"
            id="persons"
            placeholder="No. of persons"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
          />
        </div>

        {/* Number of Rooms */}
        <div className="flex flex-col w-[12%]">
          <input
            type="number"
            id="rooms"
            placeholder="No. of rooms"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
          />
        </div>

        {/* Arrival Date */}
        <div className="flex flex-col w-[15%] relative">
          <DatePicker
            selected={checkInDate}
            onChange={(date: Date | null) => date && setCheckInDate(date)}
            placeholderText="Check-in"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
            dateFormat="dd/MM/yyyy"
          />
          <span className="absolute right-3 top-2 text-gray-500">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
        </div>

        {/* Departure Date */}
        <div className="flex flex-col w-[15%] relative">
          <DatePicker
            selected={checkOutDate}
            onChange={(date: Date | null) => date && setCheckOutDate(date)}
            placeholderText="Check Out"
            className="p-2 text-sm border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700 w-full"
            dateFormat="dd/MM/yyyy"
          />
          <span className="absolute right-3 top-2 text-gray-500">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col w-[10%]">
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-600 transition-colors w-full text-sm rounded-md p-2"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
