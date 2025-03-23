import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination")?.toLowerCase();

  const stringEclipses = (str: string, maxLength: number) => {
    if (str?.length <= maxLength) return str;
    return (
      str?.slice(0, maxLength) +
      ` <span class="text-[#7A1F1F] cursor-pointer">...</span>`
    );
  };

  const fetchHotels = async () => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hotels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    const data = await response.json();
    const filteredHotels = data?.filter(
      (hotel: any) => hotel.city.toLowerCase() === destination
    );
    setHotels(filteredHotels);
    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-red-700" />
      </div>
    );
  }
  return (
    <div className="pt-24 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">
          {destination
            ? `Hotels in ${
                destination.charAt(0).toUpperCase() + destination.slice(1)
              }`
            : "Our Hotels & Resorts"}
        </h1>

        {hotels?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels?.map((hotel: any) => (
              <div
                key={hotel?.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={hotel?.homeImageUrl[0]}
                    alt={hotel?.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{hotel?.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel?.address}</p>
                  <p
                    className="text-gray-700 mb-1"
                    onClick={() => setShowMore(!showMore)}
                    dangerouslySetInnerHTML={{
                      __html: showMore
                        ? hotel?.description
                        : stringEclipses(hotel?.description, 100),
                    }}
                  />
                  <span
                    className="text-[#7A1F1F] cursor-pointer font-bold"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show less" : "Show more"}
                  </span>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-semibold">Amenities:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {JSON.parse(hotel?.facilities)?.map(
                        (amenity: any, index: any) => (
                          <li key={index} className="text-gray-600">
                            • {amenity}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link to={`/hotelDesc/${hotel?.id}`}>
                      <Button className="w-full">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No hotels found for "{destination}".
          </p>
        )}
      </div>
    </div>
  );
}
