import HeroSection from "@/components/AboutPage/HeroSection";
import ContentPage from "@/components/AboutPage/ContentPage";
import MissionVision from "@/components/AboutPage/MissionVision";
import CorporateEthics from "@/components/AboutPage/CorporateEthics";
import OurLeadershipTeam from "@/components/AboutPage/OurLeadershipTeam";
import OurLeadershipTeamCMO from "@/components/AboutPage/OurLeadershipTeamCMO";

export default function AboutUsPage() {
  return (
    <div>
      <HeroSection />
      <ContentPage />
      <MissionVision />
      <CorporateEthics />
      <OurLeadershipTeam/>
      <OurLeadershipTeamCMO/>
      {/* <TeamGrid/>  */}
    </div>
  );
}
