export interface Hotel {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    description: string;
    images: string[];
    amenities: string[];
  }
  
  export interface BookingFormData {
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
  }