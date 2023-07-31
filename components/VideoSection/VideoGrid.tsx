import styled from 'styled-components';
import dynamic from 'next/dynamic';
import React from 'react';
import { SectionTitle } from '../styles/Fonts';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoGridContainer = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1500px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

const MoreVideosButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e50000;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const VideoGrid = ({ videos }) => (
  <VideoGridContainer>
    <TitleWrapper>
      <SectionTitle>VIDEO</SectionTitle>
    </TitleWrapper>
    <GridContainer>
      {videos.map((video, index) => (
        <VideoWrapper key={index}>
          <ReactPlayer
            url={video}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            width="100%"
            height="100%"
            controls
          />
        </VideoWrapper>
      ))}
    </GridContainer>
    <ButtonWrapper>
      <MoreVideosButton href="https://www.youtube.com" target="_blank">
        More Videos
      </MoreVideosButton>
    </ButtonWrapper>
  </VideoGridContainer>
);

export default VideoGrid;
