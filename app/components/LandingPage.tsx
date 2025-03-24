"use client";

import Features from "./Features";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Download from "./Download";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Partners from "./Partners";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <FAQ />
      <Download />
      <Newsletter />
      <Partners />
      <Footer />
    </div>
  );
};

export default LandingPage;
