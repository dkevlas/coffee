import Layout from '@/Layout';
import { ReactNode } from 'react';
import {
  LinksFooter,
  SocialMediaFooter,
} from '@/components/footer/FooterComps';

export default function FooterTemplate(): ReactNode {
  return (
    <Layout
      as={'footer'}
      className="flex flex-col md:flex-row py-12 gap-4 md:gap-8 lg:gap-16"
    >
      <h3 className="text-center font-opensans text-xl px-4 font-bold">
        COFFEE
      </h3>
      <LinksFooter />
      <SocialMediaFooter />
    </Layout>
  );
}
