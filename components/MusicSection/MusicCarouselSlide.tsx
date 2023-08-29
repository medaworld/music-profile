import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
} from 'react-icons/fa';
import { SiBandcamp } from 'react-icons/si';
import {
  AudioWrapper,
  Button,
  Buttons,
  GridIcon,
  ReleaseTitle,
  SlideContent,
} from './MusicSectionStyles';
import AudioPlayer from '../common/AudioPlayer/AudioPlayer';
import { DarkOverShadow } from '../common/DarkOverShadow';
import GridImage from '../../public/images/grid-icon.svg';
import { ReleasesProps } from '@/types/types';
import { MutableRefObject } from 'react';

export default function MusicCarouselSlide({
  release,
  sliderRef,
}: {
  release: ReleasesProps;
  sliderRef: MutableRefObject<any>;
}) {
  return (
    <SlideContent albumArt={release.albumArt}>
      <DarkOverShadow opacity={0} />
      <ReleaseTitle>{release.title}</ReleaseTitle>
      <Buttons>
        {release.spotify && (
          <a href={release.spotify} target="_blank" rel="noopener noreferrer">
            <Button>
              <FaSpotify /> Listen Now
            </Button>
          </a>
        )}
        {release.appleMusic && (
          <a
            href={release.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaApple /> Listen Now
            </Button>
          </a>
        )}
        {release.soundCloud && (
          <a
            href={release.soundCloud}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaSoundcloud /> Listen Now
            </Button>
          </a>
        )}
        {release.youtube && (
          <a href={release.youtube} target="_blank" rel="noopener noreferrer">
            <Button>
              <FaYoutube /> Listen Now
            </Button>
          </a>
        )}
        {release.amazonMusic && (
          <a
            href={release.amazonMusic}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaAmazon /> Listen Now
            </Button>
          </a>
        )}
        {release.bandcamp && (
          <a href={release.bandcamp} target="_blank" rel="noopener noreferrer">
            <Button>
              <SiBandcamp /> Listen Now
            </Button>
          </a>
        )}
      </Buttons>
      <GridIcon
        img={GridImage.src}
        onClick={() => sliderRef.current.slickGoTo(0)}
      />
      <AudioWrapper>
        <AudioPlayer audioSrc={release.url} />
      </AudioWrapper>
    </SlideContent>
  );
}
