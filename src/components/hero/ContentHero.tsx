import Layout from '@/Layout';
import { ReactNode } from 'react';
import { Button } from '../ui/button';

export function ContentHero(): ReactNode {
  return (
    <Layout as={'div'} className="h-full flex items-center px-8">
      <div className="flex flex-col gap-2 w-[90%] sm:w-[70%] text-cloud-white px- font-opensans max-w-[650px] text-pretty">
        <h3 className="text-[clamp(1.125rem,_0.825rem_+_1.2vw,_1.875rem)] font-[500]">
          Welcome!
        </h3>
        <p className="text-[clamp(1.5625rem,_1.0625rem_+_2vw,_2.8125rem)] font-[700]">
          We serve the richest coffee in the city!
        </p>
        <Button className="bg-cloud-white hover:bg-light-beige text-dark-brown w-max py-2 px-4 text-xs font-bold">
          Order now
        </Button>
      </div>
    </Layout>
  );
}
