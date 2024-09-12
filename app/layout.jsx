import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlanIT",
  description: "Event Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
          <div className="mt-8">{children}</div>
          <Footer />
        </div>
        </body>
    </html>
  );
}
