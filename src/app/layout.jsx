import './globals.css';
import  {Quicksand } from 'next/font/google';

import UpNav from '../components/upNav';
import LowNav from "../components/lowNav";
// Import the missing components
  import Cards from "@/components/cards"; // Assuming it's in components/cards.jsx or .tsx

import Footer from "@/components/Footer"; // Assuming it's in components/Footer.jsx or .tsx

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Customize as needed
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata = {
  title: 'Quore B2B Marketing',
  description: 'Quore B2B Marketing is a platform designed to help businesses streamline their marketing efforts and enhance customer engagement through innovative solutions.',
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        The <head /> component is deprecated in Next.js App Router.
        Metadata is handled via the `export const metadata` object.
        You should remove <head /> and let Next.js handle it.
      */}
      <body>
        <UpNav />
        <LowNav />
        <main>{children}</main>
        <Cards />
        <Footer />
        
      </body>
    </html>
  );
}