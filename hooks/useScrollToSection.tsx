import { usePathname, useRouter } from 'next/navigation';

const useScrollToSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`, { scroll: true });
    } else {
      performScroll(sectionId);
    }
  };

  const performScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return scrollToSection;
};

export default useScrollToSection;
