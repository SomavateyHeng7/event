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
        <Link href="/contactus" className="text-white font-medium hover:underline">
          Contact Us
        </Link>
        {/* <Link href="/profile" className="text-white font-medium hover:underline">
          Profile
        </Link> */}
        <Link href="/signin" className="text-white font-medium hover:underline">
          Sign In
        </Link>
        {/* <Link href="/signin" className="bg-white text-slate-700 font-medium p-2 rounded hover:bg-gray-200">
          Sign In
        </Link> */}
        <Link href="/signup" className="bg-white text-slate-700 font-medium p-2 rounded hover:bg-gray-200">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
