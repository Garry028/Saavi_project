export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      title: "Luxury Suite"
    },
    {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      title: "Swimming Pool"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
      title: "Hotel Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800",
      title: "Restaurant"
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
      title: "Spa"
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
      title: "Hotel Room"
    }
  ];

  return (
    <div className="pt-24 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Our Gallery</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}