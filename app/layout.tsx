import { Inter } from "next/font/google";
import './globals.css';

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'PlanIT',
  description: 'PlanIT is an event management platform.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}
