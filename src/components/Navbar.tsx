import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { content } from '@/lib/content';
import logo from "../../public/assets/saavi_logo.png";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-white w-full backdrop-blur-sm shadow-sm">
    <div className="bg-red-900 text-white p-2 text-sm px-4 sm:px-8">
  <div className="flex flex-wrap items-center justify-between gap-y-4 sm:gap-y-0">
    {/* Contact Info */}
    <p className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
      <FaPhoneAlt className="text-base" />
      <span>7290006412, 7290006494</span>
      <span className="ml-4 flex items-center gap-2">
        <FaEnvelope className="text-base" />
        <span>sales@saavihotels.com</span>
      </span>
    </p>

    {/* Social Media Icons */}
    <div className="flex items-center gap-4 sm:gap-8">
      <a
        href="https://www.facebook.com/profile.php?id=61565142656404"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors text-white"
      >
        <i className="fab fa-facebook-f text-base"></i>
      </a>
      <a
        href="https://www.instagram.com/saavihotels?igsh=and4OXdkMTJoNWcx"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors text-white"
      >
        <i className="fab fa-instagram text-base"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/96062794/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors text-white"
      >
        <i className="fab fa-linkedin-in text-base"></i>
      </a>
      <a
        href="https://www.youtube.com/@SaaviHotelsAndResorts"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors text-white"
      >
        <i className="fab fa-youtube text-base"></i>
      </a>
    </div>
  </div>
</div>



      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="flex flex-col items-center">
              <img src={logo} alt="Saavi logo" className="w-39 h-25 object-cover rounded-md" />
              <span className="text-xs font-semibold text-black ">A Comfortable stay</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {/* Home Button */}
          <Link
            to="/"
            className="text-sm font-semibold text-gray-900 py-2 pr-4 hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* Our Hotels Dropdown */}
          {/* Our Hotels Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              Our Hotels <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] grid grid-cols-2 gap-4 p-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {content.hotels.map((hotel) => (
                <DropdownMenuItem key={hotel.id} className="p-0 focus:bg-transparent">
                  <Link
                    to={`/hotels/${hotel.id}`}
                    className="flex items-center gap-4 w-full p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <p className="text-sm text-gray-600">{hotel.location}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>


          {/* About Us Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              About Us <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px] p-2">
              {[
                { name: 'Our Company', href: '/about#company' },
                { name: 'Vision & Mission', href: '/about#vision-mission' },
                { name: 'Core Values', href: '/about#values' },
                { name: 'Our Team', href: '/about#team' },
                { name: 'Why Saavi?', href: '/about#why-saavi' },
              ].map((item) => (
                <DropdownMenuItem key={item.name} className="p-0 focus:bg-transparent">
                  <Link
                    to={item.href}
                    className="w-full p-2 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/gallery"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Gallery
          </Link>

          <Link
            to="/promotions"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Promotions
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px] p-2">
              {[
                // { name: 'Contact us', href: '/contact' },
                { name: 'Careers', href: '/careers' },
                // { name: 'Loyalty Program ', href: '' },
                { name: 'Banquet & Events', href: '/banqAndEvents' },
              ].map((item) => (
                <DropdownMenuItem key={item.name} className="p-0 focus:bg-transparent">
                  <Link
                    to={item.href}
                    className="w-full p-2 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-4">
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                Our Hotels <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-2">
                {content.hotels.map((hotel) => (
                  <DropdownMenuItem key={hotel.id} className="p-0 focus:bg-transparent">
                    <Link
                      to={`/hotels/${hotel.id}`}
                      className="w-full p-2 hover:text-primary transition-colors"
                    >
                      {hotel.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-2">
                {[
                  { name: 'Our Company', href: '/about#company' },
                  { name: 'Vision & Mission', href: '/about#vision-mission' },
                  { name: 'Core Values', href: '/about#values' },
                  { name: 'Our Team', href: '/about#team' },
                  { name: 'Why Saavi?', href: '/about#why-saavi' },
                ].map((item) => (
                  <DropdownMenuItem key={item.name} className="p-0 focus:bg-transparent">
                    <Link
                      to={item.href}
                      className="w-full p-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

           

            <Link
              to="/gallery"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
            >
              Gallery
            </Link>

            <Link
              to="/promotions"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
            >
              Promotions
            </Link>
            
            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                <Menu className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px] p-2">
                {[
                  // { name: 'Contact us', href: '/contact' },
                  { name: 'Careers', href: '/careers' },
                  // { name: 'Loyalty Program ', href: '' },
                  { name: 'Banquet & Events', href: '/banqAndEvents' },
                ].map((item) => (
                  <DropdownMenuItem key={item.name} className="p-0 focus:bg-transparent">
                    <Link
                      to={item.href}
                      className="w-full p-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </header>
  );
}
