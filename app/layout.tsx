import "./globals.css";

import { Navbar, Footer } from "@/components";
import Header from "@/components/Layouts/Header";
export const metadata = {
  title: "Movie Town",
  description: "Discover world's best movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
