import { Hero } from './sections/Hero';
import { Claim } from './sections/Claim';
import { Features } from './sections/Features';
import { Agreement } from './sections/Agreement';
import { Testimonials } from './sections/Testimonials';
import { Blog } from './sections/Blog';
import { GridDivider } from '@/components/GridGuide';

export default function Home() {
  return (
    <main>
      <GridDivider />
      <Hero />
      <GridDivider />
      <Claim />
      <GridDivider />
      <Features />
      <GridDivider />
      <Agreement />
      <GridDivider />
      <Testimonials />
      <GridDivider />
      <Blog />
    </main>
  );
}
