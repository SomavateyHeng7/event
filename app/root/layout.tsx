
import Navbar from "@/components/shared/NavBar";
import Header from '@/components/shared/Header';  
import Footer from '@/components/shared/Footer'; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <Navbar />
        <Header />
        <main className="mt-8">{children}</main>
        <Footer />
    </html>
  );
}
