import { ReactNode } from 'react';
import Rating from './Rating';
export interface Comments {
  comment: {
    Nombre: string;
    Ciudad: string;
    Comentario: string;
    Calificacion: number;
    Foto: string;
  };
  className?: string;
  cardIndex: number;
}

export default function TestimonialCard({
  comment,
  className,
  cardIndex,
}: Comments): ReactNode {
  const stylesToSM = 'max-w-[clamp(15.625rem,_11.8534rem_+_20.1149vw,_20rem)]';
  const stylesToMD = 'sm:max-w-[clamp(17.5rem,_-2.75rem_+_50vw,_21.25rem)]';
  const stylesToLG = 'lg:max-w-[clamp(18.7rem,_5.416rem_+_20.833vw,_26.25rem)]';
  return (
    <div
      className={`${className} ${stylesToSM} ${stylesToMD} ${stylesToLG} ${cardIndex === 1 ? 'lg:scale-110' : ''} h-[200px] bg-light-beige p-2 lg:p-4 flex flex-col gap-2 shadow-md font-opensans`}
    >
      <div className="flex flex-col xl:flex-row lg:justify-between p-1">
        <div className="flex justify-center gap-2 w-full lg:justify-start">
          <img
            className="w-[60px] aspect-square object-cover rounded-full"
            src={comment.Foto}
            alt={comment.Nombre}
          />
          <div className="flex flex-col text-start w-full justify-center ">
            <span className="font-bold text-nowrap">{comment.Nombre}</span>
            <span className="text-[clamp(0.75rem,_0.5938rem_+_0.5vw,_0.875rem)]">
              {comment.Ciudad}
            </span>
          </div>
        </div>
        <Rating
          rating={comment.Calificacion}
          className="w-max mx-auto xl:mx-0"
        />
      </div>
      <p className="text-[clamp(0.75rem,_0.5938rem_+_0.5vw,_0.875rem)] text-start text-pretty">
        {comment.Comentario}
      </p>
    </div>
  );
}
