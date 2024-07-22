import "./globals.css";

import { Header, Footer } from "@/components";

export const metadata = {
  title: {
    default: "Movie Town",
    template: '%s - Movie Town'
  },
  description: "Explore movies here..."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
{/* <html lang="fa">
    <meta charSet="utf-8" /> */}

      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
