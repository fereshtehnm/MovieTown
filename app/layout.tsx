import "./globals.css";
import 'swiper/css';
import { Header, Footer } from "@/components/layout";

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
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
