import { ContentHero } from '@/components/hero/ContentHero';
import { Hero } from '@/components/hero/Hero';
import { ReactNode } from 'react';

export default function HeroTemplate(): ReactNode {
  return (
    <>
      <Hero children={<ContentHero />} />
    </>
  );
}
