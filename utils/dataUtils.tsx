import { Icon } from '../components/common/Icon';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';

export const HeroPlayerTrackData = {
  title: 'Call Me',
  url: 'https://www.youtube.com/watch?v=T2ci4EvY6sI',
  image: '/images/albumart/callme.webp',
  platforms: [
    {
      title: 'Spotify',
      icon: FaSpotify,
      url: 'https://open.spotify.com/album/4L5mdAru7lBJSULtFYDUVF',
    },
    {
      title: 'Apple Music',
      icon: FaApple,
      url: 'https://music.apple.com/us/album/call-me-single/1518280370',
    },
    {
      title: 'SoundCloud',
      icon: FaSoundcloud,
      url: 'https://soundcloud.com/mr_hong/call-me',
    },
    {
      title: 'YouTube',
      icon: FaYoutube,
      url: 'https://music.youtube.com/watch?v=T2ci4EvY6sI',
    },
    {
      title: 'Amazon Music',
      icon: FaAmazon,
      url: 'https://music.amazon.com/albums/B088F6KZ2M',
    },
  ],
};

export const ReleasesList = [
  {
    title: 'Creepin x F*ck Love',
    albumArt: '/images/albumart/creepinxflove.webp',
    url: 'https://www.youtube.com/watch?v=a4yX9Hsw5Fk',
    soundCloud:
      'https://soundcloud.com/medaworld/creepin-x-fuck-love-metro-boomin-vs-xxxtentacion',
    youtube: 'https://www.youtube.com/watch?v=a4yX9Hsw5Fk',
  },
  {
    title: 'Kill Bill x Summer',
    albumArt: '/images/albumart/killbillsummer.webp',
    url: 'https://www.youtube.com/watch?v=G5Np5acoHCY',
    soundCloud:
      'https://soundcloud.com/medaworld/kill-bill-x-summer-sza-vs-brockhampton',
    youtube: 'https://www.youtube.com/watch?v=G5Np5acoHCY',
  },
  {
    title: 'ditto x thank u, next',
    albumArt: '/images/albumart/dittoxthanku.webp',
    url: 'https://www.youtube.com/watch?v=1K-MC8PjXX8',
    soundCloud:
      'https://soundcloud.com/medaworld/ditto-x-thank-u-next-newjeans-vs-ariana-grande',
    youtube: 'https://www.youtube.com/watch?v=1K-MC8PjXX8',
  },
  {
    title: 'Nuture Worlds (Porter Robinson Mashup)',
    albumArt: '/images/albumart/nurtureworlds.webp',
    url: 'https://www.youtube.com/watch?v=heG9axS1rQQ',
    soundCloud: 'https://soundcloud.com/medaworld/nurture-worlds-mashup',
    youtube: 'https://www.youtube.com/watch?v=heG9axS1rQQ',
  },
  {
    title: `OMG x Boy's a liar Pt. 2`,
    albumArt: '/images/albumart/omgxbal.webp',
    url: 'https://www.youtube.com/watch?v=E3emeun_bYg',
    soundCloud:
      'https://soundcloud.com/medaworld/omg-x-boys-a-liar-pt-2-newjeans-vs-pinkpantheress-ice-spice',
    youtube: 'https://www.youtube.com/watch?v=E3emeun_bYg',
  },
  {
    title: `Call Me (w Mr. Hong)`,
    albumArt: '/images/albumart/callme.webp',
    url: 'https://www.youtube.com/watch?v=T2ci4EvY6sI',
    spotify: 'https://open.spotify.com/album/6vIIcNTPSbPxoK9FrjKK7D',
    appleMusic: 'https://music.apple.com/us/album/call-me-single/1518280370',
    soundCloud: 'https://soundcloud.com/mr_hong/call-me',
    youtube: 'https://music.youtube.com/watch?v=T2ci4EvY6sI',
    amazonMusic: 'https://music.amazon.com/albums/B088F6KZ2M',
  },
  {
    title: `Medaphorical Donuts`,
    albumArt: '/images/albumart/medaphoricaldonuts.webp',
    url: 'https://www.youtube.com/watch?v=QkXiaPqRkfc&list=PLMnS1ozHuTRp4UQEJhFVroZflss8d9UUb',
    soundCloud: 'https://soundcloud.com/medaworld/sets/medaphorical-donuts',
    youtube:
      'https://www.youtube.com/watch?v=QkXiaPqRkfc&list=PLMnS1ozHuTRp4UQEJhFVroZflss8d9UUb',
    bandcamp: 'https://meda.bandcamp.com/album/medaphorical-donuts-2',
  },
];

export const videoList = ['https://www.youtube.com/watch?v=s6sEmA_d_nc'];

export const SocialMediaList = [
  {
    platform: 'Instagram',
    case: 'instagram',
    icon: <Icon>&#xea92;</Icon>,
    url: 'https://www.instagram.com/meda.world',
  },
  {
    platform: 'YouTube',
    case: 'youtube',
    icon: <Icon>&#xea9d;</Icon>,
    url: 'https://www.youtube.com/@MEDAworld',
  },
  {
    platform: 'TikTok',
    case: 'tiktok',
    icon: <Icon>&#xe900;</Icon>,
    url: 'https://www.tiktok.com/@meda.world',
  },
  {
    platform: 'Twitter',
    case: 'twitter',
    icon: <Icon>&#xea96;</Icon>,
    url: 'https://twitter.com/meda_world',
  },
  {
    platform: 'Facebook',
    case: 'facebook',
    icon: <Icon>&#xea90;</Icon>,
    handle: '680730298746554', // Page ID
    url: 'https://www.facebook.com/6807302987465543',
  },
  {
    platform: 'Spotify',
    case: 'spotify',
    icon: <Icon>&#xea94;</Icon>,
    url: 'https://open.spotify.com/artist/6LNB1xM65Kb9H45cyNdofm',
  },
  {
    platform: 'Apple Music',
    case: 'applemusic',
    icon: <Icon>&#xeabe;</Icon>,
    url: 'https://music.apple.com/artist/medafiziks/1374546080',
  },
  {
    platform: 'Soundcloud',
    case: 'soundcloud',
    icon: <Icon>&#xeac3;</Icon>,
    url: 'https://on.soundcloud.com/4kHtEZBpxzJGpoqS9', // Mobile Share Link
  },
];
