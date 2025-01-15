export default function Career() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Career Opportunities</h1>
        
        <div className="grid gap-8">
          {[
            {
              position: "Hotel Manager",
              location: "New York",
              type: "Full-time",
              description: "We're seeking an experienced Hotel Manager to oversee daily operations."
            },
            {
              position: "Executive Chef",
              location: "Maldives",
              type: "Full-time",
              description: "Join our culinary team as an Executive Chef at our luxury resort."
            },
            {
              position: "Spa Therapist",
              location: "Swiss Alps",
              type: "Full-time",
              description: "Looking for certified spa therapists to join our wellness team."
            }
          ].map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{job.location}</p>
                  <p className="text-gray-500 text-sm">{job.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}