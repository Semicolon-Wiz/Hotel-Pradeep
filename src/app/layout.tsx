import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import AppProvider from "./context/Context";

export const metadata: Metadata = {
  title: "Hotel Pradeep",
  description: "Hotel Pradeep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="shortcut icon" href="/img/logo/logo_trans.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gilda+Display&amp;family=Urbanist:wght@300;400;500;600&amp;display=swap" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {/* <div className="preloader">
          <div className="centered">
            <div className="cont">
              <div className="loader-circle"></div>
              <div className="loader-line-mask">
                <div className="loader-line"></div>
              </div>
              <img src="img/preloader.png" alt="" />
            </div>
          </div>
        </div> */}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <AppProvider >
          <Header />
          {children}
          <Footer />
        </AppProvider>


        <Script strategy="afterInteractive" src="/js/jquery-3.7.1.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery-migrate-3.4.1.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/modernizr-2.6.2.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/imagesloaded.pkgd.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.isotope.v3.0.2.js"></Script>
        <Script strategy="afterInteractive" src="/js/popper.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/bootstrap.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/scrollIt.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.waypoints.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/owl.carousel.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.stellar.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/jquery.magnific-popup.js"></Script>
        <Script strategy="afterInteractive" src="/js/YouTubePopUp.js"></Script>
        <Script strategy="afterInteractive" src="/js/select2.js"></Script>
        <Script strategy="afterInteractive" src="/js/datepicker.js"></Script>
        <Script strategy="afterInteractive" src="/js/vegas.slider.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/custom.js"></Script>
      </body>
    </html>
  );
}
