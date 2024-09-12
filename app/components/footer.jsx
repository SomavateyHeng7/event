import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Make sure to import the icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8 text-center sm:text-left">
          
          {/* About Section */}
          <div className="sm:w-1/3">
            <h2 className="text-lg font-bold mb-4">About PlanIT</h2>
            <p className="text-gray-400">
              PlanIT helps you discover events, manage ticketing, and organize your own events seamlessly.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="sm:w-1/3">
            <h2 className="text-lg font-bold mb-4">Explore</h2>
            <ul className="space-y-2">
              <li>
                <a href="/find-events" className="text-gray-400 hover:text-orange-500 transition">
                  Find Events
                </a>
              </li>
              <li>
                <a href="/create-events" className="text-gray-400 hover:text-orange-500 transition">
                  Create Events
                </a>
              </li>
              <li>
                <a href="/help-center" className="text-gray-400 hover:text-orange-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/tickets" className="text-gray-400 hover:text-orange-500 transition">
                  Find My Tickets
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="sm:w-1/3">
            <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
            <ul className="flex justify-center sm:justify-start space-x-6">
              <li>
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-orange-500 transition">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-500 transition">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} PlanIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
