import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../public/assets/saavi_logo.jpeg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center">
          {/* About Us Section */}
          <div className="max-w-xs text-center">
            <Link to="/" className="flex items-center justify-center gap-2">
              <img src={logo} alt="Saavi Hotels Logo" className="h-10 w-10" />
              <span className="text-xl font-semibold text-white">Saavi Hotels</span>
            </Link>
            <p className="mt-4 text-sm">
              Saavi Hotels is a chain of boutique hotels and a subsidiary of Saavi Events and
              Entertainment Pvt. Ltd headquartered at Gurgaon. Incorporated by the founder
              himself, Mr. Deepak Dangi, the company is a part of the PV Group, one of India's
              growing business conglomerates.
            </p>
          </div>

          {/* Important Links Section */}
          <div className="text-center">
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
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Headquarter</h3>
            <ul className="space-y-2 text-sm">
              <li>The Saavi Hotel</li>
              <li>545,Sector 43,Golf course Road,
                </li>
              <li>Gurugram, Haryana 122003</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61565142656404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/saavihotels?igsh=and4OXdkMTJoNWcx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/96062794/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@SaaviHotelsAndResorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
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
