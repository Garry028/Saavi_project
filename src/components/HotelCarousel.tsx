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
      className=" max-w-8xl h-full mx-auto"
      
    >
      <CarouselContent>
        {content.hotels.map((hotel) => (
          <CarouselItem
          key={hotel.id}
          className="sm:basis-1/2 h-full md:basis-1/3 lg:basis-1/4"
        >
          <div className="p-1">
            <Card className="overflow-hidden group h-150">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 transform origin-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="text-muted-foreground mb-2">{hotel.location}</p>
                  <p className="text-sm mb-4">{hotel.description}</p>
                  <div className="flex justify-end">
                    <Link to="/booking">
                      <Button className="text-lg bg-red-700 hover:bg-red-800">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-10">
        <CarouselPrevious className="carousel-previous relative bg-red-700 !static" />
        <CarouselNext className="carousel-next relative bg-red-700 !static" />
      </div>
    </Carousel>
  );
}
