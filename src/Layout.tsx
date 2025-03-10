import { ElementType, ReactNode } from 'react';

interface LayoutProps {
  as: ElementType;
  children: ReactNode;
  className?: string;
}

export default function Layout({
  as: Element = 'div',
  children,
  className,
  ...props
}: LayoutProps): ReactNode {
  return (
    <Element
      className={`${className} max-w-screen-2xl mx-auto min-w-[300px] px-4`}
      {...props}
    >
      {children}
    </Element>
  );
}
