import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import data from "./data";
import Script from "next/script";

const TawkTo = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/6670d9c09a809f19fb3ec8fa/1i0kd56cd"
      />
      {/* Rest of your website content */}
    </>
  );
};

const inter = Montserrat({ subsets: ["latin"],
  weight: ["100","300","400","500","600","700","800","900"]
 });

export const metadata: Metadata = {
  title: `${data.brand}`,
  description: `${data.brand} connects you with the top rated local Surgeons providing hernia procedures, hernia treatments, hernia surgeries.`,
  icons: {
    icon: data.logo, 
    apple: data.logo,
    shortcut: data.logo,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="qtF6bh1d2Fs5IN5P9-UIymEDB64u8AuQyVBbWI6dNB8" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WYFS8C7VC0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WYFS8C7VC0');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar/>
        <div className="overflow-x-hidden w-screen">
        {children}

        </div>
        <TawkTo/>
       
        <Footer/>
      </body>
    </html>
  );
}
