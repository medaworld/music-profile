import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const OptionButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const ExploreButton = styled.a`
  padding: 12px 20px;
  font-size: 18px;
  background-color: #ffffff;
  color: #333333;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const LandingPage = () => {
  return (
    <HeroSection>
      <OptionButtons>
        <Link href="/meda">
          <ExploreButton>Explore MEDA</ExploreButton>
        </Link>
        <Link href="/medafiziks">
          <ExploreButton>Explore medafiziks</ExploreButton>
        </Link>
      </OptionButtons>
    </HeroSection>
  );
};

export default LandingPage;
