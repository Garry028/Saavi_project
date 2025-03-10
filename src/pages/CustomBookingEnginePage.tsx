import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import clsx from "clsx";
import "react-multi-date-picker/styles/colors/red.css";
import DateSelector from "../components/booking/DateSelector";
import GuestSelector from "../components/booking/GuestSelector";
import RoomCard from "../components/booking/RoomCard";
import { rooms } from "../data/rooms";

type DateRange = [Date | null, Date | null];

const CustomBookingEnginePage: React.FC = () => {
  // States
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedRooms, setSelectedRooms] = useState<
    Record<string, Record<string, number>>
  >({});

  // Derived values
  const checkInDate = dateRange[0];
  const checkOutDate = dateRange[1];

  // Helper functions
  const toggleRoomDetails = (roomId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [roomId]: !prev[roomId],
    }));
  };

  const selectRoom = (roomId: string, planId: string, count: number) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [roomId]: {
        ...prev[roomId],
        [planId]: count,
      },
    }));
  };

  const validateBooking = () => {
    // Validate dates
    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates");
      return false;
    }

    // Validate check-out is after check-in
    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after check-in date");
      return false;
    }

    // Validate total guests
    if (totalGuests === 0) {
      alert("At least one guest is required");
      return false;
    }

    return true;
  };

  const checkAvailability = () => {
    if (!validateBooking()) {
      return;
    }
    // Continue with availability check
  };

  const handleReservation = (roomId: string) => {
    if (!validateBooking()) {
      return;
    }

    const roomPlans = selectedRooms[roomId];
    if (!roomPlans) {
      alert("Please select a room plan");
      return;
    }

    const hasSelectedRooms = Object.values(roomPlans).some(
      (count) => count > 0
    );
    if (!hasSelectedRooms) {
      alert("Please select at least one room to reserve.");
      return;
    }

    // Validate against room capacity
    const room = rooms.find((r) => r.id === roomId);
    if (room && totalGuests > room.maxGuests) {
      alert(`This room type can only accommodate ${room.maxGuests} guests`);
      return;
    }

    // In a real app, this would submit the reservation
    alert("Reservation successful!");
  };

  // Calculate stay duration
  const nightsStay =
    checkOutDate && checkInDate
      ? Math.ceil(
          (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        )
      : 1;

  const handleDateChange = (value: any) => {
    // Extract dates from the date picker
    if (Array.isArray(value) && value.length === 2) {
      const startDate = value[0]?.toDate?.() || null;
      const endDate = value[1]?.toDate?.() || null;
      setDateRange([startDate, endDate]);
    }
  };

  const totalGuests = adults + children + infants;

  return (
    <div className="flex flex-col lg:flex-row w-full border border-gray-300 bg-white shadow-md">
      {/* Left side - Calendar and Guest Selection */}
      <div className="w-full lg:w-2/5 p-5 border-r border-gray-300">
        <DateSelector dateRange={dateRange} onDateChange={handleDateChange} />

        <GuestSelector
          adults={adults}
          children={children}
          infants={infants}
          setAdults={setAdults}
          setChildren={setChildren}
          setInfants={setInfants}
        />

        <button
          className={clsx(
            "w-full py-3 font-medium text-center",
            !checkInDate || !checkOutDate
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-brown-800 text-white hover:bg-brown-900"
          )}
          onClick={checkAvailability}
          disabled={!checkInDate || !checkOutDate}
        >
          CHECK AVAILABILITY
        </button>

        <div className="mt-4">
          <div className="flex items-center p-3 bg-gray-100 border border-gray-300 justify-between cursor-pointer hover:bg-gray-200">
            <span className="font-medium">PROMO CODE</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>

      {/* Right side - Room Selection */}
      <div className="w-full lg:w-3/5 bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200">
          <h2 className="text-xl">
            Select the accommodation that suits you best
          </h2>

          {checkInDate && checkOutDate ? (
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
              <span>GUESTS: {totalGuests}</span>
              <span className="mx-4">→</span>
              <span>{dayjs(checkInDate).format("ddd DD MMM YYYY")}</span>
              <span className="mx-2">-</span>
              <span>{dayjs(checkOutDate).format("ddd DD MMM YYYY")}</span>
              <span className="ml-4 border border-gray-300 px-2 py-1 rounded-md flex items-center">
                <span className="mr-1">{nightsStay}</span>
                <span>{nightsStay > 1 ? "NIGHTS" : "NIGHT"}</span>
              </span>
            </div>
          ) : (
            <p className="text-gray-500 mt-2">
              Please select dates and check availability to see rooms
            </p>
          )}
        </div>
        <div className="room-listings">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              expanded={expanded[room.id]}
              totalGuests={totalGuests}
              nightsStay={nightsStay}
              children={children}
              selectedRooms={selectedRooms}
              onToggleDetails={() => toggleRoomDetails(room.id)}
              onSelectRoom={selectRoom}
              onReserve={handleReservation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomBookingEnginePage;
