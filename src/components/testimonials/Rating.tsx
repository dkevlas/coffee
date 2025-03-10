import { ReactNode } from 'react';

interface RatingProps {
  className?: string;
  rating: number;
}

export default function Rating({ className, rating }: RatingProps): ReactNode {
  const stars: number[] = [1, 2, 3, 4, 5];
  return (
    <div className={`${className} flex`}>
      {stars.map((i) => (
        <span
          key={i}
          className={`${i <= rating ? 'text-yellow-400' : 'text-pale-beige'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
