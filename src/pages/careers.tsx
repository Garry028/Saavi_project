

import background_Image1 from "../../public/assets/bnq5.jpeg";
import { useState } from "react";

export default function careers() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        applyFor: '',
        resume: null as File | null,
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFormData({ ...formData, resume: e.target.files[0] });
        }
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted successfully!');
      };

    return (
        <div className="pt-24 mb-10">
            <div className="mb-16 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: `url(${background_Image1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    opacity: 1,
                    filter: 'contrast(1.2) brightness(0.4)',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}></div>
                <h1 className="text-4xl text-white text-center font-mono relative z-10">CAREERS</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="mb-16">
                    <p className="text-base mb-5">At Saavi Hotels, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of hospitality to make our guests happy. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in hospitality, and looking for challenging opportunities to actualize your fire within, look no further. A career at Saavi Hotels offers just that and a lot more.</p>
                    <p className="text-base">We do not charge any fee at any stage of the recruitment process and have not authorized agencies/partners to collect any fee for recruitment. If you encounter any suspicious mail, advertisements, or persons who offer jobs at Saavi Hotels, please do let us know by contacting us on</p>
                    <p className="text-base mb-5">
                      <a href="mailto:hr@saavigroups.com" className="text-blue-600 hover:text-blue-800 underline">
                        hr@saavigroups.com
                      </a>
                    </p>
                </div>
                
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-8">Application Form</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block bg-white text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border bg-white border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block bg-white text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border bg-white border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border bg-white border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="applyFor" className="block bg-white text-gray-700 font-medium mb-2">
              Apply For
            </label>
            <select
              id="applyFor"
              name="applyFor"
              value={formData.applyFor}
              onChange={handleChange}
              className="w-full border bg-white border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select Position</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Web Designer">Web Designer</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Operations Manager">Operations Manager</option>
            </select>
          </div>

          <div>
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
              Resume/CV
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full bg-white border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
        </div>
    );
}