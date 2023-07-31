import styled from 'styled-components';
import MusicCarousel from './MusicCarousel';

const MusicContainer = styled.div`
  padding-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const releases = [
  {
    title: 'Nothing Was The Same',
    albumArt: '/images/nwts.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
  {
    title: 'Take Care',
    albumArt: '/images/takecare.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
  {
    title: 'Comeback Season',
    albumArt: '/images/comebackseason.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
];

const MusicSection = () => {
  return (
    <MusicContainer id="music">
      <MusicCarousel releases={releases} />
    </MusicContainer>
  );
};

export default MusicSection;
