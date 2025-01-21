export default function Promotions() {
  return (
    <div className="pt-24 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Special Offers & Promotions</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Summer Escape",
              description: "Enjoy 20% off on all suite bookings this summer",
              validUntil: "September 30, 2024",
              image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800"
            },
            {
              title: "Weekend Getaway",
              description: "Book 2 nights, get the 3rd night free",
              validUntil: "December 31, 2024",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
            },
            {
              title: "20% Discounts",
              description: "Hurry, this exclusive offer is valid for a limited time! Book now and indulge in a getaway like no other",
              validUntil: "October 31, 2024",
              image: "https://media.istockphoto.com/id/940891760/vector/discount-20-background-with-brush-strokes.jpg?s=612x612&w=0&k=20&c=9u0ar0h2zbCB9KM1OCPCZC96GRHjm1ME3bS-fn7Y43U="
            }
          ].map((promo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <p className="text-sm text-gray-500">Valid until: {promo.validUntil}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}