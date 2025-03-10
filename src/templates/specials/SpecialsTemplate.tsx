import { ReactNode } from 'react';
import specialsCoffe from '@/mocks/specialsCoffee.json';
import specialCake from '@/mocks/specialsCake.json';
import CardContainer from '@/components/specials/CardContainer';
import Card from '@/components/specials/Card';

export default function SpecialsTemplate(): ReactNode {
  return (
    <div className="bg-pale-beige pb-8">
      <CardContainer
        subtitle="OUR SPECIAL COFFEE"
        children={<Card products={specialsCoffe} />}
      />
      <CardContainer
        subtitle="OUR SPECIAL DESERT"
        children={<Card products={specialCake} />}
      />
    </div>
  );
}
