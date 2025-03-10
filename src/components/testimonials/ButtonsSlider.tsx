import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonsSliderProps {
  change: (_index: number) => void;
  positionCurrent: number;
}

export default function ButtonsSlider({
  change,
  positionCurrent,
}: ButtonsSliderProps): ReactNode {
  return (
    <div className="flex justify-center gap-4 items-center z-40">
      {Array(3)
        .fill(0)
        .map((_item, index) => (
          <Button
            key={index}
            onClick={() => change(index)}
            className={`bg-dark-brown w-[15px] h-[15px] p-0 rounded-full aspect-square hover:bg-dark-brown ${positionCurrent === index ? 'shadow-md' : 'opacity-80'}`}
          />
        ))}
    </div>
  );
}
