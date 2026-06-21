'use client';

import styled from 'styled-components';

// Frame viewBox 390×844, screen area x=14 y=14 w=362 h=816 rx=42
// As percentages of the frame dimensions:
const LEFT   = `${(14 / 390) * 100}%`;
const TOP    = `${(14 / 844) * 100}%`;
const WIDTH  = `${(362 / 390) * 100}%`;
const HEIGHT = `${(816 / 844) * 100}%`;

const Wrapper = styled.div`
  position: relative;
  display: block;
`;

const FrameImg = styled.img`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  pointer-events: none;
`;

const ScreenImg = styled.img`
  position: absolute;
  left: ${LEFT};
  top: ${TOP};
  width: ${WIDTH};
  height: ${HEIGHT};
  object-fit: cover;
  border-radius: 10.8%;
  z-index: 0;
`;

export function IPhoneFrame({ src, alt = 'App screenshot' }: { src: string; alt?: string }) {
  return (
    <Wrapper>
      <ScreenImg src={src} alt={alt} />
      <FrameImg src="/iphone-frame.svg" alt="" />
    </Wrapper>
  );
}
