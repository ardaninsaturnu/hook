import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-3xl font-bold">
            <Link href="/">hook</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <Link href="/projects" className="hover:text-primary">Projects</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>
          <div className="cta-buttons space-x-4">
            <Link href="/quote">
              <span className="bg-primary text-black px-4 py-2 rounded hover:bg-yellow-500 font-semibold">Get span Quote</span>
            </Link>
            <Link href="/services">
              <span className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-black font-semibold">Our Services</span>
            </Link>
          </div>
        </div>
      </header>
        {children}

        {/* CTA Section */}
        <section className="cta bg-primary text-black text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-10">Let us help you bring your ideas to life with expert development solutions.</p>
            <Link href="/quote">
              <span className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 font-semibold">Get span Quote</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-10">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Hook. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
