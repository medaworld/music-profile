import HeroSection from '../components/HeroSection/HeroSection';
import MusicSection from '../components/MusicSection/MusicSection';
import NewsSection from '../components/NewsSection/NewsSection';
import VideoSection from '../components/VideoSection/VideoSection';
import { BackgroundContainer } from '../components/styles/BackgroundContainer';

export default function Home() {
  return (
    <main>
      <BackgroundContainer />
      <HeroSection />
      <MusicSection />
      <VideoSection />
      <NewsSection />
    </main>
  );
}
