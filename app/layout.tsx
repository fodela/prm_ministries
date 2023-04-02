import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = "Living Word";
  return (
    <html lang="en">
      {/* [x]Nav */}
      {/* [x]Header */}

      <body>
        <Hero title={title} />
        <div className="flex justify-center">
          <div className="flex flex-col gap-10  lg:flex-row  max-w-screen-lg ">
            {children}
            <Aside />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
