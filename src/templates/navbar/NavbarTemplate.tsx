import { ListNav, listNav } from '@/components/navbar/listNav';
import NavDesktop from '@/components/navbar/NavDesktop';
import NavMobile from '@/components/navbar/NavMobile';
import { ReactNode } from 'react';

export interface ListNavProps {
  li: ListNav[];
  className?: string;
}

export default function NavTemplate(): ReactNode {
  return (
    <>
      <NavMobile li={listNav} className="md:hidden py-3" />
      <NavDesktop li={listNav} className="hidden md:flex p-4" />
    </>
  );
}
