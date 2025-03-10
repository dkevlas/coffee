import { ReactNode, useEffect, useRef } from 'react';
import comments from '@/mocks/comments.json';
import TestimonialCard from './TestimonialCard';
import { BlocksComments } from '@/lib/blocksComments';

interface TestimonialProps {
  className?: string;
  blockCurrent: number;
}

export default function Testimonial({
  className,
  blockCurrent,
}: TestimonialProps): ReactNode {
  const blocks = BlocksComments(comments);
  const refElSection: React.LegacyRef<HTMLElement> = useRef(null);
  useEffect(() => {
    if (refElSection.current) {
      refElSection.current.style.left = `-${100 * blockCurrent}%`;
    }
  }, [blockCurrent]);
  return (
    <>
      <section
        ref={refElSection}
        className={`${className} flex w-[300%] absolute h-full transition-all`}
      >
        {blocks &&
          blocks.map((items, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-[25px] lg:gap-[15px] justify-center items-center content-center w-full lg:justify-evenly"
            >
              {items.map((values, i) => (
                <TestimonialCard key={i} comment={values} cardIndex={i} />
              ))}
            </div>
          ))}
      </section>
    </>
  );
}
