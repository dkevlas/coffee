import ProductIcons from '@/components/productIcons/ProductIcons';
import TopCoffeePicks from '@/components/topCoffeePicks/TopCoffeePicks';
import Layout from '@/Layout';
import HeroTemplate from '@/templates/hero/HeroTemplate';
import NavTemplate from '@/templates/navbar/NavbarTemplate';
import TestimonialTemplate from '@/templates/testimonial/TestimonialTemplate';
import SpecialsTemplate from '@/templates/specials/SpecialsTemplate';
import { ReactNode } from 'react';
import Newsletter from '@/components/newsletter/Newsletter';
import FooterTemplate from '@/templates/footer/FooterTemplate';

export default function HomePage(): ReactNode {
  return (
    <>
      <Layout as={'nav'} className="left-1/2 -translate-x-1/2 absolute w-full">
        <NavTemplate />
      </Layout>
      <HeroTemplate />
      <ProductIcons />
      <SpecialsTemplate />
      <TopCoffeePicks />
      <TestimonialTemplate />
      <Newsletter />
      <div className="bg-dark-brown text-light-beige">
        <FooterTemplate />
      </div>
    </>
  );
}
