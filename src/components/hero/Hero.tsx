import { ReactNode } from 'react';

interface HeroProps {
  children?: ReactNode;
}

export function Hero({ children }: HeroProps): ReactNode {
  return (
    <>
      <div className="bg-[url('https://global-media-repository.s3.us-east-2.amazonaws.com/coffee/components/coffee-hero.webp')] bg-center bg-cover h-[clamp(21.875rem,_14.375rem_+_30vw,_40.625rem);]">
        {children}
      </div>
    </>
  );
}
