import ReviewsSlider from "@/components/Home/Reviews/Slider";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar";
import Collective from "@/components/Services/Collective";
import Consultation from "@/components/Services/Consultation";
import HeroService from "@/components/Services/HeroService";
import LatestProjects from "@/components/Services/LatestProjects";
import Marquee from "@/components/Services/Marquee";
import OurProcess from "@/components/Services/OurProcess";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="gradient">
       <Navbar />
      <HeroService />
      <Collective />
      <LatestProjects />
      <Services />
      <Testimonials />
      <OurProcess />
      
      <ReviewsSlider />
      <Consultation />
      <Marquee />
    </div>
  );
};

export default ServicesPage;
