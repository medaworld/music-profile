import HeroSection from '@/components/HeroSection/HeroSection';
import MusicSection from '@/components/MusicSection/MusicSection';
import NewsSection from '@/components/NewsSection/NewsSection';

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <MusicSection />
      <NewsSection />
    </main>
  );
}
