import HeroSection from '../components/HeroSection/HeroSection';
import MusicSection from '../components/MusicSection/MusicSection';
import NewsSection from '../components/NewsSection/NewsSection';
import VideoSection from '../components/VideoSection/VideoSection';
import CustomPlayer from '../components/CustomPlayer/CustomPlayer';
import MusicCarousel from '../components/MusicSection/MusicCarousel';

export default function Home() {
  return (
    <>
      <CustomPlayer />
      <HeroSection />
      <MusicSection />
      <VideoSection />
      <NewsSection />
    </>
  );
}
