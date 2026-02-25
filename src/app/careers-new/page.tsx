"use client";
import HeroSection from "@/components/Career/HeroSectionNew";
import JobOppeningNew from "@/components/Career/JobOppeniNew";
import LifeAtCayana from "@/components/Career/LifeAtCayana";
import WhyJoinCayana from "@/components/Career/WhyJoinCayana";
import WorkingAtCayana from "@/components/Career/WorkingAtCayana";
import CompanyReviews from "@/components/Career/CompanyReviews";
import JobOpeningsModern from "@/components/Career/JobOpeningsModern";

const CareerPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <div className="space-y-0">
        <WorkingAtCayana />
        <LifeAtCayana />
        <WhyJoinCayana />
        <CompanyReviews />
        {/* <JobOppeningNew /> */}
        <JobOpeningsModern />
      </div>
    </main>
  );
};

export default CareerPage;
