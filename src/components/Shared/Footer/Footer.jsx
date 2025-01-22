import { FaFacebookF, FaGoogle, FaTwitter, FaVimeo, FaPinterest, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center md:text-start'>
      <div className="bg-blue-900 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
          {/* Logo and Tagline */}
          <div className="mb-4 md:mb-0">
            <Link to='/' className="text-2xl font-bold">Medical Camp</Link>
            <p className="text-sm opacity-75">Empowering health, one camp at a time.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to='/' className="hover:underline">Home</Link>
            <Link to='/available-camps' className="hover:underline">Available Camps</Link>
            <Link to='/services' className="hover:underline">Services</Link>
            <Link to='/contacts' className="hover:underline">Contact</Link>
            <Link to='/about-us' className="hover:underline">About Us</Link>

          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <FaGoogle />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-sm opacity-75 border-t border-blue-700 pt-4">

        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
          {/* About Us Section */}
          <div className=''>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <div className="h-1 w-10 bg-white mb-4 mx-auto  md:mx-0"></div>
            <p className="text-sm opacity-75 mb-4 ">
              At Imran, we are dedicated to enhancing community health and well-being through accessible and affordable healthcare solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#facebook" className="p-2 bg-white text-blue-900 rounded-full hover:bg-blue-700 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#google" className="p-2 bg-white text-blue-900 rounded-full hover:bg-blue-700 hover:text-white">
                <FaGoogle />
              </a>
              <a href="#twitter" className="p-2 bg-white text-blue-900 rounded-full hover:bg-blue-700 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#vimeo" className="p-2 bg-white text-blue-900 rounded-full hover:bg-blue-700 hover:text-white">
                <FaVimeo />
              </a>
              <a href="#pinterest" className="p-2 bg-white text-blue-900 rounded-full hover:bg-blue-700 hover:text-white">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <div className="h-1 w-10 bg-white mb-4 mx-auto  md:mx-0"></div>
            <ul className="text-sm space-y-2">
              <li><Link to='/' className="hover:underline">Home</Link></li>
              <li><Link to='/available-camps' className="hover:underline">Available Camps</Link></li>
              <li><Link to='/services' className="hover:underline">Services</Link></li>
              <li><Link to='/contacts' className="hover:underline">Contacts</Link></li>
              <li><Link to='/about-us' className="hover:underline">About Us</Link></li>
            </ul>
          </div>

          {/* Open Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Open Hours</h3>
            <div className="h-1 w-10 bg-white mb-4 mx-auto  md:mx-0"></div>
            <p className="text-sm opacity-75 mb-2">We are here to serve you! Our medical camps operate during the following hours to ensure everyone has access to quality healthcare:</p>
            <ul className="text-sm space-y-1">
              <li>Monday - Friday: 8:00 - 20:00</li>
              <li>Saturday: 9:00 - 18:30</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <div className="h-1 w-10 bg-white mb-4 mx-auto  md:mx-0"></div>
            <p className="text-sm opacity-75 mb-4">
              Subscribe to our newsletter to get all our updates in your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 w-full text-black rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800">
                &#x27A4;
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-sm opacity-75 border-t border-blue-700 pt-4 flex items-end justify-center">
          &copy; {new Date().getFullYear()} Medical Camp Management System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
