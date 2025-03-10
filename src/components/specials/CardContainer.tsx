import Layout from '@/Layout';
import { ReactNode } from 'react';

interface CardContainerProps {
  subtitle: string;
  children: ReactNode;
}

export default function CardContainer({
  subtitle,
  children,
}: CardContainerProps): ReactNode {
  return (
    <Layout as={'section'} className="p-4 lg:px-8 max-w-[1400px]">
      <h2 className="text-dark-brown font-opensans font-semibold my-4 text-center text-[clamp(1.125rem,_0.8309rem_+_1.1765vw,_1.75rem)]">
        {subtitle}
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 lg:gap-16">
        {children}
      </ul>
    </Layout>
  );
}
