import Layout from '@/Layout';
import { ReactNode } from 'react';
import { Button } from '../ui/button';

export default function TopCoffeePicks(): ReactNode {
  return (
    <div className="relative">
      <Layout as={'section'} className="py-8 flex justify-center">
        <div className="w-max flex flex-col gap-2">
          <h2 className="text-[clamp(1.5625rem,_0.9375rem_+_2.5vw,_3.125rem)] font-bold text-dark-brown font-opensans">
            Check out our best <br /> coffee betans
          </h2>
          <Button className="bg-dark-brown hover:bg-toasted-coffee w-max text-cloud-white rounded-3xl py-2 px-6 text-xs">
            Explore our products
          </Button>
        </div>
      </Layout>
      <img
        src="https://global-media-repository.s3.us-east-2.amazonaws.com/coffee/components/top-coffee-picks-left.png"
        className="absolute left-0 top-0 h-full z-[-1] brightness-95"
      />
      <img
        src="https://global-media-repository.s3.us-east-2.amazonaws.com/coffee/components/top-coffee-picks-right.png"
        className="absolute top-0 right-0 h-full z-[-1] brightness-95"
      />
    </div>
  );
}
