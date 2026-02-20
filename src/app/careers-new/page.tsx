"use client";
import HeroSection from "@/components/Career/HeroSection";
import JobOppeningNew from "@/components/Career/JobOppeniNew";
import LifeAtCayana from "@/components/Career/LifeAtCayana";
import WhyJoinCayana from "@/components/Career/WhyJoinCayana";
import WorkingAtCayana from "@/components/Career/WorkingAtCayana";
import CompanyReviews from "@/components/Career/CompanyReviews";

const CareerPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <div className="space-y-0">
        <WorkingAtCayana />
        <LifeAtCayana />
        <WhyJoinCayana />
        <CompanyReviews />
        <JobOppeningNew />
      </div>
    </main>
  );
};

export default CareerPage;
