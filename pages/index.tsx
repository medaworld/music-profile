import HeroSection from '../components/HeroSection/HeroSection';
import MusicSection from '../components/MusicSection/MusicSection';
import NewsSection from '../components/NewsSection/NewsSection';
import VideoSection from '../components/VideoSection/VideoSection';
import CustomPlayer from '../components/CustomPlayer/CustomPlayer';

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
