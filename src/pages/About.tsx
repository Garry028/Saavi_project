import { content } from "@/lib/content";

export default function About() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About {content.company.name}</h1>
          <p className="text-xl text-gray-600">{content.company.description}</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional hospitality experiences that exceed our guests' expectations,
              while maintaining the highest standards of luxury and comfort.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the world's leading luxury hotel group, recognized for our distinctive properties
              and unparalleled service excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}