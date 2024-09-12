export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Planit</h2>
          <p className="text-gray-400">
            PlanIT helps you discover events, manage ticketing, and organize your own events seamlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className="space-y-2">
            <li><a href="/find-events" className="text-gray-400 hover:text-orange-500">Find Events</a></li>
            <li><a href="/create-events" className="text-gray-400 hover:text-orange-500">Create Events</a></li>
            <li><a href="/help-center" className="text-gray-400 hover:text-orange-500">Help Center</a></li>
            <li><a href="/tickets" className="text-gray-400 hover:text-orange-500">Find My Tickets</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-orange-500"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Planit. All rights reserved.</p>
      </div>
    </footer>
    );
}