import { ReactNode } from 'react';
import { Button } from '../ui/button';

interface ProductsProps {
  products: {
    titulo: string;
    descripcion: string;
    imagen: string;
    precio: number;
  }[];
}

export default function Card({ products }: ProductsProps): ReactNode {
  return (
    <>
      {products &&
        products.map((values, index) => (
          <li
            key={index}
            className="w-full gap-1 p-2 rounded-md flex flex-col bg-cool-beige shadow-lg"
          >
            <img
              src={values.imagen}
              alt={values.titulo}
              className="w-full aspect-[4/5] object-cover object-center"
            />
            <div className="flex flex-col h-full justify-between gap-2">
              <div className="">
                <h2 className="font-semibold">{values.titulo}</h2>
                <p className="text-[clamp(0.625rem,_0.5074rem_+_0.4706vw,_0.875rem)]">
                  {values.descripcion}
                </p>
              </div>
              <div className="flex flex-wrap justify-between">
                <b>${values.precio}</b>
                <Button className="bg-dark-brown hover:bg-toasted-coffee">
                  Order now
                </Button>
              </div>
            </div>
          </li>
        ))}
    </>
  );
}
