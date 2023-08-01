import MusicCarousel from './MusicCarousel';
import { MusicContainer } from './MusicSectionStyles';

const releases = [
  {
    title: 'Comeback Season',
    albumArt: '/images/comebackseason.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
  {
    title: 'So Far Gone',
    albumArt: '/images/sofargone.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
  {
    title: 'Thank Me Later',
    albumArt: '/images/thankmelater.jpg',
    spotify: 'link1',
    appleMusic: 'link2',
    soundCloud: 'link3',
    youtube: 'link4',
    amazonMusic: 'link5',
  },
  {
    title: 'Take Care',
    albumArt: '/images/takecare.jpg',
    spotify: 'link6',
    appleMusic: 'link7',
    soundCloud: 'link8',
    youtube: 'link9',
    amazonMusic: 'link10',
  },
  {
    title: 'Nothing Was The Same',
    albumArt: '/images/nwts.jpg',
    spotify: 'link11',
    appleMusic: 'link12',
    soundCloud: 'link13',
    youtube: 'link14',
    amazonMusic: 'link15',
  },
  {
    title: "If You're Reading This, It's Too Late",
    albumArt: '/images/iyrtitl.jpg',
    spotify: 'link11',
    appleMusic: 'link12',
    soundCloud: 'link13',
    youtube: 'link14',
    amazonMusic: 'link15',
  },
  {
    title: 'What A Time To Be Alive',
    albumArt: '/images/whatatime.jpg',
    spotify: 'link11',
    appleMusic: 'link12',
    soundCloud: 'link13',
    youtube: 'link14',
    amazonMusic: 'link15',
  },
  {
    title: 'Views',
    albumArt: '/images/views.jpg',
    spotify: 'link16',
    appleMusic: 'link17',
    soundCloud: 'link18',
    youtube: 'link19',
    amazonMusic: 'link20',
  },
  {
    title: 'More Life',
    albumArt: '/images/morelife.jpg',
    spotify: 'link21',
    appleMusic: 'link22',
    soundCloud: 'link23',
    youtube: 'link24',
    amazonMusic: 'link25',
  },
  {
    title: 'Scorpion',
    albumArt: '/images/scorpion.jpg',
    spotify: 'link26',
    appleMusic: 'link27',
    soundCloud: 'link28',
    youtube: 'link29',
    amazonMusic: 'link30',
  },
  {
    title: 'Dark Lane Demo Tapes',
    albumArt: '/images/darklane.jpg',
    spotify: 'link26',
    appleMusic: 'link27',
    soundCloud: 'link28',
    youtube: 'link29',
    amazonMusic: 'link30',
  },
  {
    title: 'Certified Lover Boy',
    albumArt: '/images/clb.jpg',
    spotify: 'link31',
    appleMusic: 'link32',
    soundCloud: 'link33',
    youtube: 'link34',
    amazonMusic: 'link35',
  },
  {
    title: 'Honestly, Nevermind',
    albumArt: '/images/honestly.jpg',
    spotify: 'link31',
    appleMusic: 'link32',
    soundCloud: 'link33',
    youtube: 'link34',
    amazonMusic: 'link35',
  },
  {
    title: 'Her Loss',
    albumArt: '/images/herloss.jpg',
    spotify: 'link31',
    appleMusic: 'link32',
    soundCloud: 'link33',
    youtube: 'link34',
    amazonMusic: 'link35',
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
