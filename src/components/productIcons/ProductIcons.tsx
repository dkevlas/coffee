import { IcoCake, IcoCoffee, IcoCoffeeCup, IcoFrappe } from '@/icons/Icons';
import Layout from '@/Layout';
import { ReactNode } from 'react';

const stylesIcons: string = 'fill-dark-brown w-[50px] h-[50px]';

interface ProductIco {
  ico: ReactNode;
  text: string;
}

const icons: ProductIco[] = [
  {
    ico: <IcoCoffee className={`${stylesIcons}`} />,
    text: 'Hot Coffee',
  },
  {
    ico: <IcoFrappe className={`${stylesIcons}`} />,
    text: 'Cold Coffee',
  },
  {
    ico: <IcoCoffeeCup className={`${stylesIcons}`} />,
    text: 'Cup Coffee',
  },
  {
    ico: <IcoCake className={`${stylesIcons}`} />,
    text: 'Dessert',
  },
];

export default function ProductIcons(): ReactNode {
  return (
    <Layout as={'section'} className="flex justify-evenly py-8 max-w-screen-xl">
      {icons.map((value, index) => (
        <div key={index} className="flex flex-col items-center">
          {value.ico}
          <b className="text-dark-brown text-[clamp(0.563rem,_0.473rem_+_0.238vw,_0.688rem)]">
            {value.text}
          </b>
        </div>
      ))}
    </Layout>
  );
}
