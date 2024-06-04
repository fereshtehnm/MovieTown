import "./globals.css";

import { Header, Footer } from "@/components";
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
