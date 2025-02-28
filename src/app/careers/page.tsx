"use client";
import HeroSection from "@/components/Career/HeroSection";
import JoinOurTeam from "@/components/Career/JoinOurTeam";
import CultureGrowth from "@/components/Career/CultureGrowth";
import JobOppening from "@/components/Career/JobOppening";

const CareerPage = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <JoinOurTeam />
      <CultureGrowth />
      <JobOppening />
    </div>
  );
};

export default CareerPage;
