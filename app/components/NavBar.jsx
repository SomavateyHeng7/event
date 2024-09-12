import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-6 py-3 w-full">
      <Link href="/" className="text-white text-2xl font-bold">
      PlanIT
      </Link>
      <div className="flex space-x-4">
        <Link href="/" className="text-white font-medium hover:underline">
          Home
        </Link>
        <Link href="/events" className="text-white font-medium hover:underline">
          Events
        </Link>
        <Link href="/addevent" className="text-white font-medium hover:underline">
          Add Event
        </Link>
        <Link href="/profile" className="text-white font-medium hover:underline">
          Profile
        </Link>
        <Link href="/signin" className="bg-white text-slate-700 font-medium p-2 rounded hover:bg-gray-200">
          Sign In
        </Link>
        <Link href="/signup" className="bg-white text-slate-700 font-medium p-2 rounded hover:bg-gray-200">
          Sign Up
        </Link>
      </div>
    </nav>
  //    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
  //    {/* Logo Section */}
  //    <div className="flex items-center space-x-4">
  //      <Link href="/">
  //        <a className="text-orange-600 text-2xl font-bold">planit</a>
  //      </Link>
  //    </div>

  //    {/* Search Bar */}
  //    <div className="relative w-1/3">
  //      <input 
  //        type="text" 
  //        placeholder="Search events" 
  //        className="w-full py-2 px-4 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
  //      />
  //      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  //        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4-4-4m4 4h8m-4 4V8"></path>
  //        </svg>
  //      </div>
  //    </div>

  //    {/* Navigation Links */}
  //    <div className="flex items-center space-x-4 text-gray-700">
  //   <Link href="/" className="text-white font-medium hover:underline">
  //   Home
  //   </Link>
  //      <Link href="/create-events">
  //        <a className="hover:text-orange-500">Create Events</a>
  //      </Link>
  //      <Link href="/help-center">
  //        <a className="hover:text-orange-500">Help Center</a>
  //      </Link>
  //      <Link href="/tickets">
  //        <a className="hover:text-orange-500">Find my tickets</a>
  //      </Link>
  //      <Link href="/login">
  //        <a className="hover:text-orange-500">Log In</a>
  //      </Link>
  //      <Link href="/signup">
  //        <a className="hover:text-orange-500">Sign Up</a>
  //      </Link>
  //    </div>
  //  </nav>
  );
}
