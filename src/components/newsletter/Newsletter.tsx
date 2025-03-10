import { ReactNode } from 'react';
import { Button } from '../ui/button';
import Layout from '@/Layout';

export default function Newsletter(): ReactNode {
  return (
    <div className="relative">
      <Layout
        as={'section'}
        className="text-center flex flex-col gap-2 py-16 text-dark-brown"
      >
        <b>Join in and get 15% off!</b>
        <p className="text-shadow-light-beige text-sm">
          Subscribe to our newsletter and get 15% off discount code
        </p>
        <div className="flex gap-2 items-center justify-center mx-auto flex-wrap">
          <div className="relative">
            <input
              className="bg-pale-beige py-2 px-4 rounded-3xl outline-none w-[clamp(15.625rem,_12.8409rem_+_12.7273vw,_20rem)] placeholder:text-olive-gray"
              type="email"
              placeholder="✉️ Email address"
            />
          </div>
          <Button className="bg-dark-brown hover:bg-toasted-coffee py-2 px-4 rounded-3xl">
            Subscribe
          </Button>
        </div>
        <img
          className="absolute top-0 left-0 h-full z-[-1] brightness-95"
          src="https://global-media-repository.s3.us-east-2.amazonaws.com/coffee/components/newslatter-left.png"
        />
        <img
          className="absolute right-0 bottom-0 h-full z-[-1] brightness-95"
          src="https://global-media-repository.s3.us-east-2.amazonaws.com/coffee/components/newsletter-right.png"
        />
      </Layout>
    </div>
  );
}
