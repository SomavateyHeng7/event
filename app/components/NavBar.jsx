import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-6 py-4 w-full shadow-md">
      <Link href="/" className="text-white text-2xl font-bold">
        PlanIT
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-white font-medium hover:text-gray-300">
          Home
        </Link>
        <Link href="/events" className="text-white font-medium hover:text-gray-300">
          Events
        </Link>
        <Link href="/addevent" className="text-white font-medium hover:text-gray-300">
          Add Event
        </Link>
        <Link href="/contactus" className="text-white font-medium hover:text-gray-300">
          Contact Us
        </Link>
        <Link href="/profile" className="text-white font-medium hover:text-gray-300">
          Profile
        </Link>
        <Link href="/signin" className="text-white font-medium hover:text-gray-300">
          Log In
        </Link>
        <Link href="/signup" className="bg-white text-slate-700 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
