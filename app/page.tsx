'use client';

import styled from 'styled-components';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Download from './sections/Download';
import Footer from './components/Footer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f3f6f6;
`;

export default function Home() {
  return (
    <Main>
      <NavigationBar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="download">
        <Download />
      </section>
      <Footer />
    </Main>
  );
}
