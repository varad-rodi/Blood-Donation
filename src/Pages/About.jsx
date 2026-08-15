import React from "react";

import AboutHero from "../Components/About/AboutHero";
import MissionVision from "../Components/About/MissionVision";
import AboutStats from "../Components/About/AboutStats";
import WhyDifferent from "../Components/About/WhyDifferent";
import AboutCTA from "../Components/About/AboutCTA";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AboutHero />
      <MissionVision />
      <AboutStats />
      <WhyDifferent />
      <AboutCTA />
    </div>
  );
}

export default About;