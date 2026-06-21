import { Hero } from './sections/Hero';
import { Claim } from './sections/Claim';
import { Features } from './sections/Features';
import { Testimonials } from './sections/Testimonials';
import { CTA } from './sections/CTA';
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
      <Testimonials />
      <GridDivider />
      <CTA />
      <GridDivider />
      <Blog />
    </main>
  );
}
