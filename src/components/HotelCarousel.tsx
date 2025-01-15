import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { content } from "@/lib/content";
import { useEffect, useRef } from "react";

export default function HotelCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Simulate a click on the "next" button to auto-scroll
        const nextButton = carouselRef.current.querySelector(".carousel-next");
        if (nextButton) {
          (nextButton as HTMLElement).click();
        }
      }
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {content.hotels.map((hotel) => (
          <CarouselItem
            key={hotel.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="overflow-hidden group h-96"> {/* Fixed height here */}
                <CardContent className="p-0">
                  <div className="relative overflow-hidden"> {/* Add overflow-hidden here */}
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 transform origin-center" // Ensure the transform starts from the center
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link to="/booking">
                        <Button variant="secondary" className="text-lg">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <p className="text-muted-foreground mb-2">{hotel.location}</p>
                    <p className="text-sm">{hotel.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-previous" />
      <CarouselNext className="carousel-next" />
    </Carousel>
  );
}
