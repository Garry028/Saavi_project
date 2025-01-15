import { Building2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../../public/assets/saavi_logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              {/* <Building2 className="h-8 w-8 text-white" /> */}
              <img src={logo} alt="Saavi Hotels Logo" className="h-10 w-10" /> {/* Add the logo */}
              <span className="text-xl font-semibold text-white">Saavi Hotels</span>
            </Link>
            <p className="mt-4 text-sm">
              Saavi Hotels is a chain of boutique hotels and a subsidiary of Saavi Events and 
              Entertainment Pvt. Ltd headquartered at Gurgaon. Incorporated by the founder 
              himself, Mr. Deepak Dangi, the company is a part of the PV Group, one of India’s 
              growing business conglomerates.
            </p>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-white transition-colors">Our Hotels</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">Offers & Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Headquarter Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Headquarter</h3>
            <ul className="space-y-2 text-sm">
              <li>The Saavi Hotel</li>
              <li>1482, Huda Colony, Sector 46</li>
              <li>Gurugram, Haryana 122003</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Saavi Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
