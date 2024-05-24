import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const roboto = Montserrat({
  weight: ['200','400','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Optica Guinart",
  description: "Optica Guinart Sant Andreu",
  icons: {
    icon: ['/favicon.ico']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Navbar/>
        <div className="children -z-10">
        {children}
        </div>
        </body>
    </html>
  );
}
