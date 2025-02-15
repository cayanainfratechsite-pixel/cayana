import HeroSection from '@/components/HeroSection';
import Values from '@/components/Values';
import AboutUs from '@/components/AboutUs';
import TestimonialsPage from '@/components/testimonials';
import VideosSection from '@/components/video';
import BlogSlider from '@/components/BlogSlider';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Values/>
      <VideosSection />
      <TestimonialsPage />
      <BlogSlider/>
    </div>
  );
}
