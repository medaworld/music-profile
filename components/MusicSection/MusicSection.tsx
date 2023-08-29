'use client';

import { ReleasesList } from '../../utils/dataUtils';
import MusicCarousel from './MusicCarousel';
import { MusicContainer } from './MusicSectionStyles';

const MusicSection = () => {
  return (
    <MusicContainer id="music">
      <MusicCarousel releases={ReleasesList} />
    </MusicContainer>
  );
};

export default MusicSection;
